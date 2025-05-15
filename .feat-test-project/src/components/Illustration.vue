<template>
  <div class="flex flex-col h-auto sm:h-full">
    <div class="w-full flex flex-col justify-center items-center text-center">
      <img
        src="../assets/skeleton.svg"
        class="top-0 z-10 mt-10 mb-12 sm:m-0 fade-in-delay-0 slow-pulse w-[75%] sm:w-[95%]"
        alt="Skeleton"
      />
      <div class="p-5 z-20 relative top-[-4rem]">
        <h2 class="text-primary text-[32px] font-extrabold leading-10 mb-5 fade-in-delay-1">
          {{ t('h2') }}
        </h2>
        <h3 class="text-primary text-[20px] mx-auto leading-8 fade-in-delay-2">
          {{ t('h3') }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
