<script setup>
import ShowResult from './ShowResult.vue'
import { useISBNStore } from '../../stores'
const storeIsbn = useISBNStore()
</script>

<template>
  <section
    class="font-sans min-h-[5rem] w-full font-medium p-2 bg-slate-100 rounded-lg shadow-md transition-all flex flex-col gap-2"
  >
    <p v-if="!storeIsbn.isValid" class="animate-pulse self-center mx-0 my-auto text-gray-400">
      Waiting...
    </p>

    <ShowResult :result="storeIsbn.isbnUpdate" description="ISBN-13" :show="storeIsbn.isValid" />
  </section>
</template>
