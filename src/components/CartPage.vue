<template>
  <div class="p-4 flex flex-col justify-between h-screen max-w-xl m-auto">
    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-start">
        <router-link to="/product-detail"
          class="w-11 h-11 bg-cultured cursor-pointer rounded-full flex justify-center items-center">
          <button>
            <img :src="BackIcon" class="w-5 h-5" />
          </button>
        </router-link>
        <router-link to="/" class="w-11 h-11 bg-cultured cursor-pointer rounded-full flex justify-center items-center">
          <button>
            <img :src="CancelIcon" class="w-5 h-5" />
          </button>
        </router-link>
      </div>

      <div class="flex flex-col justify-center items-center gap-4">
        <p class="text-2xl font-bold">Cart</p>
        <div class="h-[100px] w-full rounded-xl p-4 bg-cultured flex justify-between items-center">
          <div class="flex gap-4 items-center">
            <div>
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" class="rounded-lg w-15 h-16" />
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-sm font-normal text-arsenic">Apple watch</p>
              <div class="px-2.5 py-1 bg-white rounded-xl flex justify-between items-center">
                <p class="text-lg font-light text-mango-tango cursor-pointer">-</p>
                <p class="text-sm font-semibold">1</p>
                <p class="text-lg font-light text-mango-tango cursor-pointer">+</p>
              </div>
            </div>
          </div>
          <div>
            <p class="text-lg font-semibold">$45.00</p>
          </div>
        </div>
      </div>

      <div>
        <div class="mb-6">
          <label for="base-input" class="block mb-2 text-sm font-medium text-yankees-blue">Enter Promo Code</label>
          <input type="text" id="base-input"
            class="bg-cultured text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your promo code">
        </div>
        <button type="button"
          class="text-yankees-blue bg-white border w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">Apply</button>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex justify-between items-center">
        <p class="text-sm font-normal">Total</p>
        <p class="text-xl font-semibold">$90.00</p>
      </div>
      <button type="button"
        class="text-white bg-yankees-blue w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">Checkout</button>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';

export default {
  name: 'CartPage',

  props: {
    msg: String
  },

  data() {
    return {
      BackIcon: require("../assets/back-icon.svg"),
      CancelIcon: require("../assets/cancel-icon.svg"),
    }
  },

  computed: mapState([
    'products'
  ]),

  mounted() {
    this.$store.dispatch('loadProducts')
  }
}
</script>

<style scoped>
</style>
