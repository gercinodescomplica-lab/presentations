import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/pt'
import en from './locales/en'
import es from './locales/es'
import ru from './locales/ru'

i18n
  .use(initReactI18next)
  .init({
    resources: { pt, en, es, ru },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: { escapeValue: false },
  })

export default i18n
