<template>
  <div class="relative grid min-h-screen grid-cols-12">
    <img
      src="../assets/planet1.svg"
      class="absolute hidden md:block md:w-[18%] top-0 left-[0%] md:left-[0%] lg:left-[-1%] z-20 fade-in-delay-3"
      alt="Planet top left"
    />

    <div class="col-span-12 md:col-span-7 relative z-10">
      <Illustration />
    </div>

    <img
      src="../assets/planet2.svg"
      class="absolute hidden md:block top-[30%] right-[0%] md:top-[74%] md:right-[38%] md:bottom-[15%] lg:top-[81%] lg:right-[39%] z-20 fade-in-delay-4"
      alt="Planet bottom right"
    />

    <div class="col-span-12 md:col-span-5 relative z-10">
      <Login class="slide-in-right" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Illustration from './Illustration.vue'
import Login from './Login.vue'
</script>
