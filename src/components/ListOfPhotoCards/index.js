import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <li key={id}>
          <PhotoCard id={id} />
        </li>
      ))}
    </List>
  )
}
