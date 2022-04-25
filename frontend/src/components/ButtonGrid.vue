<script setup lang="ts">

function handleClick (e: Event) {
  const button = e.target as HTMLElement
  const text = button.innerText
  console.log(`Clicked '${text}'`)
}
</script>

<template>
  <div
    class="grid"
    @click="handleClick"
  >
    <div class="clipboard subgrid">
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
  </div>
</template>

<style>
.grid {
  text-align: center;
  display: grid;
  grid-template:
    "clp clp cmd cmd"
    "num num num ops"
    "num num num ops"
    "num num num ops"
    "num num num ops";
}
.subgrid > div {
  border: 1px solid black;
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
</style>
