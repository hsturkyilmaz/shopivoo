<template>
  <div class="m-4 flex flex-col gap-4">
    <div>
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <img :src="SearchIcon" class="w-5" />
          </div>
          <input type="text" id="simple-search"
            class="bg-cultured text-arsenic text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search">
        </div>
        <button type="submit"
          class="p-2.5 ml-4 text-sm font-normal text-white bg-cultured rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          <img :src="SettingsIcon" class="w-5" />
        </button>
      </form>
    </div>

    <div class="w-max flex gap-[14px]">
      <button type="button"
        class="text-white bg-yankees-blue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">Popular</button>
      <button type="button"
        class="text-yankees-blue bg-white border hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">Best
        Seller</button>
      <button type="button"
        class="text-yankees-blue bg-white border hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">New</button>
      <button type="button"
        class="text-yankees-blue bg-white border hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-xl text-base font-medium px-4 py-2.5 focus:outline-none">Special</button>
    </div>

    <div class="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="product in products" :key="product.id"
        class="py-5 px-4 bg-cultured min-h-[200px] rounded-xl flex flex-col gap-4 justify-between md:items-center relative cursor-pointer">
        <div class="flex items-center justify-center">
          <div
            class="w-[30px] h-[30px] flex items-center justify-center absolute top-[10px] right-[10px] bg-white rounded-full hover:scale-110">
            <img :src="HeartIcon" class="w-4" />
          </div>
          <img :src="product.image" class="rounded-t-lg w-20 h-24 md:w-40 md:h-48">
        </div>
        <div class="md:text-center">
          <p class="font-semibold text-sm text-yankees-blue">{{ product.title }}</p>
          <p class="font-semibold text-xs text-yankees-blue mt-4">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex';

export default {
  props: {
    msg: String
  },

  data() {
    return {
      name: store.state.name,
      SearchIcon: require("../assets/search-icon.svg"),
      SettingsIcon: require("../assets/settings-icon.svg"),
      HeartIcon: require("../assets/heart-icon.svg")
    }
  },

  computed: mapState([
    'products'
  ]),

  mounted() {
    this.$store.dispatch('loadProducts')
  },
}
</script>

<style scoped>
</style>
