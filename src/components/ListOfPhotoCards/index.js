import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => {
  return (
    <List>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </List>
  )
}
