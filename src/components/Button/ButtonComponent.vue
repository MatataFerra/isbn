<script setup>
import { computed } from 'vue'

const props = defineProps({
  onClick: {
    type: Function,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },

  disabled: {
    type: Boolean,
    default: false
  }
})

const buttonColor = {
  red: 'button-red',
  green: 'button-green',
  blue: 'button-blue',
  indigo: 'button-indigo',
  pink: 'button-pink',
  glow: 'button-glow'
}

const computedStyles = computed(() => {
  return {
    buttonColor: buttonColor[props.color]
  }
})
</script>

<template>
  <button
    v-if="!props.disabled"
    @click="props.onClick"
    :class="[computedStyles.buttonColor]"
    :disabled="props.disabled"
    class="disabled:bg-gray-500 disabled:text-gray-600 transition-all w-full md:w-28"
  >
    {{ props.text }}
  </button>
</template>
