<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['buttonClick'])

function handleClick (e: Event) {
  const button = e.target as HTMLElement
  const text = button.innerText
  emit('buttonClick', text.toLocaleLowerCase())
}
</script>

<template>
  <div
    class="grid"
    @click="handleClick"
  >
    <div class="clipboard">
      Cut
    </div><div class="clipboard">
      Copy
    </div> <div class="clipboard">
      Paste
    </div><div class="command">
      Drop
    </div><div class="command">
      Swap
    </div>

    <div class="op">
      1/x
    </div><div class="numpad">
      7
    </div><div class="numpad">
      8
    </div><div class="numpad">
      9
    </div><div class="op">
      +
    </div>

    <div class="op">
      *10
    </div><div class="numpad">
      4
    </div><div class="numpad">
      5
    </div><div class="numpad">
      6
    </div><div class="op">
      -
    </div>

    <div class="op">
      /10
    </div><div class="numpad">
      1
    </div><div class="numpad">
      2
    </div><div class="numpad">
      3
    </div><div class="op">
      *
    </div>

    <div class="op">
      X^N
    </div><div class="numpad">
      0
    </div><div class="numpad">
      .
    </div><div class="numpad">
      (-)
    </div><div class="op">
      /
    </div>

    <div class="op">
      √x
    </div><div class="command">
      del
    </div><div class="ent command">
      enter
    </div>
  </div>
</template>

<style>
.grid {
  cursor: default;
  display: grid;
  color: #DDDDDD;
  font-weight: bold;
  gap: .5rem;
  background-color: #444444;
  padding: .5rem;
  grid-template:
    "clp clp clp cmd cmd" 1fr
    "op2 num num num ops" 1fr
    "op2 num num num ops" 1fr
    "op2 num num num ops" 1fr
    "op2 num num num ops" 1fr
    "op2 del ent ent ent" 1fr;
}
.grid > div {
  background-color: #444444;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-shadow: 2px 2px 1px #222222;
}
div.op {
  background-color: #333381;
}
div.numpad {
  color: #111111;
  background-color: #CCCCCC;
}
div.command {
  background-color: #111111;
}
.ent {
  grid-area: ent;
}
div.clipboard {
  cursor: not-allowed;
  color: #666666;
  background-color: #999999;
}
</style>
