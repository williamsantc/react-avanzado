import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePageComponent = ({ categoryId }) => {
  return (
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con petgram puedes encontrar fotos de animales domésticos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export default React.memo(HomePageComponent, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
