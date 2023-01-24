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
  <br /><br />

  <!-- <CustomButton></CustomButton>  -->
  <!-- da igual aqui los slots como ponemos,ya esta definido en CustomButton.vue-->
  <!-- <custom-button>
    <template v-slot:left-icon>
      <span> usuario </span>
    </template>
    <span style = "font-size:xx-large"> desde el slot </span>
    <template v-slot:right-icon>
      <span> buscar </span>
    </template>
  </custom-button>   -->
  <br />
  <custom-card>
    <template v-slot:header>
       <h3>Card header</h3>
    </template>
    <template v-slot:body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolores minima illum eaque
        assumenda cum quam possimus repudiandae facilis dolorum?
        Accusamus animi qui temporibus quia cumque ratione et! Eum, ad!
      </p> 

      <custom-button>
        hola
      </custom-button>

    </template>
    <template v-slot:footer>
       <div>
        <span>Footer</span>
       </div>
    </template>
  </custom-card>

 <!--  <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';
import { Link } from './interfaces/link';
import CustomButton from './components/CustomButton.vue';
import CustomCard from './components/CustomCard.vue';

export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
    CustomButton,
    CustomCard,
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
