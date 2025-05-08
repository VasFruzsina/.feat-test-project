import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    greeting: "💻Let's the work begin👽",
  },
  hu: {
    greeting: '💻Lássunk munkának👽',
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'hu',
  fallbackLocale: 'hu',
  messages,
})
