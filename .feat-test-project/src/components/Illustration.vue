<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <div
      class="lg:w-7/12 w-full flex flex-col justify-center items-center px-6 py-10 text-center relative"
    >
      <img src="../assets/planet1.svg" class="absolute top-0 left-0 z-20 w-48" />
      <img
        src="../assets/skeleton.svg"
        class="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-auto"
        alt="Skeleton"
      />

      <div class="mt-[300px]">
        <h2 class="text-primary text-2xl lg:text-3xl font-bold mb-2">
          Any program is only as good as it is useful
        </h2>
        <p class="text-title2 text-base lg:text-lg max-w-md mx-auto">
          The aim is to consistently craft pixel-perfect and high-performance solutions
        </p>
      </div>

      <img src="../assets/planet2.svg" class="absolute bottom-0 right-0 top-180 w-27 z-0" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
