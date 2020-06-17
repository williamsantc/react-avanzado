import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Styles'

export const SubmitButton = ({ onClick, disabled, children }) => (
  <Button disabled={disabled} onClick={onClick}>{children}</Button>
)

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
