<template>
  <div class="w-full bg-white px-6 py-6 min-h-screen flex flex-col">
    <div class="flex justify-between items-center mb-18">
      <img src="../assets/feat_logo.svg" alt="feat logo" class="h-8" />
      <div class="flex gap-x-3 text-sm font-medium text-gray-700">
        <span
          class="cursor-pointer text-title1"
          :class="{ 'font-extrabold text-primary': locale === 'hu' }"
          @click="locale = 'hu'"
        >
          HU
        </span>
        <span
          class="cursor-pointer text-title1"
          :class="{ 'font-extrabold text-primary': locale === 'en' }"
          @click="locale = 'en'"
        >
          EN
        </span>
      </div>
    </div>

    <div class="flex-grow flex items-start justify-center">
      <div class="w-full">
        <h1 class="text-[36px] font-bold text-title1 p-0" v-html="t('h1')"></h1>
        <p class="text-title1 text-[16px] mb-8">{{ t('description') }}</p>

        <template v-if="!isLoggedIn">
          <LoginView ref="loginForm" @login-success="handleLoginSuccess" />
          <button
            class="w-[86%] bg-secondary text-white py-2.5 rounded mt-4 border-none focus:outline-none text-[18] font-extrabold transition transform hover:bg-hover hover:scale-[1.02]"
            @click="submitLogin"
          >
            {{ t('login') }}
          </button>
          <p class="text-[14px] text-left mt-8 text-title2">
            {{ t('notapplied') }}
            <a href="#" class="text-primary font-semibold hover:text-hover2">{{ t('account') }}</a>
          </p>
        </template>

        <template v-else>
          <LoggedInView />
          <button
            class="w-[86%] bg-secondary text-black py-2.5 rounded mt-4 border-none text-[18] font-extrabold focus:outline-none p-2 transition transform hover:bg-hover hover:scale-[1.03]"
            @click="logout"
          >
            {{ t('logout') }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import api from '@/api'
import LoginView from './LoginView.vue'
import LoggedInView from './LoggedInView.vue'

const { t, locale } = useI18n()
const isLoggedIn = ref(false)
const loginForm = ref()
const user = ref(null)

function submitLogin() {
  loginForm.value?.login()
}

function handleLoginSuccess(userData: any) {
  console.log('Bejelentkezett:', userData)
  user.value = userData
  isLoggedIn.value = true
}
async function logout() {
  try {
    await api.post('/auth/logout', {}, { withCredentials: true })

    try {
      await api.get('/auth/user', { withCredentials: true })
      console.warn('A session még mindig él!')
    } catch {
      isLoggedIn.value = false
      user.value = null

      loginForm.value?.resetFields?.()
      console.log('Kijelentkezett és mezők törölve.')
    }
  } catch (err) {
    console.error('Kijelentkezés sikertelen:', err)
  }
}

onMounted(async () => {
  try {
    const res = await api.get('/auth/user')
    if (res.data) {
      isLoggedIn.value = true
      console.log('Session aktív:', res.data)
    }
  } catch {
    isLoggedIn.value = false
  }
})
</script>
