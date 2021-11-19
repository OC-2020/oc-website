/** @jsx jsx */
import { useState } from "react"
import { jsx, Styled, Container, Flex, Box } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { keyframes } from "@emotion/react"

export default () => {
  const {
    blogto_color,
    vegnews_color,
    dragons_color,
    humber_color,
    toronto_color,
    blogto_bw,
    vegnews_bw,
    dragons_bw,
    humber_bw,
    toronto_bw,
  } = useStaticQuery(
    graphql`
      query {
        blogto_color: file(relativePath: { eq: "logos/blogto_color.png" }) {
          childImageSharp {
            fixed(width: 134, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        vegnews_color: file(relativePath: { eq: "logos/vegnews_color.png" }) {
          childImageSharp {
            fixed(width: 166, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        dragons_color: file(relativePath: { eq: "logos/dragons_color.png" }) {
          childImageSharp {
            fixed(width: 211, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        humber_color: file(relativePath: { eq: "logos/humber_color2.png" }) {
          childImageSharp {
            fixed(width: 194, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        toronto_color: file(relativePath: { eq: "logos/toronto_color.png" }) {
          childImageSharp {
            fixed(width: 250, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        blogto_bw: file(relativePath: { eq: "logos/blogto_bw.png" }) {
          childImageSharp {
            fixed(width: 134, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        vegnews_bw: file(relativePath: { eq: "logos/vegnews_bw.png" }) {
          childImageSharp {
            fixed(width: 166, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        dragons_bw: file(relativePath: { eq: "logos/dragons_bw.png" }) {
          childImageSharp {
            fixed(width: 211, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        humber_bw: file(relativePath: { eq: "logos/humber_bw2.png" }) {
          childImageSharp {
            fixed(width: 194, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        toronto_bw: file(relativePath: { eq: "logos/toronto_bw.png" }) {
          childImageSharp {
            fixed(width: 250, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const [dragonsColor, setDragonsColor] = useState(false)
  const [blogtoColor, setBlogtoColor] = useState(false)
  const [cocoColor, setCocoColor] = useState(false)
  const [humberColor, setHumberColor] = useState(false)
  const [torontoColor, setTorontoColor] = useState(false)

  const slide = keyframes({
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(calc(-250px * 10))" },
  })

  return (
    <section
      sx={{
        mt: ["26rem", "26rem", "7rem"],
      }}
    >
      <Container>
        <Styled.h3 sx={{ textAlign: "center" }}>As Seen On</Styled.h3>

        <div
          sx={{
            display: ["block", "block", "none"],
            mt: 4,
            overflow: "hidden",
          }}
        >
          <Flex
            sx={{
              alignItems: "center",
              width: "calc(250px * 20)",
              height: "100%",
              animationName: slide,
              animationTimingFunction: "linear",
              animationDuration: "32s",
              animationIterationCount: "infinite",
              textAlign: "center",
            }}
          >
            <Box
              as="a"
              href="https://www.cbc.ca/dragonsden/m_pitches/oat-canada"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={dragons_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.blogto.com/eat_drink/2020/06/toronto-zero-sugar-oat-milk-costco/"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-8px)",
                },
              }}
            >
              <Img fixed={blogto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.thestar.com/local-vaughan/life/food-wine/2021/02/25/neighbourhood-eats-vaughan-markham-business-programs-help-couple-launch-oat-milk.html"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-14px)",
                },
              }}
            >
              <Img fixed={toronto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://humber.ca/today/news/humber-grad-s-oat-milk-charms-dragons"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={humber_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://vegnews.com/2021/8/sugar-free-oat-milk"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={vegnews_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.cbc.ca/dragonsden/m_pitches/oat-canada"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={dragons_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.blogto.com/eat_drink/2020/06/toronto-zero-sugar-oat-milk-costco/"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-8px)",
                },
              }}
            >
              <Img fixed={blogto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.thestar.com/local-vaughan/life/food-wine/2021/02/25/neighbourhood-eats-vaughan-markham-business-programs-help-couple-launch-oat-milk.html"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-14px)",
                },
              }}
            >
              <Img fixed={toronto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://humber.ca/today/news/humber-grad-s-oat-milk-charms-dragons"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={humber_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://vegnews.com/2021/8/sugar-free-oat-milk"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={vegnews_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.cbc.ca/dragonsden/m_pitches/oat-canada"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={dragons_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.blogto.com/eat_drink/2020/06/toronto-zero-sugar-oat-milk-costco/"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-8px)",
                },
              }}
            >
              <Img fixed={blogto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.thestar.com/local-vaughan/life/food-wine/2021/02/25/neighbourhood-eats-vaughan-markham-business-programs-help-couple-launch-oat-milk.html"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-14px)",
                },
              }}
            >
              <Img fixed={toronto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://humber.ca/today/news/humber-grad-s-oat-milk-charms-dragons"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={humber_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://vegnews.com/2021/8/sugar-free-oat-milk"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={vegnews_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.cbc.ca/dragonsden/m_pitches/oat-canada"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={dragons_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.blogto.com/eat_drink/2020/06/toronto-zero-sugar-oat-milk-costco/"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-8px)",
                },
              }}
            >
              <Img fixed={blogto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://www.thestar.com/local-vaughan/life/food-wine/2021/02/25/neighbourhood-eats-vaughan-markham-business-programs-help-couple-launch-oat-milk.html"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9) translateX(-14px)",
                },
              }}
            >
              <Img fixed={toronto_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://humber.ca/today/news/humber-grad-s-oat-milk-charms-dragons"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={humber_color.childImageSharp.fixed} />
            </Box>
            <Box
              as="a"
              href="https://vegnews.com/2021/8/sugar-free-oat-milk"
              sx={{
                width: "250px",
                img: {
                  transform: "scale(.9)",
                },
              }}
            >
              <Img fixed={vegnews_color.childImageSharp.fixed} />
            </Box>
          </Flex>
        </div>

        <Flex
          sx={{
            display: ["none", "none", "flex"],
            alignItems: "center",
            justifyContent: "space-between",
            mt: -1,
          }}
        >
          <Box
            as="a"
            href="https://www.cbc.ca/dragonsden/m_pitches/oat-canada"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setDragonsColor(true)}
            onMouseLeave={() => setDragonsColor(false)}
            sx={{ pb: "10px" }}
          >
            <Img
              fixed={dragons_bw.childImageSharp.fixed}
              style={{
                position: "absolute",
              }}
            />
            <Img
              fixed={dragons_color.childImageSharp.fixed}
              style={{
                transition: "opacity .2s ease-in-out",
                opacity: dragonsColor ? 1 : 0,
              }}
            />
          </Box>
          <Box
            as="a"
            href="https://www.blogto.com/eat_drink/2020/06/toronto-zero-sugar-oat-milk-costco/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setBlogtoColor(true)}
            onMouseLeave={() => setBlogtoColor(false)}
          >
            <Img
              fixed={blogto_bw.childImageSharp.fixed}
              style={{
                position: "absolute",
              }}
            />
            <Img
              fixed={blogto_color.childImageSharp.fixed}
              style={{
                transition: "opacity .2s ease-in-out",
                opacity: blogtoColor ? 1 : 0,
              }}
            />
          </Box>
          <Box
            as="a"
            href="https://www.thestar.com/local-vaughan/life/food-wine/2021/02/25/neighbourhood-eats-vaughan-markham-business-programs-help-couple-launch-oat-milk.html"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTorontoColor(true)}
            onMouseLeave={() => setTorontoColor(false)}
          >
            <Img
              fixed={toronto_bw.childImageSharp.fixed}
              style={{
                position: "absolute",
              }}
            />
            <Img
              fixed={toronto_color.childImageSharp.fixed}
              style={{
                transition: "opacity .2s ease-in-out",
                opacity: torontoColor ? 1 : 0,
              }}
            />
          </Box>
          <Box
            as="a"
            href="https://humber.ca/today/news/humber-grad-s-oat-milk-charms-dragons"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHumberColor(true)}
            onMouseLeave={() => setHumberColor(false)}
          >
            <Img
              fixed={humber_bw.childImageSharp.fixed}
              style={{
                position: "absolute",
              }}
            />
            <Img
              fixed={humber_color.childImageSharp.fixed}
              style={{
                transition: "opacity .2s ease-in-out",
                opacity: humberColor ? 1 : 0,
              }}
            />
          </Box>
          <Box
            as="a"
            href="https://vegnews.com/2021/8/sugar-free-oat-milk"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCocoColor(true)}
            onMouseLeave={() => setCocoColor(false)}
          >
            <Img
              fixed={vegnews_bw.childImageSharp.fixed}
              style={{
                position: "absolute",
              }}
            />
            <Img
              fixed={vegnews_color.childImageSharp.fixed}
              style={{
                transition: "opacity .2s ease-in-out",
                opacity: cocoColor ? 1 : 0,
              }}
            />
          </Box>
        </Flex>
      </Container>
    </section>
  )
}
