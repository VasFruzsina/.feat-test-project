<template>
  <h2 class="text-primary font-black text-[32px]">{{ t('h2') }}</h2>
  <h3 class="text-primary text-[20px]">{{ t('h3') }}</h3>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
