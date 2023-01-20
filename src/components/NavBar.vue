<template>
  <nav>
    <div class="title">
        <h4>{{title}}</h4>
    </div>
    <div class = "links">
       <a href="http://www.google.es" target="_blank">Google</a>  |
       <a href="https://vuejs.org" target="_blank">Vue</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar',
    props: {
        title: String
    }
})
</script>


<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
}

h4 {
    color: white;
}

.links, .title {
    padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>