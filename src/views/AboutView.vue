<template>
  <div class="home">
    <div v-if = "isLoading">
      Cargando ...
    </div>
    <div class = "product-list" v-else>
      <ProductItem v-for = "product in products" 
        :key = "product.id"   
        :product = "product" 
        @addCart="addElementToCart"
        @goDetail ="Detail" /> 
    </div>
  </div>
</template>


<script lang="ts">
import useProducts from '@/composables/useProducts';
import { defineComponent } from 'vue';
import ProductItem from "@/components/ProductItem.vue";
import { useCart } from '@/composables/useCart';
import { Product } from '@/models/product';
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'AboutView',
  components: {
    ProductItem,
  },

  // lo que hay en  composicion useUsers
  setup() {
    const {products, isLoading, fetchProducts} = useProducts();

    // composable de cart(carrito)
    const {addElementToCart} = useCart();

    const router = useRouter();

    fetchProducts();

    return {
      products,
      isLoading, 
      addElementToCart, 
      Detail: (product: Product) => router.push({ name: 'detail', params: {id: product.id}})
    }
  }
});
</script>


<style scoped>
.product-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}
</style>