import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
  favs {
    id,
    categoryId,
    src,
    likes,
    userId
  }
}
`

const renderProp = ({ error, loading, data }) => {
  if (loading) {
    return 'cargando...'
  }
  if (error) {
    return 'error...'
  }
  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>)
