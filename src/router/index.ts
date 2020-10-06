import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: '/posts',
    name: 'posts',
    component: () => import('@/components/PostsList.vue'),
  },
  {
    path: '/posts/:id',
    name: 'post-details',
    component: () => import('@/components/Post.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/components/CreatePost.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
