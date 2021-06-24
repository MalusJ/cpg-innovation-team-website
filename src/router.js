import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Homepage.vue';
import AboutUs from './views/AboutUs.vue';
import TeamInfo from './views/TeamInfo.vue';
import RecruitmentInfo from './views/RecruitmentInfo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/teamInfo',
    name: 'TeamInfo',
    component: TeamInfo,
  },
  {
    path: '/recruitmentInfo',
    name: 'RecruitmentInfo',
    component: RecruitmentInfo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
