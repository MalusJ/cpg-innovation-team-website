import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Homepage.vue';
import TeamInfo from './views/TeamInfo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/teamInfo',
    name: 'TeamInfo',
    component: TeamInfo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
