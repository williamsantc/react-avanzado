import React, { useContext } from 'react'
import { StateContext } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export default () => {
  const { removeAuth } = useContext(StateContext)
  return (
    <Layout title='Usuario' subtitle='Datos del usuario'>
      <h1>User</h1>
      <p>¡Bienvenido!</p>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Layout>
  )
}
