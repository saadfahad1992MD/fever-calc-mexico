import { useState, useEffect } from 'react'
import App from './App.jsx'
import AppEnglish from './AppEnglish.jsx'
import { LanguageSelector } from './LanguageSelector.jsx'

export function AppWrapper() {
  // Default to Spanish for Mexico version
  const [language, setLanguage] = useState('es')

  // Check if language was previously selected
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
    // Both Indonesian and English are LTR (Left-to-Right)
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = savedLanguage || 'es'
  }, [])

  const handleSelectLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('selectedLanguage', lang)
    // Both Indonesian and English are LTR
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = lang
  }

  const handleChangeLanguage = () => {
    // Toggle between Spanish and English
    const newLanguage = language === 'es' ? 'en' : 'es'
    setLanguage(newLanguage)
    localStorage.setItem('selectedLanguage', newLanguage)
    // Both Indonesian and English are LTR
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = newLanguage
  }

  // Spanish is default, English is alternative
  if (language === 'en') {
    return <AppEnglish onChangeLanguage={handleChangeLanguage} />
  }

  return <App onChangeLanguage={handleChangeLanguage} />
}
