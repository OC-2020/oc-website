/** @jsx jsx */
import { jsx, Styled, Grid, Container, Box, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'

export default () => {
  const {
		coco,
		fortinos,
		frills,
		loblaws,
		luminate,
		natures,
		rise,
		smoothies,
		superstore,
		sweet,
		well,
		zehrs
  } = useStaticQuery(
    graphql`
      query {
        coco: file(relativePath: { eq: "partners/coco.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 482, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        fortinos: file(relativePath: { eq: "partners/fortinos.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 404, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        frills: file(relativePath: { eq: "partners/frills.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 440, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        loblaws: file(relativePath: { eq: "partners/loblaws.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 420, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        luminate: file(relativePath: { eq: "partners/luminate.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 514, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        natures: file(relativePath: { eq: "partners/natures.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 292, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        rise: file(relativePath: { eq: "partners/rise.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 286, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        smoothies: file(relativePath: { eq: "partners/smoothies2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 308, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        superstore: file(relativePath: { eq: "partners/superstore.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 476, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        sweet: file(relativePath: { eq: "partners/sweet.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 510, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        well: file(relativePath: { eq: "partners/well.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 388, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        zehrs: file(relativePath: { eq: "partners/zehrs.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 356, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const PartnerSlider = props => {
    const settings = {
      dots: true
    }

    return (
      <Slider {...settings} sx={{
        '.slick-track': {
          display: 'flex',
          alignItems: 'center',
        },
        '.slick-dots': {
          bottom: '20px'
        },
        '.slick-dots li': {
          margin: '0'
        },
        '.slick-dots li button:before': {
          fontSize: '10px'
        },
        '.slick-dots li.slick-active button:before': {
          color: 'secondary'
        }
      }}>
        <Box as="a" href="https://well.ca/products/oat-canada-barista-approved-oat-milk_194746.html" sx={{ padding: '2rem' }}>
          <Img
            fluid={well.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://risemarket.ca/products/oat-canada-zero-sugar-oat-milk-946ml?_pos=1&_sid=f3b1f710b&_ss=r" sx={{ padding: '3rem' }}>
          <Img
            fluid={rise.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://luminateco.ca/product/oat-canada-keto-oat-milk-barista-style-946ml/" sx={{ padding: '2rem' }}>
          <Img
            fluid={luminate.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://smoothiesgo.com/products/oat-canada-oat-milk-0g-sugar" sx={{ padding: '3rem' }}>
          <Img
            fluid={smoothies.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://www.loblaws.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
          <Img
            fluid={loblaws.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://www.fortinos.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
          <Img
            fluid={fortinos.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://www.realcanadiansuperstore.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
          <Img
            fluid={superstore.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://www.zehrs.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
          <Img
            fluid={zehrs.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://www.nofrills.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
          <Img
            fluid={frills.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://shop.thesweetpotato.ca/details/oat-canada-oat-drink" sx={{ padding: '2rem' }}>
          <Img
            fluid={sweet.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://shopcoco.ca/products/oat-canada-oat-milk" sx={{ padding: '2rem' }}>
          <Img
            fluid={coco.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
        <Box as="a" href="https://shop.naturesemporium.com/oat-drink-zero-sugar-946-ml-0002798725923" sx={{ padding: '3rem' }}>
          <Img
            fluid={natures.childImageSharp.fluid}
            imgStyle={{ objectFit: 'fill' }}
            loading="eager"
          />
        </Box>
      </Slider>
    )
  }

	return (
		<section sx={{
			position: 'relative',
			mt: [6, 6, 14]
		}}>
			<Container>
        <Styled.h3 sx={{ mb: 2 }}>Or Shop At Our</Styled.h3>
        <Styled.h2 sx={{ mb: ['-2rem', '-2rem', 1] }}>Online Retail Partners</Styled.h2>

				<Flex sx={{
					display: ['flex', 'flex', 'none'],
					flexDirection: 'column',
					alignItems: 'center',
				}}>
					<Box sx={{ width: '320px', mt: [0, 0, 4] }}>
						<PartnerSlider />
					</Box>
				</Flex>

				<Grid sx={{
					display: ['none', 'none', 'grid'],
					gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: 0,
					alignItems: 'center',
				}}>
          <Box as="a" href="https://well.ca/products/oat-canada-barista-approved-oat-milk_194746.html" sx={{ padding: '2rem' }}>
            <Img fluid={well.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://risemarket.ca/products/oat-canada-zero-sugar-oat-milk-946ml?_pos=1&_sid=f3b1f710b&_ss=r" sx={{ padding: '3rem' }}>
            <Img fluid={rise.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://luminateco.ca/product/oat-canada-keto-oat-milk-barista-style-946ml/" sx={{ padding: '2rem' }}>
            <Img fluid={luminate.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://smoothiesgo.com/products/oat-canada-oat-milk-0g-sugar" sx={{ padding: '3rem' }}>
            <Img fluid={smoothies.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://www.loblaws.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
            <Img fluid={loblaws.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://www.fortinos.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
            <Img fluid={fortinos.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://www.realcanadiansuperstore.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
            <Img fluid={superstore.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://www.zehrs.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
            <Img fluid={zehrs.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://www.nofrills.ca/zero-sugar-oat-drink/p/21382400_EA" sx={{ padding: '2rem' }}>
            <Img fluid={frills.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://shop.thesweetpotato.ca/details/oat-canada-oat-drink" sx={{ padding: '2rem' }}>
            <Img fluid={sweet.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://shopcoco.ca/products/oat-canada-oat-milk" sx={{ padding: '2rem' }}>
            <Img fluid={coco.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
          <Box as="a" href="https://shop.naturesemporium.com/oat-drink-zero-sugar-946-ml-0002798725923" sx={{ padding: '3rem' }}>
            <Img fluid={natures.childImageSharp.fluid} imgStyle={{ objectFit: 'fill' }} />
          </Box>
				</Grid>
			</Container>
		</section>
	)
}

