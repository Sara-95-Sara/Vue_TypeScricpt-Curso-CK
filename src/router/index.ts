import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import haveRoleGuard from './role-guard';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    // Eager loading: carga todo al inicio
    component: HomeView
  },
  {
    path: '/userdetail/:id',
    name: 'userdetail',
    component: () =>
      import(/* webpackChunkName: "userdetailView" */ "../views/UserDetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem('userRole');
      return isNaN(id) ? { id: null, userRole } : { id, userRole };
    }  
  },
  {
    path: '/about',
    name: 'about',  // name no es obligatorio
    //component: AboutView
    // Lazy Loading: no carga los archivos hasta que se visita este path
    //beforeEnter: [haveRoleGuard],
    component: () =>
      import(/* webpackChunkName: "aboutView" */ "../views/AboutView.vue"),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () =>
      import(/* webpackChunkName: "detailView" */ "../views/DetailView.vue"),
    props: (route) => {
      const id = Number(route.params.id);
      const userRole = localStorage.getItem('userRole');
      return isNaN(id) ? { id: null, userRole } : { id, userRole };
    }  
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
