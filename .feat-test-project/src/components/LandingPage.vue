<template>
  <div class="relative grid min-h-screen lg:grid-cols-12">
    <img
      src="../assets/planet1.svg"
      class="absolute top-0 left-[10%] lg:left-[-1%] w-[10vw] lg:w-[12vw] z-20"
      alt="Planet top left"
    />

    <div class="hidden lg:block sm:col-span-7 relative z-10">
      <Illustration />
    </div>

    <img
      src="../assets/planet2.svg"
      class="absolute bottom-[9rem] right-[8%] lg:right-[39%] bottom-50 w-[7vw] lg:w-[8vw] z-20"
      alt="Planet bottom right"
    />

    <div class="col-span-12 sm:col-span-5 relative z-10">
      <Login />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Illustration from './Illustration.vue'
import Login from './Login.vue'
</script>
