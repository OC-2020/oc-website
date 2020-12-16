/** @jsx jsx */
import { jsx, Container, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Fade } from 'react-awesome-reveal'

export default () => {
  const {
		carton
  } = useStaticQuery(
    graphql`
      query {
        carton: file(relativePath: { eq: "carton2.png" }) {
          childImageSharp {
            fluid(maxWidth: 708, quality: 95) {
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
				mt: ['26rem', '26rem', '20rem'],
				pt: [5, 5, 0],
				height: ['360px', '360px', '400px'],
				backgroundColor: '#44474f',
				borderTop: '1px solid #44474f',
				borderBottom: '1px solid #44474f',
				'.slanted-top': {
					position: 'absolute',
					top: 0,
					width: '100%',
					height: '10vw',
					transform: 'translateY(-100%)'
				},
				'.slanted-bottom': {
					position: 'absolute',
					bottom: 0,
					width: '100%',
					height: '10vw',
					transform: 'scale(-1) translateY(-100%)'
				}
			}}>

			<svg className="slanted-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
				<polygon fill="#44474f" points="0,100 100,50 100,100"/>
			</svg>

			<svg className="slanted-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
				<polygon fill="#44474f" points="0,100 100,50 100,100"/>
			</svg>

			<Fade delay={500} triggerOnce={true}>
				<Container sx={{ position: 'relative' }}>
					<Img
						fluid={carton.childImageSharp.fluid}
						style={{
							position: 'absolute'
						}}
						sx={{
							display: ['none', 'none', 'block'],
							top: '-9.35rem',
							left: '15rem',
							width: ['240px', '240px', '354px'],
						}}
					/>

					<Box sx={{
						position: 'absolute',
						left: '50%',
						width: ['240px', '240px', 'auto'],
						transform: ['translateX(-50%)', 'translateX(-50%)', 'translateX(10%)'],
						fontSize:  ['24px', '24px', '32px'],
						fontFamily: 'barlow',
						color: 'white',
						'b': {
							fontWeight: 600
						}
					}}>
						<Text sx={{
							lineHeight: ['31px', '31px', '42px'],
							fontWeight: 600,
							textTransform: 'uppercase',
						}}>
							<i>“No added sugar”<br />“Unsweetened”</i>
						</Text>

						<Text sx={{
							display: 'inline-block',
							position: 'relative',
							mt: 1,
							pb: ['2px', '2px', '6px'],
							lineHeight: '30px',
							backgroundColor: '#d91a4e',
							':before': {
								content: '""',
								position: 'absolute',
								top: '0px',
								left: '-8px',
								width: '60px',
								height: '100%',
								backgroundColor: '#d91a4e',
								transform: 'skew(-10deg)',
								zIndex: -1
							},
							':after': {
								content: '""',
								position: 'absolute',
								top: '0px',
								right: '-10px',
								width: '60px',
								height: '100%',
								backgroundColor: '#d91a4e',
								transform: 'skew(-10deg)',
								zIndex: -1
							}
						}}>
							Do these labels <i><b>really</b></i> mean
						</Text>

						<br />

						<Text sx={{
							display: 'inline-block',
							position: 'relative',
							mt: 1,
							pb: ['2px', '2px', '6px'],
							lineHeight: '30px',
							backgroundColor: '#d91a4e',
							':before': {
								content: '""',
								position: 'absolute',
								top: '0px',
								left: '-8px',
								width: '60px',
								height: '100%',
								backgroundColor: '#d91a4e',
								transform: 'skew(-10deg)',
								zIndex: -1
							},
							':after': {
								content: '""',
								position: 'absolute',
								top: '0px',
								right: '-10px',
								width: '60px',
								height: '100%',
								backgroundColor: '#d91a4e',
								transform: 'skew(-10deg)',
								zIndex: -1
							}
						}}>
							<i><b>no sugar?</b></i>
						</Text>

						<Text sx={{
							mt: 4,
							mb: 0,
							lineHeight: ['28px', '28px', '38px'],
						}}>
							To avoid confusion, <br />
							we decided <br />
							not to sugar coat it. <br />
							That’s why we went with <br />
							0g of sugar instead.

							<svg sx={{ display: 'block', mt: '5px', ml: '-6px' }} width="136" height="11"><path d="M55.018 1.626c-8.48.147-16.96.472-25.441.365-8.184-.103-16.372-.745-24.558-.914-1.09-.022-2.339.986-3.224 2.148C.565 4.84.428 8.266 1.331 10.382c.225.529.95.65 1.437.633C16.54 10.53 30.306 9.789 44.08 9.528c29.227-.552 58.359-3.74 87.588-4.148.833-.011 1.773.374 2.47-.145.839-.623.566-2.925 1.242-4.062.122-.205-1.321-1.865-3.818-.882-25.163.44-50.853.89-76.544 1.335z" fill="#D9194F" fillRule="evenodd"/></svg>
						</Text>
					</Box>
				</Container>
			</Fade>
		</section>
	)
}