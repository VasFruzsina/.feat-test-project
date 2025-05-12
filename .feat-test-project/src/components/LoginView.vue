<template>
  <div class="w-[86%]">
    <div class="mb-3">
      <label for="email" class="block text-[14px] text-title2 font-semibold mb-1">Email</label>
      <input type="text" placeholder="hello@feat.hu" class="custom-input p-3" />
    </div>

    <div class="mb-1">
      <label for="password" class="block text-[14px] text-title2 font-semibold mb-1">
        {{ t('password') }}
      </label>
      <input type="password" placeholder="password" class="custom-input p-3" />
    </div>

    <div class="flex justify-between items-center mb-4 text-sm">
      <label class="flex items-center gap-1.5 text-[12px] text-checkbox">
        <input type="checkbox" class="accent-secondary" />
        {{ t('remember') }}
      </label>
      <a href="#" class="text-secondary font-semibold text-[12px] hover:text-hover2">
        {{ t('forgot') }}
      </a>
    </div>
  </div>
</template>

<style>
.custom-input {
  width: 100%;
  background-color: white;
  font-size: 14px;
  border: 1px solid #ded2d9;
  border-radius: 4px;
  padding: 8px;
  box-shadow: none;
  outline: none;
}

.custom-input:focus {
  border: 2px solid #73114b;
}

.custom-input::placeholder {
  color: #e0e0e0;
}

input.custom-input:-webkit-autofill {
  box-shadow: 0 0 0 1000px white inset;
  -webkit-box-shadow: 0 0 0 1000px white inset;
  -webkit-text-fill-color: #000;
}
</style>

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
