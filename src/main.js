import Vue from 'vue'
import App from './App.vue'
import './main.css'
import store from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import StorePage from './components/StorePage.vue'
import DetailPage from './components/DetailPage.vue'
import CartPage from './components/CartPage.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: StorePage },
    { path: '/product-detail', component: DetailPage },
    { path: '/cart', component: CartPage },
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
