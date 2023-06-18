<script setup>
import { useISBNStore } from '../../stores'
const storeIsbn = useISBNStore()
</script>

<template>
  <form>
    <section
      class="flex justify-between w-full px-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 overflow-hidden"
    >
      <div class="flex w-full gap-4">
        <div class="flex items-center pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <input
          maxlength="12"
          v-model="storeIsbn.isbn"
          @change="storeIsbn.setISBN($event.target.value)"
          type="text"
          name="isbn"
          id="isbn"
          class="flex-1 py-4 focus:bg-transparent bg-transparent border-none outline-none px-2 overflow-hidden"
          required
          placeholder="i.e. 978014300723"
        />
      </div>
    </section>
    <caption class="block w-fit opacity-0" :class="storeIsbn.isError && 'opacity-100'">
      <small class="text-red-500">Enter a valid ISBN Number</small>
    </caption>
  </form>
</template>
