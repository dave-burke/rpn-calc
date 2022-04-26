<script setup lang="ts">
import ButtonGrid from './components/ButtonGrid.vue'
import NumberStack from './components/NumberStack.vue'
</script>

<template>
  <NumberStack id="stack" />
  <ButtonGrid id="buttons" />
</template>

<style>
* {
  box-sizing: border-box;
}
html, body, #app {
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
