import React from 'react'
import PropTypes from 'prop-types'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToogleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {!show ? null : (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToogleLikeMutation>
            {
              (toogleLike) => {
                const handleFavClick = () => {
                  toogleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }
                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                )
              }
            }
          </ToogleLikeMutation>
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (typeof propValue !== 'number') {
      return new Error(`${propName} value must be a number`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than cero`)
    }
  }
}
