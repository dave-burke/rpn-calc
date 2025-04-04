<script setup lang="ts">
const props = defineProps<{modelValue: string[]}>()
const emit = defineEmits(['update:modelValue'])

const validCharsRegex = /[^0-9.-]/g

function handleInput (value: string, index: number) {
  // As the user types, don't let them type anything invalid
  // An empty string is considered valid, for now

  // Replace all invalid chars
  value = value.replaceAll(validCharsRegex, '')

  let result = ''
  let hasDecimal = false

  for (let i = 0; i < value.length; i++) {
    const char = value[i]

    // Skip negative sign if not first char
    if (i !== 0 && char === '-') {
      continue
    }

    // Allow only one decimal point
    if (char === '.') {
      if (hasDecimal) {
        continue
      }
      hasDecimal = true
    }

    result += char
  }
  const entries = [...props.modelValue]
  entries[index] = result
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
        @input="handleInput($event.target.value, index)"
        @blur="handleBlur($event.target.value, index)"
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
