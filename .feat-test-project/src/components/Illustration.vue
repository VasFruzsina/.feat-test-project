<template>
  <div class="flex flex-col lg:w-7/12">
    <div class="w-full flex flex-col justify-center items-center py-10 text-center relative">
      <img src="../assets/planet1.svg" class="absolute top-0 left-0 z-20 w-48" />

      <img
        src="../assets/skeleton.svg"
        class="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-auto"
        alt="Skeleton"
      />

      <div class="mt-[550px]">
        <h2 class="text-primary text-2xl lg:text-3xl font-bold mb-2">
          {{ t('h2') }}
        </h2>
        <p class="text-primary text-base lg:text-lg max-w-md mx-auto">
          {{ t('h3') }}
        </p>
      </div>

      <img src="../assets/planet2.svg" class="absolute bottom-0 right-0 top-180 w-27 z-0" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
