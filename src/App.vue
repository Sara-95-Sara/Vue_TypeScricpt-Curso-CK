<template>
  <NavBar  
    title = "Hola Mundo"
    :color = " 'red' "
    :links = "[
      { label: 'Google', link: 'http://www.google.es' },
      { label: 'Twitter', link: 'https://twitter.es' },
      { label: 'Facebook import', link: 'http://facebook.es', style: 'important-link' },
    ]"
    
    @buttonClicked = "alertaClick($event)"
  />
  
  <NavBarLinks />

  <router-view /> 
  
  <!--
  <DetailView
    :id = "4"
    userRole = "desde componente"
    >
  </DetailView>
  -->
  <CartList v-show="isCartOpen"/>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';
import { Link } from './interfaces/link';
import NavBarLinks from './components/NavBarLinks.vue';
import CartList from './components/CartList.vue';
import { useCart } from "./composables/useCart";
//import DetailView from './views/DetailView.vue';


export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
    NavBarLinks,
    CartList,
   // DetailView,
  },

  // hay solo unico setup, con todas las funciones que queremos utilizar fuera de script tambien.
  
  setup() {
    const { isCartOpen } = useCart();
    
    return {
      alertaClick: (link: Link) => alert(link.label + 'Pulsado!'),
      isCartOpen,
    }

  }

})
</script>



<style>

*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
