import { createStore } from 'vuex'

export default createStore({
  state: {
    authProduct: {
      id: 5,
      email: 'hola@email.com',
      name: 'Pepe',
    },
    greeting: 'Hola',
  },
  mutations: {
    cambiaSaludo(state, saludo: string) {
      state.greeting = saludo;
    }
  },
  
  getters: {
    saludo(state, getters) {
      return state.greeting;
    }
  },
  actions: {
  },
  modules: {
  }
})
