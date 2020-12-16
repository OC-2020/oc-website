/** @jsx jsx */
import { jsx, Styled, Container, Grid, Flex, Box, Card } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import Next from '../assets/next.svg'
import Prev from '../assets/prev.svg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default () => {
  const {
    carton,
    chrisImg,
    eriqImg,
    melindaImg,
    lauraImg,
    michelleImg
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
        chrisImg: file(relativePath: { eq: "chris.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 116, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        eriqImg: file(relativePath: { eq: "eriq.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 116, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        melindaImg: file(relativePath: { eq: "melinda.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 116, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        lauraImg: file(relativePath: { eq: "laura.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 116, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        michelleImg: file(relativePath: { eq: "michelle.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 116, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const testimonials = {
    chris: {
      image: chrisImg,
      name: 'Chris Mavinga',
      title: 'Professional Soccer Player',
      job: 'Toronto FC',
      text: '“<span>The best oat milk ever!!!</span> My daughter drinks it! My wife loves it in her coffee. So we will certainly love to taste your future products.”'
    },
    eriq: {
      image: eriqImg,
      name: 'Eriq Zavaleta',
      title: 'Professional Soccer Player',
      job: 'Toronto FC',
      text: '“<span>What I appreciate most is that this beverage is incredibly versatile.</span> I use it in my coffee before training and in my post-workout shake. It’s great to know that I have a zero sugar option for both! It will definitely be my go-to dairy free milk moving forward.”'
    },
    melinda: {
      image: melindaImg,
      name: 'Melinda Lam',
      title: 'Founder, Melinda Lam',
      job: 'Rehabilitation',
      text: '“It’s <span>creamy</span> and hands down the best oat milk I’ve had! I can <span>customize</span> my tea based on my mood because there is 0g of sugar. <span>Thank you for giving us the chance to make better choices for our body and planet!</span>”'
    },
    laura: {
      image: lauraImg,
      name: 'Laura Fortino',
      title: 'Canadian Olympian',
      job: 'National Hockey Team',
      text: '“As an elite athlete nutrition is such a vital component to my success both on and off the ice. <span>Adding Oat Canada milk to my daily routine has been incredible! Not only does it taste amazing it also has 0g of sugar!</span> I use the oat milk in my oatmeal for breakfast, in my recovery shakes after training sessions and in a few of my favourite baking recipes. I even got my family on board and they are loving Oat Canada as much as I am! I highly recommend you give this a try!”'
    },
    michelle: {
      image: michelleImg,
      name: 'Michelle Jobin',
      title: 'TV Host & Producer',
      job: "CTV's Your Morning Show",
      text: "“<span>I love that Oat Canada has a really nice, smooth taste and 0 sugar.</span> I find so many plant-based milk to be aggressively sweet, so I was really happy to find Oat Canada. It's the perfect thing with espresso and makes the <span>most delicious frothy</span> iced lattes!”"
    }
  }

  const { chris, eriq, melinda, laura, michelle } = testimonials

  const arrowStyles = {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    zIndex: 2,
    '&:before': {
      content: 'none'
    }
  }

  const PrevArrow = ({ onClick, className }) => (
    <button
      onClick={onClick}
      aria-label="previous"
      sx={arrowStyles}
      className={className}
    >
      <Prev />
    </button>
  )

  const NextArrow = ({ onClick, className }) => (
    <button
      onClick={onClick}
      aria-label="next"
      sx={arrowStyles}
      className={className}
    >
      <Next />
    </button>
  )

  const TestimonialSlider = props => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    }

    return (
      <Slider {...settings} sx={{
        '.slick-track': {
          display: 'flex',
          '.slick-slide': {
            display: 'flex',
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
        '.slick-prev': {
          left: '-15px'
        },
        '.slick-next': {
          right: '-15px'
        }
      }}>
        <div><TestimonialCard testimonial={eriq} /></div>
        <div><TestimonialCard testimonial={melinda} /></div>
        <div><TestimonialCard testimonial={chris} /></div>
        <div><TestimonialCard testimonial={laura} /></div>
        <div><TestimonialCard testimonial={michelle} /></div>
      </Slider>
    )
  }

  const TestimonialCard = ({ testimonial, ...props}) => {
    const { image, name, title, job, text } = testimonial

    return (
      <Card {...props} sx={{
        boxShadow: ['none', 'none', '0 20px 30px 0 rgba(79,79,79,.1)'],
        border: '1px solid #44474F',
        transition: 'transform .15s ease-in-out',
        ':hover': {
          transform: [null, null, 'rotate(0)']
        }
      }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Img fluid={image.childImageSharp.fluid} sx={{ width: 58, mr: 2 }} />

          <div>
            <div sx={{ fontWeight: 500 }}>{name}</div>
            <div sx={{ fontSize: '.7rem', letterSpacing: '.01em' }}>
              {title},<br />{job}
            </div>
          </div>
        </Flex>

        <p dangerouslySetInnerHTML={{__html: text}} sx={{
          mt: 5,
          mb: 0,
          fontStyle: 'italic',
          letterSpacing: '.005em',
          'span': {
            color: 'secondary',
            fontWeight: 500
          }
        }}/>
      </Card>
    )
  }

  return (
    <Container as="section" sx={{
      mt: [10, 10, 12]
    }}>
      <Styled.h3>WORD ON THE STREET</Styled.h3>
			<Styled.h2>IT'S ALL LOVE</Styled.h2>

      <Flex sx={{
        display: ['flex', 'flex', 'none'],
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{ width: '320px', mt: [0, 0, 4] }}>
          <TestimonialSlider />
        </Box>
      </Flex>

      <Flex sx={{
        display: ['none', 'none', 'flex'],
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        mt: 8
      }}>
        <Grid columns={1} gap={6}>
          <TestimonialCard testimonial={eriq} sx={{
            ml: '7.5rem',
            transform: 'rotate(-3deg)'
          }} />
          <TestimonialCard testimonial={chris} sx={{
            transform: 'rotate(4deg)'
          }} />
          <TestimonialCard testimonial={melinda} sx={{
            ml: '5.75rem',
            transform: 'rotate(-3deg)'
          }} />
        </Grid >

        <Box>
          <Img fluid={carton.childImageSharp.fluid} sx={{
            display: ['none', 'none', 'block'],
            width: '354px'
          }} />
        </Box>

        <Grid columns={1} gap={8}>
          <TestimonialCard testimonial={michelle} sx={{
            transform: 'rotate(-6deg)'
          }} />
          <TestimonialCard testimonial={laura} sx={{
            ml: '-2rem',
            transform: 'rotate(3deg)'
          }} />
        </Grid>
      </Flex>
    </Container>
  )
}