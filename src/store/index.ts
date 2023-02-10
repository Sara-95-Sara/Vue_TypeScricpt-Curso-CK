import { Product } from "@/models/product";
import { createStore } from "vuex";
import cartModule from "./cart.ts";
import productsModule from "./products";
import usersModule from "./users";

export interface IState {
  authUser: Product | null; 
  greeting: string;
}

export default createStore<IState>({
  state: {
    authUser: null,
    greeting: "Hola a todas!",
  },
  mutations: {
    cambiaSaludo(state, saludo: string) {
      return state.greeting;
    }
  },
  getters: {
    saludo(state) {
      return state.greeting;
    }
  },
  actions: {},
  modules: {
    cart: cartModule,
    users: usersModule,
    products: productsModule,
  },
});