<script setup lang="ts">
import CalcButton from './CalcButton.vue'
</script>

<template>
  <div class="container">
    <div class="numberpad">
      <CalcButton>7</CalcButton>
      <CalcButton>8</CalcButton>
      <CalcButton>9</CalcButton>

      <CalcButton>4</CalcButton>
      <CalcButton>5</CalcButton>
      <CalcButton>6</CalcButton>

      <CalcButton>1</CalcButton>
      <CalcButton>2</CalcButton>
      <CalcButton>3</CalcButton>

      <CalcButton>0</CalcButton>
      <CalcButton>.</CalcButton>
      <CalcButton>(-)</CalcButton>
    </div>
  </div>
</template>

<style scoped>
div {
  border: 1px solid black;
}
.container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, minmax(1rem, 2rem))
}
.numberpad {
  grid-column: 2 / 5;
  display: grid;
  grid-template-columns: subgrid;
}
</style>
