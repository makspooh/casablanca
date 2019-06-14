import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})