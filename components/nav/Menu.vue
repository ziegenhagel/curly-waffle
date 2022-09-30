<template>
  <nav class="m-3 flex flex-col items-start">

    <div class="uppercase text-sm font-bold mt-3">Main Menu</div>
    <button
        v-for="item in ['Bebauung','Aktivisti','Events','Repro','Mobi','Plenum']" class="cursor-not-allowed">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
      </svg>
      {{ item }}
    </button>

    <div class="uppercase text-sm font-bold mt-3">Dev. Menu</div>
    <button @click="devRandom()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
      </svg>
      Material
    </button>


    <!-- have a button that calls other functions -->
    <button @click="$emit('addRepro', 2)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
      Repro
    </button>

    <button @click="$emit('addTreehouse')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
      </svg>
      Treehouse
    </button>

  </nav>
</template>

<script setup>
// get useVillage
const village = useVillage()

// have a devRandom function, setting random values to the village
const devRandom = () => {
  village.value.materials.wood = Math.ceil(Math.random() * 200)
  village.value.materials.iron = Math.ceil(Math.random() * 200)
  village.value.materials.pallets = Math.ceil(Math.random() * 200)
}
</script>

<style scoped>
button {
  @apply flex hover:bg-blue-100 block w-full text-left px-2 py-1 gap-1
}
</style>
