<script setup lang="ts">
const emit = defineEmits(['buttonClick'])

function handleClick(e: Event) {
  const button = e.target as HTMLElement
  const text = button.innerText
  // ignore clicks between buttons (when inner text is the entire grid)
  if (!text.includes('\n')) {
    emit('buttonClick', text.toLocaleLowerCase())
  }
}
</script>

<template>
  <div class="grid" @click="handleClick">
    <div class="command">Clear</div>
    <div class="command">Undo</div>
    <div class="command">Redo</div>
    <div id="button-drop" class="command">Drop</div>
    <div id="button-swap" class="command">Swap</div>

    <div id="button-invert" class="op">1/x</div>
    <div id="button-seven" class="numpad">7</div>
    <div id="button-eight" class="numpad">8</div>
    <div id="button-nine" class="numpad">9</div>
    <div id="button-plus" class="op">+</div>

    <div id="button-times10" class="op">*10</div>
    <div id="button-four" class="numpad">4</div>
    <div id="button-five" class="numpad">5</div>
    <div id="button-six" class="numpad">6</div>
    <div id="button-minus" class="op">-</div>

    <div id="button-over10" class="op">/10</div>
    <div id="button-one" class="numpad">1</div>
    <div id="button-two" class="numpad">2</div>
    <div id="button-three" class="numpad">3</div>
    <div id="button-multiply" class="op">*</div>

    <div id="button-pow" class="op">X^N</div>
    <div id="button-zero" class="numpad">0</div>
    <div id="button-dot" class="numpad">.</div>
    <div id="button-negate" class="numpad">(-)</div>
    <div id="button-divide" class="op">/</div>

    <div id="button-square-root" class="op">√x</div>
    <div id="button-del" class="command">Del</div>
    <div id="button-enter" class="ent command">Enter</div>
  </div>
</template>

<style>
.grid {
  cursor: default;
  display: grid;
  color: #dddddd;
  font-weight: bold;
  gap: 0.5rem;
  background-color: #444444;
  padding-top: 0.5rem;
  grid-template:
    'clp cmd cmd cmd cmd' 1fr
    'op2 num num num ops' 1fr
    'op2 num num num ops' 1fr
    'op2 num num num ops' 1fr
    'op2 num num num ops' 1fr
    'op2 del ent ent ent' 1fr;
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
  background-color: #cccccc;
}
div.command {
  background-color: #111111;
}
.ent {
  grid-area: ent;
}
div.na {
  cursor: not-allowed;
  color: #666666;
  background-color: #999999;
}
</style>
