<template>
  <div class="font-sans text-gray-800 space-y-4 mb-6">
    <p class="text-lg font-medium">Features:</p>

    <div v-for="(feature, index) in features" :key="index" class="mb-6">
      <h2 :class="['text-lg font-bold', feature.colorClass]">{{ feature.title }}</h2>
      <p class="text-sm text-gray-600">
        Lorem ipsum dolor sit amet {{ index + 1 }}, consectetur adipiscing elit.
        <br />
        Donec a diam lectus. Sed sit amet ipsum mauris.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const features = [
  { title: 'Feature 1', colorClass: 'text-red-600' },
  { title: 'Feature 2', colorClass: 'text-green-600' },
  { title: 'Feature 3', colorClass: 'text-blue-600' },
]
</script>
