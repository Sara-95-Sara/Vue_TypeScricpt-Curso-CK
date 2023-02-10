import { Module } from "vuex";
import { IState } from "..";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";
import { IUsersState } from "./state";
import actions from "./actions";

const usersModule: Module<IUsersState, IState> = {
    namespaced: true, // eso es obligatorio, para que vuex lo tome como un modul
    state,
    getters,
    mutations,
    actions,
}

export default usersModule;


/*

interface MiInterface<T,S> {
   var1: T,
   func1: () => S
}
// puedo cambiar el number a otro tipo y escribir var1 a nuevo tipo, perro abajo no ha manera para cambiarlo
const instancia: MiInterface<number, boolean> = {
   var1: 4,
   
   //func1() {   // da error, porque he definido tipo de esta funcion `` boolean
   // return 5;
   //}
   
   func1() {   
    return true;
   }
}



// es mas cerrado
interface OtraInterfaz {
    var1: number;
    func1: () => boolean;
}

const instancia2: OtraInterfaz = {
    var1: 2,
    func1() {
        return true;
    },
}

*/