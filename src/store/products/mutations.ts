import { Product } from "@/models/product";
import { MutationTree } from "vuex";
import { IProductsState } from "./state";

const mutations: MutationTree<IProductsState> = {
    setProducts(state: IProductsState, products: Product[]) {
       state.products = products; // listado de ususarios
    },
    setIsLoading(state: IProductsState, value: boolean) {
        state.isLoading = value;
    }
}

export default mutations;