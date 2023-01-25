<template>
    <label for = "">Seleccionar color</label>
    <select v-model = "color">
        <option value= "red">Rojo</option>
        <option value= "green">Verde</option>
        <option value= "blue">Azul</option>
    </select>

    <h4> Color seleccionado: {{ color }}</h4>
    <br />
    <input type = "text"  v-model = "texto" />
    <h4>Texto: {{ texto }}</h4>

    <input type = "number"  v-model.lazy = "numero" />
    <h4>Texto: {{ numero }}</h4>
</template>

<script lang = "ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const color = ref<string>("green");
        const texto = ref<string>('');
        const numero = ref<number>(0);
        
        return {
            color,
            texto,
            numero,
        }
    }
});
</script>