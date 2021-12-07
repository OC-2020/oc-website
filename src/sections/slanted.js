/** @jsx jsx */
import { jsx, Styled, Container, Flex, Box, Button } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Arrow from "../assets/arrow-btn.svg"

export default () => {
  const { loblaws, loblaws_mobile } = useStaticQuery(
    graphql`
      query {
        loblaws: file(relativePath: { eq: "loblaws2.png" }) {
          childImageSharp {
            fixed(width: 719, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        loblaws_mobile: file(relativePath: { eq: "loblaws2.png" }) {
          childImageSharp {
            fixed(width: 375, quality: 100) {
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
        mt: ["20rem", "20rem", "16rem"],
        pt: [5, 5, 0],
        height: "360px",
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Flex
          sx={{
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
            height: "320px",
          }}
        >
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: ["none", "none", "block"],
            }}
          >
            <Img
              fixed={loblaws.childImageSharp.fixed}
              imgStyle={{ position: "absolute" }}
              sx={{
                top: "3.5rem",
                left: "-8rem",
              }}
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
              fixed={loblaws_mobile.childImageSharp.fixed}
              imgStyle={{ position: "absolute" }}
              sx={{
                top: "-19.5rem",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              width: "100%",
              mt: ["-20rem", "-20rem", 0],
              pl: [0, 0, 6],
              textAlign: ["center", "center", "left"],
            }}
          >
            <Styled.h3 sx={{ mb: ["4px", "4px", "10px"] }}>
              By Popular Demand
            </Styled.h3>
            <Styled.h2
              sx={{
                br: {
                  display: ["block", "block", "none"],
                },
                span: {
                  position: "relative",
                  display: "inline-flex",
                  pt: ["8px", "8px", "4px"],
                  pb: ["6px", "6px", 0],
                  mb: [0, 0, "8px"],
                  lineHeight: ["24px", "24px", "52px"],
                  color: "white",
                  backgroundColor: "secondary",
                  zIndex: 2,
                  ":before": {
                    content: '""',
                    position: "absolute",
                    top: "0px",
                    left: "-12px",
                    width: "60px",
                    height: "100%",
                    backgroundColor: "secondary",
                    transform: "skew(-10deg)",
                    zIndex: -1,
                  },
                  ":after": {
                    content: '""',
                    position: "absolute",
                    top: "0px",
                    right: "-14px",
                    width: "60px",
                    height: "100%",
                    backgroundColor: "secondary",
                    transform: "skew(-10deg)",
                    zIndex: -1,
                  },
                },
              }}
            >
              Now At <br />
              <span>Loblaws</span> <br />
              Canada Wide
            </Styled.h2>
            <Link to="/stores">
              <Button sx={{ mt: 6 }}>
                Find In Stores <Arrow sx={{ marginLeft: 4 }} />
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </section>
  )
}
