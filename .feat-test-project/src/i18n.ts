import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    h1: 'Join to feat.',
    h2: 'Any program is only as good as it is useful',
    h3: 'The aim is to consistently craft pixel-perfect and high-performance solutions',
    description: 'See what will going to happen with your life.',
    password: 'Password',
    remember: 'Remember Me',
    forgot: 'Forgot Password?',
    login: 'Login',
    logout: 'Logout',
    notapplied: 'Not Applied Yet?',
    account: 'Create an account',
    jobtitle: 'Job title',
    jobname: 'Frontend Developer',
    features: 'Features',
    feature1: 'Feature 1',
    feature2: 'Feature 2',
    feature3: 'Feature 3',
  },
  hu: {
    h1: 'Csatlakozz a feat.-hez',
    h2: 'Egy program csak annyira jó, amennyire hasznos',
    h3: 'Célunk, hogy következetesen pixelpontos és nagy teljesítményű megoldásokat készítsünk',
    description: 'Nézd meg, mi történik majd az életeddel.',
    password: 'Jelszó',
    remember: 'Emlékezz rám',
    forgot: 'Elfelejtetted a jelszót?',
    login: 'Bejelentkezés',
    logout: 'Kijelentkezés',
    notapplied: 'Még nem jelentkeztél?',
    account: 'Fiók létrehozása',
    jobtitle: 'Munkakör',
    jobname: 'Frontend fejlesztő',
    features: 'Funkciók',
    feature1: 'Funkció 1',
    feature2: 'Funkció 2',
    feature3: 'Funkció 3',
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'hu',
  fallbackLocale: 'hu',
  messages,
})
