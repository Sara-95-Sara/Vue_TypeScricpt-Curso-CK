<template>
    <div v-if = "!isLoading">
        <h1>Nombre: {{ product?.title }}</h1>
        <h1>id: {{ product.id }}</h1> 
        <h2>Precio: {{ product.price }} $</h2>
        <h2>Role: {{ userRole }}</h2>
        <img :src = "product.images" alt = "image" />

        <button @click="addElementToCart(product)" class="btn btn-success">
           Añadir al Carrito
        </button>
    </div>
    <div v-else>
        Cargando...
    </div>
</template>

<script lang ="ts">
import { defineComponent, ref } from 'vue';
import { useCart } from "@/composables/useCart";
//import axios from 'axios';
import fakeShopApi from '@/api/fakeShopApi';
import { Product } from '@/models/product';
import { AxiosResponse } from 'axios';
import useProducts from '@/composables/useProducts';

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true
        },
        userRole: String
    },

    setup(props) {
        const { addElementToCart } = useCart();
        const { product, fetchProductById, isLoading } = useProducts()
        /*let product = ref<Product>();
        fakeShopApi
          .get<unknown, AxiosResponse<Product>>(`/products/${props.id}`)
          .then((resp) => (product.value = resp.data)); */
        fetchProductById(props.id);
          return {
           product,
           addElementToCart,
           isLoading
        };
    }
})


</script>