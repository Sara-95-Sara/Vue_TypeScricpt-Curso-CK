<template>
  <div class="home">
    <div v-if = "isLoading">
      Cargando ...
    </div>
    <div class = "user-list" v-else>
      <UserItem v-for = "user in users" :key = "user.id" :user = "user" @addCart="addElementToCart" /> 
    </div>
   
  </div>
</template>

<script lang="ts">
import useUsers from '@/composables/useUsers';
import { defineComponent } from 'vue';
import UserItem from "@/components/UserItem.vue";
import { useCart } from '@/composables/useCart';


export default defineComponent({
  name: 'HomeView',
  components: {
    UserItem,
  },

  // lo que hay en  composicion useUsers
  setup() {
    const {users, isLoading, fetchUsers} = useUsers();

    // composable de cart(carrito)
    const {addElementToCart} = useCart();

    fetchUsers();

    return {users, isLoading, addElementToCart}
  }

});
</script>


<style scoped>
.user-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>