/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box, Button } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Arrow from "../assets/arrow-btn.svg"

export default () => {
  const { pic, pic_mobile } = useStaticQuery(
    graphql`
      query {
        pic: file(relativePath: { eq: "PIC-Roquette-OatCanada-Graphic-Home.png" }) {
          childImageSharp {
            fixed(width: 812, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        pic_mobile: file(relativePath: { eq: "PIC-Roquette-OatCanada-Graphic-Home.png" }) {
          childImageSharp {
            fixed(width: 340, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <section
      sx={{
        position: "relative",
        mt: ["12rem", "12rem", "14rem"],
        pt: [5, 5, 0],
        height: ["420px", "420px", "460px"],
        backgroundColor: "#231F20",
        ".slanted-top": {
          position: "absolute",
          top: "2px",
          width: "100%",
          height: "10vw",
          transform: "translateY(-100%)",
        },
        ".slanted-bottom": {
          position: "absolute",
          bottom: "2px",
          width: "100%",
          height: "10vw",
          transform: "scale(-1) translateY(-100%)",
        },
      }}
    >
      <svg
        className="slanted-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{ zIndex: -1 }}
      >
        <polygon fill="#231F20" points="0,100 100,50 100,100" />
      </svg>

      <svg
        className="slanted-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{ zIndex: -1 }}
      >
        <polygon fill="#231F20" points="0,100 100,50 100,100" />
      </svg>

      <Container sx={{ position: "relative", mt: ["-9.25rem", "-9.25rem", 0] }}>
        <Flex
          sx={{
            flexDirection: ["column", "column", "row"],
            alignItems: ["center", "center", "flex-end"],
            height: "430px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: ["none", "none", "block"],
              zIndex: 1,
            }}
          >
            <Img
              fixed={pic.childImageSharp.fixed}
              imgStyle={{ position: "absolute" }}
              sx={{ top: "-7.95rem" }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: ["block", "block", "none"],
              pointerEvents: "none",
            }}
          >
            <Img
              fixed={pic_mobile.childImageSharp.fixed}
              imgStyle={{ position: "absolute" }}
              sx={{ top: "-0.45rem" }}
            />
          </Box>

          <Box
            sx={{
              mt: [-6, -6, 0],
              mr: [null, null, -7],
              textAlign: ["center", "center", "left"],
              zIndex: 2,
            }}
          >
            <Styled.h2
              sx={{
                color: "white",
                fontSize: ["27px", "27px", "81px"],
                lineHeight: [null, null, "86px"],
              }}
            >
              Expanding the
              <br />
              utility of oats
            </Styled.h2>
          </Box>

          <Box
            sx={{
              width: "280px",
              mt: [4, 4, 0],
              mb: "110px",
              textAlign: ["center", "center", "left"],
              zIndex: 2,
            }}
          >
            <Styled.h3
              sx={{ fontSize: ["22px", "22px", "22px"], color: "white" }}
            >
              <i>
                “Creating an oat milk that is actually nutritious meant collaborating with industry leaders and inventing entirely new technology.”
              </i>
            </Styled.h3>
            <Link to="/oat-canada-roquette-increase-domestic-oat-ingredient-innovation-amid-surging-demand-for-plant-based-dairy-alternative-products">
              <Button sx={{ mt: 6 }}>
                Press Release <Arrow sx={{ marginLeft: 4 }} />
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </section>
  )
}
