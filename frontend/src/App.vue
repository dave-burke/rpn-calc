<script setup lang="ts">
import { ref } from 'vue'
import rpn from './services/rpn'
import ButtonGrid from './components/ButtonGrid.vue'
import NumberStack from './components/NumberStack.vue'

const entries = ref([''])

type tfn = (entries: string[]) => string[]
function apply (op: tfn): void {
  entries.value = op(entries.value)
}

function append (x: string) {
  entries.value = rpn.appendNumberToWip(entries.value, x)
}

function handleButtonClick (button: string) {
  window.navigator.vibrate(3)
  switch (button) {
    case ('enter'): apply(rpn.pushWip); break
    case ('del'): apply(rpn.backspaceWip); break
    case ('.'): apply(rpn.appendDecimalToWip); break
    case ('+'): apply(rpn.add); break
    case ('-'): apply(rpn.subtract); break
    case ('*'): apply(rpn.multiply); break
    case ('/'): apply(rpn.divide); break
    case ('x^n'): apply(rpn.pow); break
    case ('swap'): apply(rpn.swap); break
    case ('(-)'): apply(rpn.negate); break
    case ('1/x'): apply(rpn.invert); break
    case ('*10'): apply(rpn.timesTen); break
    case ('/10'): apply(rpn.overTen); break
    case ('√x'): apply(rpn.square); break
    case ('drop'): apply(rpn.drop); break
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
      append(button)
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
html, body {
  background-color: #F0F0F0;
}
html, body, #app {
  font-family: 'Courier New', Courier, monospace;
  height: 100%;
  margin: 0;
}
#app {
  background-color: #444444;
  max-width: 30rem;
  margin: auto;
  padding: 0.7rem;
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
