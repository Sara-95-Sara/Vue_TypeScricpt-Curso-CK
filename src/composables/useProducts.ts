import { computed } from "vue";
import { useStore } from "vuex"

const useProducts = () => {
    const store = useStore();

    return {
        // GETTERS
        products: computed(() => store.getters['products/getProducts']),
        isLoading: computed(() => store.getters['products/getIsLoading']),

        // ACTIONS
        fetchProducts: () => store.dispatch('products/fetchProducts')
        
    }
}

export default useProducts;