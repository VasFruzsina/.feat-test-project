<template>
  <div class="font-sans text-gray-800 space-y-4 mb-6">
    <p class="text-[16px]">Features:</p>

    <div v-for="(feature, index) in features" :key="index" class="mb-6">
      <h2 :class="['text-[20px] font-bold', feature.colorClass]">{{ feature.title }}</h2>
      <p class="text-[16px]text-gray-600">
        Lorem ipsum dolor sit amet {{ index + 1 }}, consectetur adipiscing elit.
        <br />
        Donec a diam lectus. Sed sit amet ipsum mauris.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const features = [
  { title: 'Feature 1', colorClass: 'text-red' },
  { title: 'Feature 2', colorClass: 'text-green' },
  { title: 'Feature 3', colorClass: 'text-blue' },
]
</script>
