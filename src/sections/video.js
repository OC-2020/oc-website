/** @jsx jsx */
import { jsx, Styled, Container, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Play from '../assets/play.svg'

export default () => {
  const { videoImage } = useStaticQuery(
    graphql`
      query {
        videoImage: file(relativePath: { eq: "videobg2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1138, quality: 95) {
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
			mt: 10
		}}>
			<Styled.h2 sx={{
				display: ['block', 'block', 'none'],
				mb: 4
			}}>
				Watch our pitch on CBC’s Dragons’ Den
			</Styled.h2>

			<a
				href="https://www.cbc.ca/dragonsden/m_pitches/oat-canada"
				target="_blank"
				rel="noopener noreferrer"
				sx={{
					display: 'block',
					width: '100%',
					height: '100%',
					position: 'relative'
				}}
			>
				<Img fluid={videoImage.childImageSharp.fluid} />

				<Box sx={{
					position: 'absolute',
					top: ['50%', '50%', '50%'],
					left: ['50%', '50%', '10%'],
					transform: ['translate(-50%, -50%)', 'translate(-50%, -50%)', 'none'],
					color: 'white',
				}}>
					<Styled.h1 sx={{
						display: ['none', 'none', 'block'],
						mb: [2, 6, 6],
						fontSize: ['22px', '22px', '54px !important'],
						lineHeight: '49px !important'
					}}>
						Watch our pitch <br />on the Dragon's Den!
					</Styled.h1>

					<Play sx={{ transform: ['scale(.75)', 'scale(1)', 'scale(1)'] }} />
				</Box>
			</a>
		</Container>
	)
}
