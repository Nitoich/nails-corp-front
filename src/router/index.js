import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Clients from "@/views/Clients.vue";
import Login from "@/views/Login.vue";
import Newsletter from "@/views/Newsletter.vue";
import Records from "@/views/Records.vue";
import CreateNewRecord from "@/views/Records/CreateNewRecord.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "", component: Home },
    { path: '/clients', component: Clients },
    { path: '/login', component: Login },
    { path: '/newsletter', component: Newsletter },
    { path: '/records', component: Records },
    { path: '/records-create', component: CreateNewRecord },
  ]
})

export default router
