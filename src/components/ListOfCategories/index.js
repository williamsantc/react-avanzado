import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { useFetch } from '../../hooks/useFetch'

export const ListOfCategories = () => {
  const [showfixed, setShowFixed] = useState(false)
  const [categories, loading] = useFetch()

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
            <Category {...category} />
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
