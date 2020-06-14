import React, { createContext, useState } from 'react'

export const StateContext = createContext()

export const TOKEN_KEY = 'TOKEN_KEY'

export const StateProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem(TOKEN_KEY)
  })

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem(TOKEN_KEY, token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem(TOKEN_KEY)
    }
  }
  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}
