<template>
  <div>
    <a-button type="primary">
      todo
    </a-button>
  </div>
</template>

<script>
import {reactive, computed} from 'vue'
export default {
  name: "Todo",
  setup () {
    const state = reactive({
      todos: []
    })

    return {
      state
    }
  }
}
</script>

<style scoped>

</style>
