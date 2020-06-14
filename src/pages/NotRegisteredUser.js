import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { StateContext } from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Container } from '../styles/GlobalStyles'

export const NotRegisteredUserPage = () => {
  const { activateAuth } = useContext(StateContext)
  const FormSubmission = (errMsg, title, action) => (doMutation, { loading, error }) => {
    const onSubmit = ({ email, password }) => {
      const input = { email, password }
      const variables = { input }
      doMutation({ variables })
        .then(action)
        .catch((e) => console.log(e))
    }

    const errorMsg = error && errMsg
    return (
      <UserForm
        disabled={loading}
        onSubmit={onSubmit}
        error={errorMsg}
        title={title}
      />
    )
  }
  return (
    <Container>
      <RegisterMutation>{
        FormSubmission('El usuario ya existe o hay algún problema.', 'Registrarse', ({ data: { signup } }) => {
          activateAuth(signup)
        })
      }
      </RegisterMutation>
      <LoginMutation>
        {
          FormSubmission('El usuario o contraseña es incorrecto.', 'Iniciar sesión', ({ data: { login } }) => {
            activateAuth(login)
          })
        }
      </LoginMutation>
    </Container>
  )
}
