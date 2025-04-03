<script setup lang="ts">
const props = defineProps<{modelValue: string[]}>()
const emit = defineEmits(['update:modelValue'])

function update (n: string, index: number) {
  const entries = [...props.modelValue]
  entries[index] = n
  emit('update:modelValue', entries)
}

</script>
<template>
  <div class="number-stack">
    <template
      v-for="(n, index) in props.modelValue"
      :key="index"
    >
      <input
        v-if="index !== props.modelValue.length - 1 || n !== ''"
        type="text"
        :value="n"
        @input="update($event.target.value, index)"
      >
    </template>
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
  margin-bottom: .25rem;
  overflow-y: auto;
}
.number-stack input {
  width: 100%;
  border: none;
  outline: none;
  text-align: right;
  font-size: xx-large;
}
</style>
