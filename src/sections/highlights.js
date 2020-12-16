/** @jsx jsx */
import { jsx, Styled, Container, Grid, Flex, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Gmo from '../assets/highlights/gmo.svg'
import Vegan from '../assets/highlights/vegan.svg'
import Glyphosate from '../assets/highlights/glyphosate.svg'
import Kosher from '../assets/highlights/kosher.svg'
import Gluten from '../assets/highlights/gluten.svg'
import Keto from '../assets/highlights/keto.svg'
import Foam from '../assets/highlights/foam.svg'
import Calories from '../assets/highlights/calories.svg'

const Highlight = ({ children, width, height, marginLeft }) => (
	<Flex sx={{
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		maxWidth: 140,
		textAlign: 'center',
		'svg': {
			width: width ? width : 111,
			height: height ? height : 111,
			marginLeft: marginLeft ? '14px' : 0,
			marginBottom: ['18px', '18px', '22px'],
		},
		'div': {
			fontWeight: 500
		}
	}}>
		{children}
	</Flex>
)

export default () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "highlights.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1586, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

	return (
		<Container as="section" sx={{ position: 'relative', mt: [6, 6, 14] }}>
      <Img
        fluid={image.childImageSharp.fluid}
        style={{
          position: 'absolute',
					top: '-11rem',
					left: 'calc(-100% - 3.5rem)',
					zIndex: -1
        }}
        sx={{
          display: ['none', 'none', 'block'],
          minWidth: '1586px'
        }}
      />

			<Box sx={{
				width: ['100%', '100%', 775],
				maxWidth: [420, 420, 'none'],
				mr: ['auto', 'auto', 0],
				ml: 'auto'
			}}>
				<Styled.h1 sx={{ textAlign: ['center', 'center', 'left'] }}>
					Product highlights
				</Styled.h1>

				<Grid columns={[2, 2, 4]} gap={0} sx={{
					justifyItems: 'center',
					gridRowGap: [6, 6, 8],
					mt: [6, 6, 9],
					ml: [0, 0, -6]
				}}>
					<Highlight width={137} height={108}>
						<Gmo />
						<Text>Non-GMO Certified</Text>
					</Highlight>

					<Highlight>
						<Vegan />
						<Text>Vegan<br />Certified</Text>
					</Highlight>

					<Highlight>
						<Glyphosate />
						<Text>Glyphosate Residue-Free</Text>
					</Highlight>

					<Highlight>
						<Kosher />
						<Text>Kosher<br />Certified</Text>
					</Highlight>

					<Highlight>
						<Gluten />
						<Text>Gluten-Free*</Text>
					</Highlight>

					<Highlight>
						<Keto />
						<Text>Keto Friendly</Text>
					</Highlight>

					<Highlight width={123} marginLeft>
						<Foam />
						<Text>Froths & Foams</Text>
					</Highlight>

					<Highlight>
						<Calories />
						<Text>Low Calories</Text>
					</Highlight>
				</Grid>
			</Box>
		</Container>
	)
}