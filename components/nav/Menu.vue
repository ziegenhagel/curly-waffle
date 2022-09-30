<template>
  <nav class="m-3 flex flex-col items-start">

    <div class="uppercase text-sm font-bold mt-3">Main Menu</div>
    <button
        v-for="item in ['Bebauung','Aktivisti','Events','Repro','Mobi','Plenum']"
        class="hover:bg-stone-100 block w-full text-left px-2 py-1" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
      {{ item }}
    </button>

    <div class="uppercase text-sm font-bold mt-3">Dev. Menu</div>
    <button @click="devRandom()" class="hover:bg-blue-100 block w-full text-left px-2 py-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
      Random</button>
  </nav>
</template>

<script setup>

// get useVillage
const village = useVillage()

// have a devRandom function, setting random values to the village
const devRandom = () => village.value.villagers.total = Math.ceil(Math.random()*200)

</script>

<style scoped>
  button {
    @apply flex
  }
</style>
