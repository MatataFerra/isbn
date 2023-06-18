<script setup>
defineProps({
  result: {
    type: [Number, String]
  },

  description: {
    type: String,
    required: true
  },

  show: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div v-if="show">
    <pre class="whitespace-break-spaces text-sm">{{ description }}</pre>
    <p>{{ result }}</p>
  </div>
</template>
