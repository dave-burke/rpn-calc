<script setup lang="ts">
import { ref } from 'vue'
import ButtonGrid from './components/ButtonGrid.vue'
import NumberStack from './components/NumberStack.vue'

const entries = ref([''])

function appendNumberToWip (n: number) {
  const wip = entries.value.pop() ?? ''
  entries.value.push(wip + n)
}

function appendDecimalToWip () {
  const wip = entries.value.pop() ?? ''
  if (wip.includes('.') || wip === '') {
    entries.value.push(wip)
  } else {
    entries.value.push(wip + '.')
  }
}

function backspaceWip () {
  const result = entries.value.filter(it => it)
  const wip = result.pop() ?? ''
  result.push(wip.slice(0, -1))
  entries.value = result
}

function pushWip () {
  entries.value.push('')
}

// Apply an op with one parameter
function applyOp1 (op: string) {
  const result = entries.value.filter(it => it)
  if (result.length < 1) {
    return
  }
  const x = Number(result.pop())
  switch (op) {
    case ('(-)'):
      result.push(String(x * -1))
      break
    case ('1/x'):
      result.push(String(1 / x))
      break
    case ('*10'):
      result.push(String(x * 10))
      break
    case ('/10'):
      result.push(String(x / 10))
      break
    case ('√x'):
      result.push(String(Math.sqrt(x)))
      break
    case ('drop'):
      // Intentional NOOP -- do not reappend x
      break
    default:
      result.push(String(x))
      break
  }
  result.push('')
  entries.value = result
}

// Apply an op with two parameters
function applyOp2 (op: string) {
  const result = entries.value.filter(it => it)
  if (result.length < 2) {
    return
  }
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
    case ('x^n'):
      result.push(String(Math.pow(b, a)))
      break
    case ('swap'):
      result.push(String(a))
      result.push(String(b))
      break
    default:
      result.push(String(b))
      result.push(String(a))
      break
  }
  result.push('')
  entries.value = result
}

function handleButtonClick (button: string) {
  window.navigator.vibrate(3)
  switch (button) {
    case ('enter'):
      pushWip()
      break
    case ('del'):
      backspaceWip()
      break
    case ('.'):
      appendDecimalToWip()
      break
    case ('+'):
    case ('-'):
    case ('*'):
    case ('/'):
    case ('x^n'):
    case ('swap'):
      applyOp2(button)
      break
    case ('(-)'):
    case ('1/x'):
    case ('*10'):
    case ('/10'):
    case ('√x'):
    case ('drop'):
      applyOp1(button)
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
    default:
      console.log(`Unknown button ${button}`)
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
  background-color: #F0F0F0;
  font-family: 'Courier New', Courier, monospace;
  height: 100%;
  margin: 0;
  padding: .1rem
}
#app {
  max-width: 30rem;
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
