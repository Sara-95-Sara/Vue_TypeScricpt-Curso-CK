import { Module } from "vuex";
import { IState } from "..";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import { IProductsState } from "./state";
import actions from "./actions";

const productsModule: Module<IProductsState, IState> = {
    namespaced: true, // eso es obligatorio, para que vuex lo tome como un modul
    state,
    getters,
    mutations,
    actions,
}

export default productsModule;