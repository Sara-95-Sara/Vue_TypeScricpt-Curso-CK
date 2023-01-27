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

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';
import { Link } from './interfaces/link';
import NavBarLinks from './components/NavBarLinks.vue';
//import DetailView from './views/DetailView.vue';


export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
    NavBarLinks,
   // DetailView,
  },

  // hay solo unico setup, con todas las funciones que queremos utilizar fuera de script tambien.
  
  setup() {
    
    return {
      alertaClick: (link: Link) => alert(link.label + 'Pulsado!'),
      
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
