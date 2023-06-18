<script setup>
import GroupButtons from './components/GroupButtons/GroupButtons.vue'
import SearchBar from './components/SearchBar/SearchBar.vue'
import ResultsComponent from './components/ShowResult/ResultsComponent.vue'
import TitleComponent from './components/Title/TitleComponent.vue'
</script>

<template>
  <main
    class="flex flex-col md:grid md:grid-rows-[auto,auto,1fr] justify-center items-center gap-4 md:gap-8 px-8 py-2"
  >
    <TitleComponent />
    <section class="justify-self-center w-full">
      <GroupButtons />
    </section>
    <section class="w-full md:w-[60dvw] h-full sm:grid sm:grid-cols-[40%,1fr] flex gap-2 flex-col">
      <SearchBar />
      <ResultsComponent />
    </section>
  </main>
</template>
