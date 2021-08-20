/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { keyframes } from '@emotion/react'

const slide = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(calc(-232px * 16))' }
})

export default () => {
  const {
    atlantic,
    costco,
    dominion,
    extra,
    fortinos,
    frills,
    highland,
    iga,
    independent,
    loblaws,
    maxi,
    natures,
    provigo,
    superstore,
    valu,
    zehrs
   } = useStaticQuery(
    graphql`
      query {
        atlantic: file(relativePath: { eq: "map_slider_logos/atlantic.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        costco: file(relativePath: { eq: "map_slider_logos/costco.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        dominion: file(relativePath: { eq: "map_slider_logos/dominion.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        extra: file(relativePath: { eq: "map_slider_logos/extra.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        fortinos: file(relativePath: { eq: "map_slider_logos/fortinos.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        frills: file(relativePath: { eq: "map_slider_logos/frills.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        highland: file(relativePath: { eq: "map_slider_logos/highland.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        iga: file(relativePath: { eq: "map_slider_logos/iga.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        independent: file(relativePath: { eq: "map_slider_logos/independent.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        loblaws: file(relativePath: { eq: "map_slider_logos/loblaws.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        maxi: file(relativePath: { eq: "map_slider_logos/maxi.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        natures: file(relativePath: { eq: "map_slider_logos/natures.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        provigo: file(relativePath: { eq: "map_slider_logos/provigo.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        superstore: file(relativePath: { eq: "map_slider_logos/superstore.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        valu: file(relativePath: { eq: "map_slider_logos/valu.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        zehrs: file(relativePath: { eq: "map_slider_logos/zehrs.png" }) {
          childImageSharp {
            fixed(width: 232, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <div sx={{ transform: ['rotate(-14.5deg)', 'rotate(-14.5deg)', 'rotate(-4deg)'] }}>
      <Flex sx={{
        position: 'relative',
        alignItems: 'center',
        width: 'calc(232px * 32)',
        height: '100%',
        animationName: slide,
        animationTimingFunction: 'linear',
        animationDuration: '30s',
        animationIterationCount: 'infinite',
      }}>
        <Img
          fixed={atlantic.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={costco.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={dominion.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={extra.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={iga.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={fortinos.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={frills.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={highland.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={independent.childImageSharp.fixed}
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
          fixed={maxi.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={provigo.childImageSharp.fixed}
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
          fixed={natures.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={valu.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={zehrs.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={atlantic.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={costco.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={dominion.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={extra.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={highland.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={fortinos.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={frills.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={iga.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={independent.childImageSharp.fixed}
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
          fixed={maxi.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={provigo.childImageSharp.fixed}
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
          fixed={natures.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={valu.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
        <Img
          fixed={zehrs.childImageSharp.fixed}
          loading="eager"
          imgStyle={{ objectFit: 'fill' }}
          sx={{ width: '100%' }}
        />
      </Flex>
    </div>
  )
}
