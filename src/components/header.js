/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui'
import { Link } from 'gatsby'
import ArrowBtn from './arrowbtn'
import Logo from '../assets/logo.svg'
import LogoMobile from '../assets/logo-small.svg'
import { Fade } from 'react-awesome-reveal'

export default () => {

  return (
    <Fade delay={500} triggerOnce>
      <header sx={{ height: ['auto', 'auto', '200px'] }}>
        <Container sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: ['center', 'center', 'flex-end'],
          pt: ['20px', '20px', '40px']
        }}>

        <Link to="/">
          <Logo style={{ width: '276px' }} sx={{
            display: ['none', 'none', 'block']
          }} />

          <LogoMobile style={{ width: '62px' }} sx={{
            display: ['block', 'block', 'none']
          }} />
        </Link>

          <Flex sx={{
            flexDirection: ['column', 'column', 'row'],
            alignItems: 'flex-end',
            pb: [0, 0, '10px']
          }}>
            <ArrowBtn
              link="https://www.costco.ca/oat-canada-barista-sugar-free-oat-milk%2c-6-x-946-ml.product.100656800.html"
              conversion="AW-564308269/VhVCCJyJte0BEK3Sio0C"
            >
              shop costco.ca
            </ArrowBtn>

            <ArrowBtn
              link="https://well.ca/products/oat-canada-barista-approved-oat-milk_194746.html"
              conversion="AW-564308269/7NBhCLOOpO0BEK3Sio0C"
            >
              shop well.ca
            </ArrowBtn>
          </Flex>
        </Container>
      </header>
    </Fade>
  )
}
