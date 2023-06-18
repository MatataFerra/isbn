<script setup>
defineProps({
  onReset: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <svg
    @click="onReset"
    width="28"
    height="28"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="cursor-pointer hover:text-gray-500"
  >
    <g data-name="Refresh Time">
      <path
        d="M12 2a9.975 9.975 0 0 0-7 2.882V3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H6.713A8 8 0 1 1 4 12a1 1 0 0 0-2 0A10 10 0 1 0 12 2z"
        style="fill: #1c1b1e"
      />
      <path
        d="m9.707 15.707 3-3A1 1 0 0 0 13 12V8a1 1 0 0 0-2 0v3.586l-2.707 2.707a1 1 0 1 0 1.414 1.414z"
        style="fill: #1c1b1e"
      />
    </g>
  </svg>
</template>
