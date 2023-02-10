import { GetterTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const getters: GetterTree<IUsersState, IState> = {
    getUsers(state) {
        return state.users;
    },
    getIsLoading(state) {
        return state.isLoading;
    }
}

export default getters;
