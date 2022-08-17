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
    recommendedProducts: [],
  },

  getters: {
    products: state => {
      return state.products;
    },

    recommendedProducts: state => {
      return state.recommendedProducts;
    }
  },

  mutations: {
    SET_Products(state, products) {
      state.products = products
    },

    SET_RecommendedProducts(state, recommendedProducts) {
      state.recommendedProducts = recommendedProducts
    }
  },

  actions: {
    loadProducts({ commit }) {
      axios
        .get('https://fakestoreapi.com/products/')
        .then(response => response.data)
        .then(products => {
          commit('SET_Products', products)
        })
    },

    loadRecommendedProducts({ commit }) {
      axios
        .get('https://fakestoreapi.com/products/category/jewelery')
        .then(response => response.data)
        .then(recommendedProducts => {
          commit('SET_RecommendedProducts', recommendedProducts)
        })
    }
  },

  plugins: [new VuexPersistence().plugin]
})
