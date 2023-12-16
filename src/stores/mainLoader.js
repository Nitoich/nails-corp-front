import {defineStore} from "pinia";
import {ref} from "vue";

export const useMainLoaderStore = defineStore('mainLoaderStore', () => {
    const active = ref(false);
    const message = ref("");

    const enable = (msg = '') => {
        active.value = true;
        message.value = msg;
    };

    const disable = () => {
        active.value = false;
        message.value = '';
    };

    return {active, message, enable, disable};
});