<template>
  <nav class="m-3 flex flex-col items-start">
    <button
        v-for="item in ['Bebauung','Aktivisti','Events','Repro','Mobi','Plenum']"
        class="hover:bg-stone-100 block w-full text-left px-2 py-1"
    >{{item}}</button>
  </nav>
</template>
