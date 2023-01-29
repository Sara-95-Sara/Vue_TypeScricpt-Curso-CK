import { User } from "@/models/user";
import { createStore } from "vuex";
import cartModule from "./cart.ts";

export interface IState {
  authUser: User | null; 
  greeting: string;
}

export default createStore<IState>({
  state: {
    authUser: null,
    greeting: "Hola a todas!",
  },
  mutations: {
  },
  actions: {},
  modules: {
    cart: cartModule
  },
});