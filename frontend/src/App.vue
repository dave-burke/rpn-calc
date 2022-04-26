<script setup lang="ts">
import { ref } from 'vue'
import ButtonGrid from './components/ButtonGrid.vue'
import NumberStack from './components/NumberStack.vue'

const entries = ref(['3', '2', '1'])
</script>

<template>
  <NumberStack
    id="stack"
    :entries="entries"
  />
  <ButtonGrid id="buttons" />
</template>

<style>
* {
  box-sizing: border-box;
}
html, body, #app {
  font-family: 'Courier New', Courier, monospace;
  height: 100%;
  margin: 0;
}
#app {
  max-width: 20rem;
  margin: auto;
  display: flex;
  flex-direction: column;
}
#stack {
  flex-grow: 1;
}
#buttons {
  min-height: 18rem;
}
</style>
