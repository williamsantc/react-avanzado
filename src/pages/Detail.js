import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'

export const DetailPage = ({ detailId }) => {
  return (<PhotoCardWithQuery id={detailId} />)
}
