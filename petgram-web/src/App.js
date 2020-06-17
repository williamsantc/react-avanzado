import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

// Ready to use Pages
import { NotFoundPage } from './pages/NotFound'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'

import { Logo } from './components/logo'
import { NavBar } from './components/NavBar'
import { StateContext } from './Context'

// Lazy loaded pages
const FavsPage = React.lazy(() => import('./pages/Favs'))
const HomePage = React.lazy(() => import('./pages/Home'))
const DetailPage = React.lazy(() => import('./pages/Detail'))
const UserPage = React.lazy(() => import('./pages/User'))
const NotRegisteredUserPage = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const { isAuth } = useContext(StateContext)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
