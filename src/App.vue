<template>
  <router-view></router-view>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'App',
  setup () {
    onMounted (() => {
      console.log('App onMounted')
    })
  }
}
</script>
