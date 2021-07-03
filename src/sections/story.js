/** @jsx jsx */
import { jsx, Styled, Container, Box, Button } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Arrow from '../assets/arrow-btn.svg'

export default () => {
  const {
		bowlcup,
		bowlcup_mobile,
		glass,
		glass_mobile
  } = useStaticQuery(
    graphql`
      query {
        bowlcup: file(relativePath: { eq: "bowlcup.jpg" }) {
          childImageSharp {
            fixed(width: 804, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        bowlcup_mobile: file(relativePath: { eq: "bowlcup_mobile.jpg" }) {
          childImageSharp {
            fixed(width: 460, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        glass: file(relativePath: { eq: "glass.jpg" }) {
          childImageSharp {
            fixed(width: 892, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        glass_mobile: file(relativePath: { eq: "glass_mobile.png" }) {
          childImageSharp {
            fixed(width: 402, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
		<section sx={{
			mt: ['14rem', '14rem', '25rem'],
			mb: ['34rem', '34rem', '0rem'],
		}}>
			<Container sx={{ position: 'relative', textAlign: 'center' }}>
				<Styled.h5 sx={{
					'.label': {
						position: 'relative',
						display: 'inline-flex',
						color: 'white',
						backgroundColor: 'secondary',
						fontStyle: 'italic',
						zIndex: 2,
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
							right: '-14px',
							width: '60px',
							height: '100%',
							backgroundColor: 'secondary',
							transform: 'skew(-10deg)',
							zIndex: -1
						}
					},
					'.number': {
						fontFamily: 'Averta',
						fontSize: ["16px", "16px", "28px"],
						fontWeight: 800
					}
				}}>
					We got tired of misleading labels like <br /><span className="label">“unsweetened” & “no sugar added”</span> <br />on oat m*lk cartons with sugar contents <br />as high as <span className="number">10</span>g – <span className="number">17</span>g of sugar per serving!
				</Styled.h5>

				<Styled.h5 sx={{
					mt: [4, 4, 6]
				}}>
					So, we decided not to sugar coat ours.
				</Styled.h5>

				<Box sx={{
					display: ['none', 'none', 'block'],
					position: 'absolute',
					top: '-14.25rem',
					left: '-26.5rem',
					zIndex: -1
				}}>
					<Img fixed={bowlcup.childImageSharp.fixed} />
				</Box>

				<Box sx={{
					display: ['block', 'block', 'none'],
					position: 'absolute',
					bottom: '-22.5rem',
					left: '-10.75rem',
					zIndex: -1
				}}>
					<Img fixed={bowlcup_mobile.childImageSharp.fixed} />
				</Box>

				<Box sx={{
					display: ['none', 'none', 'block'],
					position: 'absolute',
					top: '-16.75rem',
					right: '-33.75rem',
					zIndex: -1
				}}>
					<Img fixed={glass.childImageSharp.fixed} />
				</Box>

				<Box sx={{
					display: ['block', 'block', 'none'],
					position: 'absolute',
					top: '-18.5rem',
					left: '5.2rem',
				}}>
					<Img fixed={glass_mobile.childImageSharp.fixed} />
				</Box>

				<Button sx={{ mt: 6 }}>
					Ready Our Story <Arrow sx={{ marginLeft: 4 }} />
				</Button>
			</Container>
		</section>
	)
}