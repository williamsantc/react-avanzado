import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { StateContext } from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Layout } from '../components/Layout'

export default () => {
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
    <Layout
      title='Regitrate o Ingresa'
      subtitle='Para poder visualizar la aplicación es necesario que te registres o inicies sesión'
    >
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
    </Layout>
  )
}
