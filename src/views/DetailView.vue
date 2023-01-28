<template>
    <div>
        <h1>Detalle: {{ id }}</h1>
        <h2>Role: {{ userRole }}</h2>
    </div>
</template>

<script lang ="ts">
import { defineComponent } from 'vue';
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
        console.log(props.id);
        /*axios.get('https://api.escuelajs.co/api/v1/products').then((resp) => {
            console.log(resp.data[0]);
        });
        */
       fakeShopApi
        .get<unknown, AxiosResponse<Product>>(`/products/${props.id}`)
        .then((resp) => console.log(resp.data));
        return {}
    }
})


</script>