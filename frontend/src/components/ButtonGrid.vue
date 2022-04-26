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
    <div class="clipboard subgrid">
      <div>Cut</div>
      <div>Copy</div>
      <div>Paste</div>
    </div>
    <div class="stack subgrid">
      <div>Drop</div>
      <div>Swap</div>
    </div>
    <div class="numpad subgrid">
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>0</div>
      <div>.</div>
      <div>(-)</div>
    </div>
    <div class="ops subgrid">
      <div>+</div>
      <div>-</div>
      <div>*</div>
      <div>/</div>
    </div>
    <div class="op2 subgrid">
      <div>1/x</div>
      <div>*10</div>
      <div>/10</div>
      <div>X^N</div>
      <div>√x</div>
    </div>
    <div class="del">
      del
    </div>
    <div class="ent">
      enter
    </div>
  </div>
</template>

<style>
.grid {
  cursor: default;
  display: grid;
  color: white;
  gap: .25rem;
  background-color: #222222;
  padding: .25rem;
  grid-template:
    "clp clp clp cmd cmd" 1fr
    "op2 num num num ops" 1fr
    "op2 num num num ops" 1fr
    "op2 num num num ops" 1fr
    "op2 num num num ops" 1fr
    "op2 del ent ent ent" 1fr;
}
.subgrid > div, .del, .ent {
  background-color: #444444;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
.subgrid {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
.clipboard {
  grid-area: clp;
}
.stack {
  grid-area: cmd;
}
.numpad {
  grid-area: num;
}
.ops{
  grid-area: ops;
}
.op2{
  grid-area: op2;
}
.del {
  grid-area: del;
}
.ent {
  grid-area: ent;
}
</style>
