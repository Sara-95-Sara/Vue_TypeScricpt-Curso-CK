import { User } from "@/models/user";
import { MutationTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const mutations: MutationTree<IUsersState> = {
    setUsers(state: IUsersState, users: User[]) {
       state.users = users; // listado de ususarios
    },
    setIsLoading(state: IUsersState, value: boolean) {
        state.isLoading = value;
    }
}

export default mutations;