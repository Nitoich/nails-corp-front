import {defineStore} from "pinia";
import {ref} from "vue";

export const useRecordsStore = defineStore('recordsStore', () => {
    const records = ref([]);
    const todayRecords = ref([
        {
            id: '1',
            client_name: "Светочка",
            time: "9:30"
        }
    ]);

    return  {
        records,
        todayRecords
    };
});