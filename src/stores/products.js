import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useApiStore} from "@/stores/api";

export const useProductsStore = defineStore('productsStore', () => {

    const ApiStore = useApiStore();
    const products = ref([]);
    const getProducts = async (query = {}) => {
        return ApiStore.get("/products", query).then(res => {
            products.value = res;
        });
    };

    const selectorProducts = computed(() => {
        const selectorItems = {};
        products.value.forEach(product => {
            selectorItems[product.id] = product.name;
        });
        return selectorItems;
    });

    return { getProducts, products, selectorProducts };
});