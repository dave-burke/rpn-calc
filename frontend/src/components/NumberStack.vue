<script setup lang="ts">
import NumberInput from './NumberInput.vue'
import DeleteIcon from './DeleteIcon.vue'
const props = defineProps<{modelValue: string[]}>()
const emit = defineEmits(['update:modelValue'])

function handleInput (value: string, index: number) {
  const entries = [...props.modelValue]
  entries[index] = value
  emit('update:modelValue', entries)
}

function handleBlur (value: string, index: number) {
  let entries = [...props.modelValue]
  entries[index] = value
  // When the user blurs the input (just tapping somewhere else or hitting
  // a button), we need to remove any empty entries, unless it's the first
  // item, which is the "wip" entry.
  entries = entries.filter((entry, i) => {
    return i === 0 || entry !== ''
  })
  emit('update:modelValue', entries)
}

function handleDelete (index: number) {
  const entries = [...props.modelValue]
  entries.splice(index, 1)
  emit('update:modelValue', entries)
}

</script>
<template>
  <div class="number-stack">
    <div
      v-for="(n, index) in props.modelValue"
      :key="index"
      class="number-row"
    >
      <button
        v-if="n.length > 0"
        @click="handleDelete(index)"
      >
        <DeleteIcon color="DarkGray" />
      </button>
      <NumberInput
        v-if="index !== props.modelValue.length - 1 || n !== ''"
        type="text"
        :model-value="n"
        @update:model-value="handleInput($event, index)"
        @blur="handleBlur($event, index)"
      />
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
  margin-bottom: .25rem;
  overflow-y: auto;
}
.number-row {
  display: flex;
  width: 100%;
}
button {
  background: none;
  border: none;
}
</style>
