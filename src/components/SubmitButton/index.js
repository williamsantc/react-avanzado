import React from 'react'
import { Button } from './Styles'

export const SubmitButton = ({ onClick, disabled, children }) => (
  <Button disabled={disabled} onClick={onClick}>{children}</Button>
)
