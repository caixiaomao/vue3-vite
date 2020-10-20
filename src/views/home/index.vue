<template>
  <div>
    <a-row>
      Count is: {{ state.count }}
    </a-row>
    <a-row>
      Double is: {{ state.double }}
    </a-row>
    <a-row>
      <a-button-group>
        <a-button type="primary" @click="increment">增加</a-button>
        <a-button type="primary" @click="reduce">减少</a-button>
      </a-button-group>
    </a-row>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Index',
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    })

    function increment() {
      state.count++
    }

    function reduce() {
      state.count--
    }

    return {
      state,
      increment,
      reduce
    }
  }
}
</script>

<style scoped></style>
