import { useState, useEffect } from 'react'
import App from './App.jsx'
import AppEnglish from './AppEnglish.jsx'
import { LanguageSelector } from './LanguageSelector.jsx'

export function AppWrapper() {
  // Default to Indonesian for Indonesia version
  const [language, setLanguage] = useState('id')

  // Check if language was previously selected
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    // Both Indonesian and English are LTR (Left-to-Right)
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = savedLanguage || 'id'
  }, [])

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('selectedLanguage', lang)
    // Both Indonesian and English are LTR
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = lang
  }

  const handleChangeLanguage = () => {
    // Toggle between Indonesian and English
    const newLanguage = language === 'id' ? 'en' : 'id'
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
    // Both Indonesian and English are LTR
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = newLanguage
  }

  // Indonesian is default, English is alternative
  if (language === 'en') {
    return <AppEnglish onChangeLanguage={handleChangeLanguage} />
  }

  return <App onChangeLanguage={handleChangeLanguage} />
}
