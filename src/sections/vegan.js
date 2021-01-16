/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ShopBtn from '../components/shopbtn'

export default () => {
  const {
		carton
  } = useStaticQuery(
    graphql`
      query {
        carton: file(relativePath: { eq: "Oat-Canada_NFT_Ingredients-2.png" }) {
          childImageSharp {
            fluid(maxWidth: 854, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

	return (
		<section sx={{
			position: 'relative',
			mt: ['84vw', '84vw', '22vw'],
			px: [0, 0, '6vw'],
		}}>
			<h1 sx={{
				m: 0,
				fontSize: ['8vw', '7.85vw', '7.8vw'],
				lineHeight: ['7.25vw', '6.5vw', '6vw'],
				textTransform: 'uppercase',
				fontFamily: 'eastman',
				whiteSpace: 'no-wrap',
				'span': {
					pl: '8vw'
				}
			}}>
				<span>Vegan<br /></span>
				Non-gmo<br />
				<span>Keto<br /></span>
				
				Glyphosate Free<br />
				Diabetic friendly
			</h1>

			<Img
				fluid={carton.childImageSharp.fluid}
				style={{ position: 'absolute' }}
				sx={{
					top: ['-80vw', '-80vw', '-10vw'],
					left: ['34vw', '34vw', '33.5vw'],
					width: ['60vw', '60vw', '27.5vw'],
				}}
			/>

			<ShopBtn sx={{
				position: 'absolute',
				top: ['-32vw', '-32vw', '1vw'],
				left: ['15vw', '15vw', '56vw']
			}} />

			<Text sx={{
				display: ['none', 'none', 'block'],
				position: 'absolute',
				top: '9.5vw',
				left: '62vw',
				fontSize: '1.65vw',
				fontWeight: '600',
				fontFamily: 'barlow',
				textTransform: 'uppercase',
				lineHeight: '1.65vw'
			}}>
				The easiest way to cut <br/>
				down sugar without even <br />
				thinking about it
			</Text>
		</section>
	)
}
