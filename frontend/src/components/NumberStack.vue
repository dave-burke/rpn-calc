<script setup lang="ts">
const props = defineProps<{entries: string[] }>()

</script>
<template>
  <div class="number-stack">
    <div
      v-for="n in props.entries"
      :key="n"
    >
      {{ n }}
    </div>
  </div>
</template>
<style>
.number-stack {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  border: 1px solid #222222;
  box-shadow: inset 1px 1px 4px #999999;
  background-color: #FCFCFC;
  padding-right: .25rem;
  font-size: x-large;
  margin-bottom: .25rem;
  overflow-y: auto;
}
</style>
