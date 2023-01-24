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
 <!--  alertaClick($event)"   es lo mismo que  alertaClick"  
       lo que @buttonClicked devuelve, lo va a pasar a alertaClick($event)   --> 
 <!--  <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';
import { Link } from './interfaces/link';

export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar
  },

  // hay solo unico setup, con todas las funciones que queremos utilizar fuera de script tambien.
  
  setup() {
    const hola = () => alert('hola');  // se escribe mas arriba, para poder utilizarlo p. ej. dentro de alertaClick f-n tambien

    return {
      alertaClick: (link: Link) => alert(link.label + 'Pulsado!'),
      hola  //  solo hay que devolver elementos que se usen en el template
      // hola: () => alert('hola')
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
