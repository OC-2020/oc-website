/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import Layout from "../components/layout"
import Map from "../sections/map"
import Forms from "../sections/forms"
import CartOutline from "../assets/cart_outline.svg"
import TeaOutline from "../assets/tea_outline.svg"

export default () => {
  return (
    <Layout>
      <Container sx={{ mt: [8, 8, 0], pb: 8 }}>
        <Styled.h1 sx={{ fontSize: ["50px", "50px", "116px"] }}>
          Find Us
        </Styled.h1>

        <Styled.h3
          sx={{
            display: ["block", "block", "flex"],
            alignItems: "center",
            mt: [2, 2, 0],
            mb: [2, 4, 6],
            lineHeight: "36px",
            svg: {
              ml: 2,
              mr: [6, 6, 4],
            },
            br: {
              display: ["block", "block", "none"],
            },
          }}
        >
          In grocery stores
          <CartOutline />
          <br />
          & Restaurants
          <TeaOutline />
        </Styled.h3>

        <Map />

        <Forms />
      </Container>
    </Layout>
  )
}
