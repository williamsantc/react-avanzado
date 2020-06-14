import React from 'react'
import { Grid, Image, Link } from './Styles'
export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.length === 0 ? <p>No hay favoritos...</p> : favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))
      }
    </Grid>
  )
}
