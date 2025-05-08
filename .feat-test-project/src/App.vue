<template>
  <div>
    <p>{{ t('greeting') }}</p>
    <button @click="switchLang('hu')">Magyar</button>
    <button @click="switchLang('en')">English</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function switchLang(lang: string) {
  locale.value = lang
}
</script>
