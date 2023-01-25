<template>
    <label for = "">Seleccionar color</label>
    <select v-model = "color">
        <option value= "red">Rojo</option>
        <option value= "green">Verde</option>
        <option value= "blue">Azul</option>
    </select>

    <h4> Color seleccionado: {{ colorLabel }}</h4>
    <br />
    <input type = "text"  v-model = "texto" />
    <h4>Texto: {{ texto }}</h4>

    <input type = "number"  v-model.lazy = "numero" />
    <h4>Texto: {{ numero }}</h4>

    <h3>{{ now }}</h3>

    <!--<input type = "color" v-model = "color" />   -->
    
</template>

<script lang = "ts">
import { computed, defineComponent, onBeforeMount, onMounted, onUnmounted, onUpdated, ref } from 'vue';

export default defineComponent({
    setup() {
        const color = ref<string>("red");
        const texto = ref<string>('');
        const numero = ref<number>(0);
        
        onMounted(() => {
           console.log('2. onMounted');
        });
    
        // eso cuando navegamos
        onUnmounted(() => {
            console.log("onUnMounted");
        });

        onBeforeMount(() => {
           console.log("onBeforeMount");
        });

        // cuando actualiza algo 
        onUpdated(() => {
            console.log("onUpdated");
        });
    
         // eso muesta antes de onMounted, porque tiene que terminar todo depues onMounted().
        console.log("Seguimos en el setup()");
    
        return {
            color,
            texto,
            numero,

            // variable Computed
            colorLabel: computed(() => 
              color.value === "red"
                ? "Rojo"
                : color.value === "green"
                ? "Verde"
                : "Azul"
            ),

            now: computed(() => new Date().toDateString())
        }
    }
});
</script>