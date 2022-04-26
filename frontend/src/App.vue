<script setup lang="ts">
import { ref } from 'vue'
import ButtonGrid from './components/ButtonGrid.vue'
import NumberStack from './components/NumberStack.vue'

const entries = ref(['3', '2', '1'])

function appendNumberToWip (n: number) {
  const wip = entries.value.pop() ?? ''
  entries.value.push(wip + n)
}

function pushWip () {
  entries.value.push('')
}

function applyOp (op: string) {
  const result = entries.value.filter(it => it)
  const a = Number(result.pop())
  const b = Number(result.pop())
  switch (op) {
    case ('+'):
      result.push(String(a + b))
      break
    case ('-'):
      result.push(String(b - a))
      break
    case ('/'):
      result.push(String(b / a))
      break
    case ('*'):
      result.push(String(b * a))
      break
  }
  result.push('')
  entries.value = result
}

function handleButtonClick (button: string) {
  switch (button.toLowerCase()) {
    case ('enter'):
      pushWip()
      break
    case ('+'):
    case ('-'):
    case ('*'):
    case ('/'):
      applyOp(button)
      break
    case ('0'):
    case ('1'):
    case ('2'):
    case ('3'):
    case ('4'):
    case ('5'):
    case ('6'):
    case ('7'):
    case ('8'):
    case ('9'):
      appendNumberToWip(Number(button))
      break
  }
}

</script>

<template>
  <NumberStack
    id="stack"
    :entries="entries"
  />
  <ButtonGrid
    id="buttons"
    @button-click="handleButtonClick"
  />
</template>

<style>
* {
  box-sizing: border-box;
}
html, body, #app {
  font-family: 'Courier New', Courier, monospace;
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
