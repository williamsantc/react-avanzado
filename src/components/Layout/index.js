import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, tagsVisible }) => {
  return (
    <>
      <Helmet>
        {title && <title>Petgram 🐶 | {title}</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {tagsVisible &&
          <>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </>}
        {children}
      </Div>
    </>
  )
}
