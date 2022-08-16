<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 class="text-3xl font-bold underline">
      Hello world {{ name }}
    </h1>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      name: store.state.name
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
