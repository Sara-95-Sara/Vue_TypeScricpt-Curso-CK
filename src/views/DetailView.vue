<template>
    <div v-if = "product">
        <h1>Nombre: {{ product?.title }}</h1>
        <h1>id: {{ product.id }}</h1> 
        <h2>Precio: {{ product.price }} $</h2>
        <h2>Role: {{ userRole }}</h2>
        <img :src = "product.images" alt = "image">
    </div>
    <div v-else>
        Cargando...
    </div>
</template>

<script lang ="ts">
import { defineComponent, ref } from 'vue';
//import axios from 'axios';
import fakeShopApi from '@/api/fakeShopApi';
import { Product } from '@/models/product';
import { AxiosResponse } from 'axios';

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true
        },
        userRole: String
    },

    setup(props) {
        let product = ref<Product>();
        fakeShopApi
          .get<unknown, AxiosResponse<Product>>(`/products/${props.id}`)
          .then((resp) => product.value = resp.data);
        return {product};
    }
})


</script>