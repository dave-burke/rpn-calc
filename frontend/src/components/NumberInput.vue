<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{modelValue: string}>()
const emit = defineEmits(['update:modelValue', 'blur'])
const inputEl = ref<HTMLInputElement | null>(null)

function handleInput (e) {
  const trimmed = e.target.value.trim()
  const isNumber = !isNaN(Number(trimmed))
  const result = isNumber ? trimmed : props.modelValue
  emit('update:modelValue', result)
  if (inputEl.value) {
    inputEl.value.value = result
  }
}

function handleBlur (e) {
  emit('blur', e.target.value)
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
