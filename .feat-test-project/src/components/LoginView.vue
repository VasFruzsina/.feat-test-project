<template>
  <input type="email" placeholder="hello@feat.hu" class="w-full p-2 border rounded mb-4" />
  <input type="password" :placeholder="t('password')" class="w-full p-2 border rounded mb-2" />

  <div class="flex justify-between items-center mb-4 text-sm">
    <label class="flex items-center gap-2">
      <input type="checkbox" />
      {{ t('remember') }}
    </label>
    <a href="#" class="text-primary">
      {{ t('forgot') }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
