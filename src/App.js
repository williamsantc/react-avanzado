import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

// Pages
import { HomePage } from './pages/Home'
import { DetailPage } from './pages/Detail'
import { FavsPage } from './pages/Favs'
import { UserPage } from './pages/User'
import { NotRegisteredUserPage } from './pages/NotRegisteredUser'
import { NotFoundPage } from './pages/NotFound'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/logo'
import { NavBar } from './components/NavBar'
import { StateContext } from './Context'

export const App = () => {
  const { isAuth } = useContext(StateContext)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFoundPage default />
        <HomePage path='/' />
        <HomePage path='/pet/:categoryId' />
        <DetailPage path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUserPage path='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/user' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        <FavsPage path='/favs' />
        <UserPage path='/user' />
      </Router>
      <NavBar />
    </>
  )
}
