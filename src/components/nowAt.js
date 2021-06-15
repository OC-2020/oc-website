/** @jsx jsx */
import { jsx, Styled, Container, Flex } from "theme-ui"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { keyframes } from '@emotion/react'

const slide = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(calc(-110px * 11))' }
})

export default () => {
  const {
    stores,
    costco,
    atlantic,
    dominion,
    extra,
    independent,
    loblaws,
    maxi,
    provigo,
    superstore,
    valu,
    zehrs
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
        costco: file(relativePath: { eq: "stores/costco.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        atlantic: file(relativePath: { eq: "stores/atlantic.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        dominion: file(relativePath: { eq: "stores/dominion.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        extra: file(relativePath: { eq: "stores/extra.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        independent: file(relativePath: { eq: "stores/independent.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        loblaws: file(relativePath: { eq: "stores/loblaws.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        maxi: file(relativePath: { eq: "stores/maxi.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        provigo: file(relativePath: { eq: "stores/provigo.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        superstore: file(relativePath: { eq: "stores/superstore.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        valu: file(relativePath: { eq: "stores/valu.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        zehrs: file(relativePath: { eq: "stores/zehrs.png" }) {
          childImageSharp {
            fixed(width: 110, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Link to="/stores" sx={{
      display: 'block',
      background: '#241f21',
      textDecoration: 'none'
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
            width: 'calc(110px * 22)',
            height: '100%',
            animationName: slide,
            animationTimingFunction: 'linear',
            animationDuration: '30s',
            animationDelay: '2s',
            animationIterationCount: 'infinite',
          }}>
            <Img
              fixed={costco.childImageSharp.fixed}
              loading="eager"
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={loblaws.childImageSharp.fixed}
              loading="eager"
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={superstore.childImageSharp.fixed}
              loading="eager"
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={provigo.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={dominion.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={extra.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={maxi.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={independent.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={valu.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={zehrs.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={atlantic.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={costco.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={loblaws.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={superstore.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={provigo.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={dominion.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={extra.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={maxi.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={independent.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={valu.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={zehrs.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
            <Img
              fixed={atlantic.childImageSharp.fixed}
              imgStyle={{ objectFit: 'fill' }}
              sx={{ width: '100%' }}
            />
          </Flex>
        </div>
      </Container>
    </Link>
  )
}
