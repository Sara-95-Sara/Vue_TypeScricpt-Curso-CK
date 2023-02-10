<template>
    <div v-if = "user">
        <h1>Nombre: {{ user.name }}</h1> 
        <h2>Email; {{ user.email }} </h2>
        <h2>Role: {{ userRole }}</h2>
        <img :src = "user.avatar" alt = "image" />
        <h1>id: {{ user.id }}</h1>

        <button @click="addElementToCart(user)" class="btn btn-success">
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
import { User } from '@/models/user';
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
        const { addElementToCart } = useCart();
        let user = ref<User>();
        fakeShopApi
          .get<unknown, AxiosResponse<User>>(`/users/${props.id}`)
          .then((resp) => (user.value = resp.data));
        return {
           user,
           addElementToCart,
        };
    }
})


</script>