/** @jsx jsx */
import { jsx, Styled, Container, Grid, Flex, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Bubble from '../assets/ingredients/bubble.svg'
import Cereal from '../assets/ingredients/cereal.svg'
import Coffee from '../assets/ingredients/coffee.svg'
import Cooking from '../assets/ingredients/cooking.svg'
import Cupcake from '../assets/ingredients/cupcake.svg'
import Smoothie from '../assets/ingredients/smoothie.svg'

const Base = ({ children }) => (
	<Flex sx={{
		alignItems: 'center',
		maxWidth: [null, null, 180],
		'.Ingredient-icon': {
			width: [120, 120, 100],
			textAlign: 'center'
		},
		'.Ingredient-text': {
			fontWeight: 500,
			fontSize: ['16px', '16px', '14px'],
			'br': {
				display: ['none', 'none', 'block']
			}
		}
	}}>
		{children}
	</Flex>
)

export default () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "ingredients.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1469, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

	return (
		<Container as="section" sx={{
			position: 'relative',
			mt: [10, 10, '25rem'],
			mb: [6, 6, '18rem']
		}}>
			<Box sx={{
				maxWidth: 480,
				mx: ['auto', 'auto', 0]
			}}>
				<Styled.h1 sx={{ textAlign: ['center', 'center', 'left'] }}>The perfect base</Styled.h1>

				<Text sx={{ maxWidth: 480, mt: 5, fontSize: '14px', textAlign: ['center', 'center', 'left'] }}>
					Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non.
				</Text>

				<Grid columns={[1, 1, 2]} sx={{
					mt: [8, 8, 7],
					gridRowGap: [6, 6, 5],
					ml: [0, 0, -3]
				}}>
					<Base>
						<Box className="Ingredient-icon"><Cereal /></Box>
						<Text className="Ingredient-text">Cereal <br />& oatmeal</Text>
					</Base>

					<Base>
						<Box className="Ingredient-icon"><Coffee /></Box>
						<Text className="Ingredient-text">Coffee <br />& tea</Text>
					</Base>

					<Base>
						<Box className="Ingredient-icon"><Smoothie /></Box>
						<Text className="Ingredient-text">Smoothies</Text>
					</Base>

					<Base>
						<Box className="Ingredient-icon"><Bubble /></Box>
						<Text className="Ingredient-text">Bubble Tea</Text>
					</Base>

					<Base>
						<Box className="Ingredient-icon"><Cupcake /></Box>
						<Text className="Ingredient-text">Baked <br />Goods</Text>
					</Base>

					<Base>
						<Box className="Ingredient-icon"><Cooking /></Box>
						<Text className="Ingredient-text">Cooking <br />recipes</Text>
					</Base>
				</Grid>

				<Styled.h2 sx={{ mt: [8, 8, 6], textAlign: ['center', 'center', 'left'] }}>Ingredients</Styled.h2>

				<Text sx={{ maxWidth: 480, fontSize: '14px', textAlign: ['center', 'center', 'left'] }}>
					Oat base (filtered water, oat protein), Higholeic sunflower oil, Calcium carbonate, Dipotassium phosphate, Calcium carbonate, Sea salt.
				</Text>

				<Img
					fluid={image.childImageSharp.fluid}
					style={{
						position: 'absolute',
						top: '-14rem',
						left: '26rem',
						zIndex: -1
					}}
					sx={{
						display: ['none', 'none', 'block'],
						minWidth: '1469px'
					}}
				/>
			</Box>
		</Container>
	)
}