/** @jsx jsx */
import { jsx, Styled, Container, Flex } from "theme-ui"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { keyframes } from '@emotion/react'

const slide = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-92%)' }
})

export default () => {
  const {
    stores
   } = useStaticQuery(
    graphql`
      query {
        stores: file(relativePath: { eq: "stores.jpg" }) {
          childImageSharp {
            fixed(width: 1067, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <div sx={{
      background: '#241f21'
    }}>
      <Container sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60px',
        background: '#241f21'
      }}>
        <Styled.h4 sx={{ mr: 4, whiteSpace: 'nowrap' }}>NOW AT</Styled.h4>
        <div sx={{ display: ['none', 'none', 'flex'] }}>
          <Img
            fixed={stores.childImageSharp.fixed}
            imgStyle={{
              objectFit: 'fill',
            }}
            sx={{
              width: '1067px',
            }}
          />
        </div>
        <div sx={{
          display: ['block', 'block', 'none'],
          overflow: 'hidden',
        }}>
          <Flex sx={{
            position: 'relative',
            alignItems: 'center',
            width: '3201px',
            height: '100%',
            animationName: slide,
            animationTimingFunction: 'ease-in-out',
            animationDuration: '30s',
            animationDelay: '1s',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
          }}>
            <Img
              fixed={stores.childImageSharp.fixed}
              imgStyle={{
                objectFit: 'fill'
              }}
              sx={{
                width: '100%'
              }}
            />
            <Img
              fixed={stores.childImageSharp.fixed}
              imgStyle={{
                objectFit: 'fill'
              }}
              sx={{
                width: '100%',
                ml: 4
              }}
            />
            <Img
              fixed={stores.childImageSharp.fixed}
              imgStyle={{
                objectFit: 'fill'
              }}
              sx={{
                width: '100%',
                ml: 4
              }}
            />
          </Flex>
        </div>
      </Container>
    </div>
  )
}
