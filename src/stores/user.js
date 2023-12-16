import {defineStore} from "pinia";
import {ref} from "vue";
import {useApiStore} from "@/stores/api";
import router from "@/router";

export const useUserStore = defineStore('userStore', () => {
    const isAuthorized = ref(false);
    const user = ref({});

    const getUserInfo = async () => {
        const apiStore = useApiStore();
        const response = await apiStore.get('/me', {}, (res) => {
            console.log('Failed get user info!');
            router.push('/login');
            isAuthorized.value = false;
        });

        console.log(response)
        if(typeof response === 'undefined') {
            return false;
        }

        user.value = response;
        isAuthorized.value = true;

    };

    return {
        isAuthorized,
        user,
        getUserInfo
    };
});