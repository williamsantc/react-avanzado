import React, { useContext } from 'react'
import { StateContext } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Container } from '../styles/GlobalStyles'

export const UserPage = () => {
  const { removeAuth } = useContext(StateContext)
  return (
    <Container>
      <h1>User</h1>
      <p>¡Bienvenido!</p>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Container>
  )
}
