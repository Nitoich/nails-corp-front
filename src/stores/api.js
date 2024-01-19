import {defineStore} from "pinia";
import {ref} from "vue";
import {useUserStore} from "@/stores/user";

export const useApiStore = defineStore('apiStore', () => {
    const access_token = ref('');
    const apiLink = "http://api-nails.nitoich.tw1.ru/api/v1";
    const canRefresh = ref(true);

    const access_token_from_cache = localStorage.getItem("access_token");

    if(typeof access_token_from_cache !== 'undefined') {
        access_token.value = access_token_from_cache;
    }

    const login = async(data, onFailure = () => {}) => {
        const res = await fetch(`${apiLink}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(res.status >= 400) {
            onFailure(res);
            return null;
        }

        const data_json = await res.json();
        access_token.value = data_json.data.access_token;
        localStorage.setItem('access_token', access_token.value);
        return data_json.data;
    };


    const refresh = async (onFailure = () => {}) => {
        const res = await fetch(`${apiLink}/refresh`, {
            method: "GET",
            credentials: "same-origin"
        }).catch((err) => {return err});
        if(res.status >= 400) {
            onFailure(res);
            return null;
        }
        const userStore = useUserStore();
        userStore.isAuthorized = true;
        const data = await res.json();
        access_token.value = data.data.access_token;
        localStorage.setItem('access_token', access_token.value);
        return data.data;
    };

    const request = async(url, method, options, onFailure) => {
        if(typeof options.params === "undefined") { options.params = {}; }
        if(typeof options.body === "undefined") { options.body = {}; }
        if(typeof options.headers === "undefined") { options.headers = {}; }

        const request_options = {
            method,
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${access_token.value}`,
                "Content-Type": "application/json"
            },
        };

        if(method.toLowerCase() !== "get") { request_options.body = JSON.stringify(options.body); }
        if(Object.keys(options.headers).length === 0) {
            request_options.headers = {
                ...request_options.headers,
                ...options.headers
            };
        }

        const res = await fetch(`${apiLink}${url}?${new URLSearchParams(options.params).toString()}`, request_options);
        if(res.status >= 400) {
            switch (res.status) {
                case 401:
                case 403:
                    if(canRefresh.value) {
                        canRefresh.value = false;
                        let success = true;
                        await refresh(() => { success = false; });
                        canRefresh.value = true;
                        if(success) { await request(url, method, options, onFailure) }
                        else { onFailure(res); }
                    }
                    break;
                default:
                    onFailure(res);
                    break;
            }
        }

        const data = await res.json();
        return data.data;
    };

    const get = async(url, params = {}, onFailure = () => {}) => {
        return await request(url, "get", { params }, onFailure);
    };

    const post = async(url, body, onFailure = () => {}) => {
        return await request(url, "post", { body }, onFailure)
    };

    return {
        access_token,
        login,
        get
    };
});