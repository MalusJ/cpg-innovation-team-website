import Vue from 'vue';
import BaiduMap from 'vue-baidu-map';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(BaiduMap, {
  ak: 'OLlbwIlG5ovWtUBiIMCQXH9jsAWGh54r',
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
