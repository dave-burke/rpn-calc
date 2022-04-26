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
  border: 1px solid #222222;
  box-shadow: inset 1px 1px 4px #999999;
  padding: .25rem;
  font-size: larger;
  margin-bottom: .25rem;
}
</style>
