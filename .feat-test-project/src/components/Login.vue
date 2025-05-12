<template>
  <div class="lg:w-5/12 w-full bg-white px-6 py-6 min-h-screen flex flex-col">
    <div class="flex justify-between items-center mb-12">
      <img src="../assets/feat_logo.svg" alt="feat logo" class="h-8" />

      <div class="flex gap-x-3 text-sm font-medium text-gray-700">
        <span class="cursor-pointer hover:text-primary" @click="locale = 'hu'"> HU </span>
        <span class="cursor-pointer hover:text-primary" @click="locale = 'en'"> EN </span>
      </div>
    </div>

    <div class="flex-grow flex items-start justify-center">
      <div class="w-full max-w-md">
        <h2 class="text-2xl font-bold mb-2">
          {{ t('h1') }}
        </h2>
        <p class="text-title2 mb-6">
          {{ t('description') }}
        </p>

        <form>
          <LoginView />
          <button class="w-full bg-primary text-white py-2 rounded">
            {{ t('login') }}
          </button>

          <p class="text-sm text-left mt-4">
            {{ t('notapplied') }}
            <a href="#" class="text-primary font-semibold">
              {{ t('account') }}
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import LoginView from './LoginView.vue'

const { t, locale } = useI18n()
</script>
