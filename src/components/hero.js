/** @jsx jsx */
import { jsx, Styled, Container } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import Img from 'gatsby-image'
import ShopBtn from './shopbtn'

export default () => {
  const {
    hero
  } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(maxWidth: 898, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Fade delay={200} triggerOnce>
      <Container as="section" sx={{
        position: 'relative',
        mt: [4, 4, '25px']
      }}>

        <Img
          fluid={hero.childImageSharp.fluid}
          style={{
            position: 'absolute'
          }}
          sx={{
            top: ['10rem', '10rem', '-7.6rem'],
            left: ['50%', '50%', 'auto'],
            right: [null, null, '-2.4rem'],
            width: ['240px', '240px', '449px'],
            transform: ['translateX(-50%)', 'translateX(-50%)', 'none']
          }}
        />

        <Styled.h3 sx={{
          'span': {
            position: 'relative',
            ':after': {
              content: '""',
              position: 'absolute',
              bottom: '-3px',
              left: '0px',
              width: ['40px', '40px', '58px'],
              height: '2px',
              backgroundColor: 'text'
            }
          }
        }}>
          World’s <span>First</span>
        </Styled.h3>

        <Styled.h1 sx={{
          mt: [1, 1, 3],
          'span': {
            position: 'relative',
            display: 'inline-flex',
            pt: ['4px', '4px', 1],
            lineHeight: ['32px', '32px', '94px'],
            color: 'white',
            backgroundColor: 'secondary',
            ':before': {
              content: '""',
              position: 'absolute',
              top: '0px',
              left: '-12px',
              width: '60px',
              height: '100%',
              backgroundColor: 'secondary',
              transform: 'skew(-10deg)',
              zIndex: -1
            },
            ':after': {
              content: '""',
              position: 'absolute',
              top: '0px',
              right: '-20px',
              width: '60px',
              height: '100%',
              backgroundColor: 'secondary',
              transform: 'skew(-10deg)',
              zIndex: -1
            }
          }
        }}>
          Zero Sugar &<br /> Keto Friendly<br /> <span>Oat M*lk</span>
        </Styled.h1>

        <ShopBtn sx={{
          position: 'absolute',
          top: ['10rem', '10rem', 'auto'],
          right: ['4rem', '4rem', '19rem'],
          bottom: 0,
          mt: [4, 4, 4]
        }} />
      </Container>
    </Fade>
  )
}
