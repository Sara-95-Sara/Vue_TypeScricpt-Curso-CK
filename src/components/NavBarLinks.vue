<template>
    <nav>
        <ul>
            <li>
           <!-- <router-link to = "/">Home</router-link>  -->
                <router-link :to = "{name: 'home'}">Users</router-link>
            </li>
            <li>
                <router-link :to = "{name: 'userdetail', params: {id: '2'}}">User_Detail</router-link>
            </li>
            <li>
                <router-link :to = "{name: 'about'}">Products</router-link>
            </li>
            <li>
                <router-link :to = "{name: 'detail', params: {id: '152'}}">Product_Detail</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return{}
    },
})
</script>

<style scoped>
nav {
    min-height:  50px;
    background-color: orangered;
}

ul {
   display: flex;
   justify-content: center;
   list-style: none;
}

li {
    padding: 1rem;
    font-weight: bold;
}

a {
    color: white;
    text-decoration: none;
}

a:visited {
  color: white;
}

</style>