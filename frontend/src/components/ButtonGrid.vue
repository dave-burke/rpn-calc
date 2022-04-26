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
    <div class="disabled">
      Cut
    </div><div class="disabled">
      Copy
    </div> <div class="disabled">
      Paste
    </div><div>Drop</div><div>Swap</div>

    <div>1/x</div><div>7</div><div>8</div><div>9</div><div>+</div>
    <div>*10</div><div>4</div><div>5</div><div>6</div><div>-</div>
    <div>/10</div><div>1</div><div>2</div><div>3</div><div>*</div>
    <div>X^N</div><div>0</div><div>.</div><div>(-)</div><div>/</div>
    <div>√x</div><div>del</div><div class="ent">
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
.grid > div {
  background-color: #444444;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}
.ent {
  grid-area: ent;
}
div.disabled {
  cursor: not-allowed;
  color: #666666;
  background-color: #999999;
}
</style>
