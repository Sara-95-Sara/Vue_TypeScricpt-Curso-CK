<template>
  <nav :class = "{'bg-red': color==='red'}">
    <div class="title">
        <h4>{{title}}</h4>
    </div>
    <span> {{ greeting }}</span>
    <div class = "links" v-if="links">
      <!--<a
        v-for = "link in links"
        :key = "link.label"
        :href = "link.link"
        :class = "link.style"
        target = "_blank"
      >
        {{ link.label }}
      </a>  -->
      
      <!-- Emitir eventos directamente -->
      <!--   v-on:click   es lo mismo que    @click     -->
      <!-- <button 
        v-for="link in links"
        :key = "link.label"
        @click="$emit('buttonClicked', link)" 
      >
        {{ link.label }}
      </button>  -->
      
      <!-- Emitir eventos a traves de una funcion que haga mas cosas -->
      <button class="btn btn-primary"
        v-for="link in links"
        :key = "link.label"
        @click = "onClick(link)"
      >
        {{ link.label }}
      </button>  -->
       
      <button class="btn btn-primary" @click = "changeGreeting" >Cambiar estado</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue';
import { Link } from '@/interfaces/link';
import { useStore } from 'vuex';

interface NavbarProps {
  title: string,
  links: Link[],
  color?: string,
}

export default defineComponent({
    name: 'NavBar',
    emits: ['buttonClicked'],
    props: {
        title: {
          type: String,
          required: true,
        },
        links: {
          type: Array as PropType<Link[]>,
          default(): Link[] {
            return [
              { label: 'Google', link: 'http://www.google.es' },
              { label: 'Vue', link: 'https://vuejs.org' },
              { label: 'Facebook import', link: 'http://facebook.es', style: 'important-link' }
            ];
          }
        },
        color: {
          type: String
        }
    },
    
    // cada componente tiene su setup()
    // methods() hace igual que setup(), solo que dentro de methods para devolver las variables hay que escribir  data, etc.. 
    // pero setup todo inclue
    setup(props: NavbarProps, ctx) {
      const store = useStore();
      /*const greeting = ref<string>(store.state.greeting);
      if(props.color === 'red') {
        greeting.value = 'Feliz Navidad!'
      }
      */

      /*
      watch(store.state.greeting, () => {
        console.log('cambia state')
        greeting.value = store.state.greeting;
      });
      */

      return {
        greeting: computed(() => store.getters['saludo']),
        onClick: (link: Link) => {
          console.log('onClick', link);
          // hacer cosas importantes de programador serio
          
          ctx.emit('buttonClicked', link);
        },
        changeGreeting: () => {
          store.commit('cambiaSaludo', 'Que locura de Vuex');
        }
      }
    }
})
</script>


<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
}

h4 {
    color: white;
}

.links, 
.title {
    padding: 20px;
}

nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}

.bg-red {
  background-color: red;
}

.important-link {
  font-size: larger;
}


</style>