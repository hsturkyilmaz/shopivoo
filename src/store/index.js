import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    products: [],
  },

  getters: {
    products: state => {
      return state.products;
    }
  },

  mutations: {
    SET_Products(state, products) {
      state.products = products
    }
  },

  actions: {
    loadProducts({ commit }) {
      axios
        .get('https://fakestoreapi.com/products/')
        .then(response => response.data)
        .then(products => {
          console.log(products);
          commit('SET_Products', products)
        })
    }
  },

  plugins: [new VuexPersistence().plugin]
})
