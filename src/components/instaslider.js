/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useEffect, useState } from 'react'
import { motion, useTransform, animate, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const rotation = [-3, 1, -2, 3, -1, 2]

function InstagramImage({ image, base, index, total }) {
  const x = useTransform(
    base,
    [0, (100 / total) * (index + 1), (100 / total) * (index + 1), 100],
    ['0%', `${(index + 1) * -100}%`, `${total * 100 - (index + 1) * 100}%`, '0%']
  )
  const [straight, setStraight] = useState(false)

  return (
    <motion.li
      onMouseEnter={() => setStraight(true)}
      onMouseLeave={() => setStraight(false)}
      style={{ x }}
    >
      <motion.figure
        initial={false}
        animate={straight ? { rotate: 0 } : { rotate: rotation[index % rotation.length] }}
			>
				<div sx={{
					width: 211,
					height: 339,
					boxShadow: '0 16px 24px 0 rgba(44,44,44,0.2)',
					borderRadius: '6px'
				 }}>
					<Img
						fluid={image.childImageSharp.fluid}
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							borderRadius: '8px'
						}}
					/>
				</div>
      </motion.figure>
    </motion.li>
  )
}

export default () => {
  const {
    Instagram1,
    Instagram2,
    Instagram3,
    Instagram4,
    Instagram5,
    Instagram6,
    Instagram7,
    Instagram8,
    Instagram9
   } = useStaticQuery(
    graphql`
      query {
        Instagram1: file(relativePath: { eq: "instagram/instagram1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram2: file(relativePath: { eq: "instagram/instagram2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram3: file(relativePath: { eq: "instagram/instagram3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram4: file(relativePath: { eq: "instagram/instagram4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram5: file(relativePath: { eq: "instagram/instagram5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram6: file(relativePath: { eq: "instagram/instagram6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram7: file(relativePath: { eq: "instagram/instagram1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram8: file(relativePath: { eq: "instagram/instagram2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        Instagram9: file(relativePath: { eq: "instagram/instagram3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 422, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const images = [
    Instagram1,
    Instagram2,
    Instagram3,
    Instagram4,
    Instagram5,
    Instagram6,
    Instagram7,
    Instagram8,
    Instagram9
  ]

  const x = useMotionValue(0)
  const { inView, ref: inViewRef } = useInView({ threshold: 0, rootMargin: '100px' })
  const duration = 75

  useEffect(() => {
    if (!inView) return

    const controls = animate(x, 100, {
      type: 'tween',
      duration,
      ease: 'linear',
      loop: Infinity,
    })

    return controls.stop
  }, [inView, x, duration])

  return (
    <div
      ref={inViewRef}
      sx={{ position: 'relative' }}
    >
      <div sx={{ display: 'flex', height: 440, overflow: 'hidden' }}>
        <ul sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					listStyle: 'none'
				}}>
          {images.map((image, i) => (
            <InstagramImage
              key={i}
              image={image}
              base={x}
              index={i}
              total={images.length}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}