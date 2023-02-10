import { User } from '@/models/user';
import fakeShopApi from "@/api/fakeShopApi";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";
import { AxiosResponse } from 'axios';

const actions: ActionTree<IUsersState, IState> = {
    async fetchUsers({commit}) {
        // usamos la mutation para poner isLoading = true
       commit('setIsLoading', true);  // modificar el state

       // obtenemos los datos de manera asincrona
       const {data} = await fakeShopApi.get<unknown, AxiosResponse<User[]>>('/users');
       
       // usamos la mutation para poner isLoading = false
       commit('setIsLoading', false);

       // usamos la mutacion para volcar los datos obtenidos en la variable del state users
       commit('setUsers', data);
    }
}

export default actions;