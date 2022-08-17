<template>
  <div class="bg-cultured h-screen flex flex-col gap-5">
    <div class="flex justify-between items-start p-4">
      <router-link to="/" class="w-11 h-11 bg-white cursor-pointer rounded-full flex justify-center items-center">
        <button>
          <img :src="BackIcon" class="w-5 h-5" />
        </button>
      </router-link>
      <div class="mt-4">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          class="rounded-t-lg w-56 h-64 md:w-64 md:h-72" />
      </div>
      <router-link to="/cart" class="w-11 h-11 bg-white cursor-pointer rounded-full flex justify-center items-center">
        <button>
          <img :src="CartIcon" class="w-5 h-5" />
        </button>
      </router-link>
    </div>

    <div class="flex justify-center gap-2.5">
      <button type="button"
        class="text-white bg-[#023E96] hover:bg-blue-800 w-6 h-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center justify-center">
        <img :src="CheckIcon" class="w-3 h-3" />
      </button>
      <button type="button"
        class="text-white bg-[#ED427D] hover:bg-blue-800 w-6 h-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center justify-center">
      </button>
      <button type="button"
        class="text-white bg-[#FE8364] hover:bg-blue-800 w-6 h-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center justify-center">
      </button>
      <button type="button"
        class="text-white bg-[#112C56] hover:bg-blue-800 w-6 h-6 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center justify-center">
      </button>
    </div>

    <div class="bg-white p-4 rounded-t-3xl flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <p class="text-xl font-bold">Nike Runnerdick</p>
          <button type="button"
            class="text-yankees-blue bg-white border hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">Try
            virtual</button>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xl text-mango-tango font-semibold">$199.00</p>
          <p class="text-sm font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex justify-between items-center">
          <p class="text-xl font-semibold">Recommended for you</p>
          <button class="text-sm font-normal">See all</button>
        </div>
        <router-link to="/product-detail">
          <div class="flex gap-4 md:justify-center">
            <div v-for="product in recommendedProducts" :key="product.id"
              class="py-5 px-4 bg-cultured min-h-[200px] min-w-[150px] max-w-[225px] rounded-xl flex flex-col gap-4 justify-between md:items-center relative cursor-pointer">
              <div class="flex items-center justify-center">
                <div
                  class="w-[30px] h-[30px] flex items-center justify-center absolute top-[10px] right-[10px] bg-white rounded-full hover:scale-110">
                  <img :src="HeartIcon" class="w-4" />
                </div>
                <img :src="product.image" class="rounded-t-lg w-20 h-24">
              </div>
              <div class="md:text-center">
                <p class="font-semibold text-sm text-yankees-blue">{{ product.title }}</p>
                <p class="font-semibold text-xs text-yankees-blue mt-4">${{ product.price }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="flex justify-between md:justify-center gap-5">
        <button type="button"
          class="text-white bg-yankees-blue w-1/12 md:w-1/12 min-w-[52px] max-w-[52px] h-[52px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center flex items-center justify-center">
          <img :src="AddIcon" class="w-4.5 h-4.5" />
        </button>
        <router-link to="/cart"
          class="text-white bg-mango-tango flex items-center justify-center w-11/12 md:w-5/12 lg:w-3/12 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">
          <button type="button">Buy Now</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';

export default {
  name: 'DetailPage',

  props: {
    msg: String
  },

  data() {
    return {
      BackIcon: require("../assets/back-icon.svg"),
      CartIcon: require("../assets/cart-icon.svg"),
      CheckIcon: require("../assets/check-icon.svg"),
      HeartIcon: require("../assets/heart-icon.svg"),
      AddIcon: require("../assets/add-icon.svg"),
    }
  },

  computed: mapState([
    'recommendedProducts'
  ]),

  mounted() {
    this.$store.dispatch('loadRecommendedProducts')
  }
}
</script>

<style scoped>
</style>
