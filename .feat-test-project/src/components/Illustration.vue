<template>
  <div class="flex flex-col">
    <div class="w-full flex flex-col justify-center items-center text-center">
      <img src="../assets/skeleton.svg" class="top-0 z-10" alt="Skeleton" />
      <div class="p-5 z-20 relative top-[-4rem]">
        <h2 class="text-primary text-[32px] font-extrabold mb-2">
          {{ t('h2') }}
        </h2>
        <p class="text-primary text-[20px] mx-auto">
          {{ t('h3') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
