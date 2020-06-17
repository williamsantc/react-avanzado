import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { useFetch } from '../../hooks/useFetch'

const ListOfCategoriesComponent = () => {
  const [showfixed, setShowFixed] = useState(false)
  const [categories, loading] = useFetch('/categories')

  useEffect(() => {
    const onScroll = (evt) => {
      const newShowFixed = window.scrollY > 200
      if (showfixed !== newShowFixed) {
        setShowFixed(newShowFixed)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showfixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item>
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showfixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
