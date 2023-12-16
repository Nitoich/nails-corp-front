import {defineStore} from "pinia";
import {ref} from "vue";
import {useApiStore} from "@/stores/api";

export const useClientsStore = defineStore('clientsStore', () => {
    const clients = ref([]);
    const apiStore = useApiStore();
    const getClients = async (filter = {}) => {
        const res = await apiStore.get(`/users`, filter);
        clients.value = res;
        console.log(clients.value)
    };

    return {clients, getClients};
});