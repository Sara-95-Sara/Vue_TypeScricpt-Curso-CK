import { Product } from '@/models/product';
import fakeShopApi from "@/api/fakeShopApi";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";
import { AxiosResponse } from 'axios';

const actions: ActionTree<IProductsState, IState> = {
    async fetchProducts({commit}) {
        // usamos la mutation para poner isLoading = true
       commit('setIsLoading', true);  // modificar el state

       // obtenemos los datos de manera asincrona
       const {data} = await fakeShopApi.get<unknown, AxiosResponse<Product[]>>('/products');
       
       // usamos la mutation para poner isLoading = false
       commit('setIsLoading', false);

       // usamos la mutacion para volcar los datos obtenidos en la variable del state users
       commit('setProducts', data);
    }
}

export default actions;