import { useState } from 'react'

export function useLocalStorage (storageKey, initialValue) {
  if (!storageKey) {
    throw new Error('Storage key is required')
  }
  const [currentValue, setCurrentValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(storageKey)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(storageKey, value)
      setCurrentValue(value)
    } catch (e) {
      console.log(e)
    }
  }

  return [currentValue, setLocalStorage]
}
