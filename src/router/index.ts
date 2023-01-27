import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    // Eager loading: carga todo al inicio
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',  // name no es obligatorio
    //component: AboutView
    // Lazy Loading: no carga los archivos hasta que se visita este path
    component: () =>
      import(/* webpackChunkName: "aboutView" */ "../views/AboutView.vue"),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () =>
      import(/* webpackChunkName: "detailView" */ "../views/DetailView.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
