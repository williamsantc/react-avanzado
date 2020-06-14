import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { StateProvider, TOKEN_KEY } from './Context'
import { App } from './App'
import { ROOT_URL } from './constants'

const client = new ApolloClient({
  uri: `${ROOT_URL}/graphql`,
  request: operation => {
    const token = window.sessionStorage.getItem(TOKEN_KEY)
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError, graphQLErrors } = error
    console.log(graphQLErrors)
    if ((networkError && networkError.result.code === 'invalid_token') || graphQLErrors) {
      window.sessionStorage.removeItem(TOKEN_KEY)
      window.location.href = '/user'
    }
  }
})

ReactDOM.render(
  <>
    <StateProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StateProvider>
  </>, document.getElementById('app'))
