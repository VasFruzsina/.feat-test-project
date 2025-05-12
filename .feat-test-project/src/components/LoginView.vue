<template>
  <input
    type="email"
    v-model="email"
    placeholder="hello@feat.hu"
    class="w-full p-2 border rounded mb-4"
  />

  <input
    type="password"
    v-model="password"
    :placeholder="t('password')"
    class="w-full p-2 border rounded mb-2"
  />
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
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import api from '@/api'

const emit = defineEmits<{
  (e: 'login-success', user: any): void
}>()

const { t } = useI18n()

const email = ref('')
const password = ref('')

async function login() {
  try {
    if (!email.value || !password.value) {
      alert('Kérlek, add meg az email címet és a jelszót.')
      return
    }

    console.log('Bejelentkezési adatok:', {
      email: email.value,
      password: password.value,
    })

    await api.get('/auth/csrf')

    const response = await api.post('/auth/login', {
      email: email.value,
      password: password.value,
    })

    emit('login-success', response.data)
  } catch (err: any) {
    if (err.response?.status === 422) {
      alert('❌ Hibás email vagy jelszó.')
    } else {
      alert('⚠️ Ismeretlen hiba történt a bejelentkezés során.')
      console.error('Login failed', err)
    }
  }
}

function resetFields() {
  email.value = ''
  password.value = ''
}

defineExpose({
  login,
  resetFields,
})
</script>
