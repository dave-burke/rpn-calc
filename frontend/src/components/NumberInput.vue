<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{modelValue: string}>()
const emit = defineEmits(['update:modelValue', 'blur'])
const inputEl = ref<HTMLInputElement | null>(null)

function handleInput (e: Event) {
  const value = (e.target as HTMLInputElement)?.value.trim()
  const isNumber = !isNaN(Number(value))
  const result = isNumber ? value : props.modelValue
  emit('update:modelValue', result)
  if (inputEl.value) {
    inputEl.value.value = result
  }
}

function handleBlur (e: Event) {
  const value = (e.target as HTMLInputElement)?.value
  if (value) {
    emit('blur', value)
  }
}

</script>
<template>
  <input
    ref="inputEl"
    type="text"
    :value="modelValue"
    @input="handleInput"
    @blur="handleBlur"
  >
</template>
<style>
input {
  width: 100%;
  border: none;
  outline: none;
  background-color: #FCFCFC;
  text-align: right;
  font-size: xx-large;
}
</style>
