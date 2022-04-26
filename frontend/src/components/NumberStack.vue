<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{entries: Array<string> }>()
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
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
}
</style>
