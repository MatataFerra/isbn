<script setup>
import ButtonComponent from '../Button/ButtonComponent.vue'
import { useISBNStore } from '../../stores'

const storeIsbn = useISBNStore()

const onReset = (e) => {
  e.preventDefault()
  storeIsbn.reset()
}
</script>

<template>
  <section class="flex flex-col md:flex-row items-center gap-1 justify-end">
    <ButtonComponent @click="onReset" text="Reset" color="green" />
  </section>
</template>
