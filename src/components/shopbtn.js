/** @jsx jsx */
import React, { useState } from "react"
import { Link } from "gatsby"
import { jsx, Styled, Flex, Box, Text, Button } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import CloseBtn from "./closeBtn"
import Img from "gatsby-image"
import Modal from "react-modal"
import Arrow from "../assets/arrow-btn.svg"

Modal.setAppElement(`#___gatsby`)
Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,.5)"
Modal.defaultStyles.overlay.zIndex = 10

export default (props) => {
  const isDesktop = useMediaQuery({ minWidth: "1200px" })
  const [modalOpen, setModalOpen] = useState(false)
  const { single, multiple } = useStaticQuery(
    graphql`
      query {
        single: file(relativePath: { eq: "product-single.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 108, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        multiple: file(relativePath: { eq: "product-case.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 284, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  const desktopModal = {
    content: {
      width: "990px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #44474f",
      borderRadius: "16px",
      zIndex: 999,
    },
  }

  const mobileModal = {
    content: {
      maxWidth: "100%",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      borderColor: "#44474F",
      zIndex: 999,
      padding: "0px",
    },
  }

  const closeModal = () => setModalOpen(false)

  const convert = (conversion) => {
    typeof window !== "undefined" &&
      window.gtag("event", "conversion", { send_to: conversion })
  }

  return (
    <React.Fragment>
      <Button
        {...props}
        onClick={() => {
          setModalOpen(true)
          convert("AW-564308269/AKciCNaHte0BEK3Sio0C")
        }}
        variant="round"
      >
        Shop
        <br />
        In Stores
      </Button>

      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={isDesktop ? desktopModal : mobileModal}
      >
        <CloseBtn onClick={() => setModalOpen(false)} />

        <Styled.h1
          sx={{
            mt: [10, 10, 4],
            mb: [8, 8, 5],
            fontSize: ["38px !important", "38px !important", "54px !important"],
            textAlign: "center",
          }}
        >
          I WANT TO
        </Styled.h1>

        <Flex
          sx={{
            flexDirection: ["column-reverse", "column-reverse", "row"],
            alignItems: "center",
          }}
        >
          <Flex
            sx={{
              flexDirection: ["row", "row", "column"],
              flex: 1,
              width: ["330px", "330px", "auto"],
              mb: 5,
              pt: 4,
              textAlign: "center",
              borderTop: ["1px solid rgba(68,71,79,.25)", "none", "none"],
              borderRight: ["none", "none", "1px solid rgba(68,71,79,.25)"],
            }}
          >
            <Box
              sx={{
                width: ["200px", "180px", "100%"],
                mx: "auto",
              }}
            >
              <Img
                fluid={single.childImageSharp.fluid}
                sx={{
                  width: ["80px", "80px", "108px"],
                  mx: "auto",
                }}
              />
            </Box>

            <Flex
              sx={{
                flex: 1,
                flexDirection: "column",
                alignItems: ["flex-start", "flex-start", "center"],
              }}
            >
              <Styled.h3
                sx={{
                  textAlign: ["left", "left", "center"],
                  mt: 2,
                  br: {
                    display: ["block", "block", "none"],
                  },
                  span: {
                    position: "relative",
                    display: "inline-flex",
                    ml: 1,
                    pb: ["2px", "2px", "4px"],
                    lineHeight: ["28px", "28px", "32px"],
                    color: "white",
                    backgroundColor: "#d91a4e",
                    ":before": {
                      content: '""',
                      position: "absolute",
                      top: "0px",
                      left: "-8px",
                      width: "60px",
                      height: "100%",
                      backgroundColor: "#d91a4e",
                      transform: "skew(-10deg)",
                      zIndex: -1,
                    },
                    ":after": {
                      content: '""',
                      position: "absolute",
                      top: "0px",
                      right: "-10px",
                      width: "60px",
                      height: "100%",
                      backgroundColor: "#d91a4e",
                      transform: "skew(-10deg)",
                      zIndex: -1,
                    },
                  },
                }}
              >
                Shop By The
                <br /> <span>Carton</span>
              </Styled.h3>

              <Text sx={{ mt: 2, mb: 4 }}>1 x 946 mL</Text>

              <Button
                as="a"
                href="https://well.ca/products/oat-canada-barista-approved-oat-milk_194746.html"
                target="_blank"
                rel="noopnener noreferrer"
                onClick={() => convert("AW-564308269/7NBhCLOOpO0BEK3Sio0C")}
              >
                well.ca <Arrow sx={{ marginLeft: 1 }} />
              </Button>
            </Flex>
          </Flex>

          <Flex
            sx={{
              flexDirection: ["row", "row", "column"],
              flex: 1,
              mb: 5,
              width: ["330px", "330px", "auto"],
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: ["200px", "200px", "100%"],
                mx: "auto",
              }}
            >
              <Img
                fluid={multiple.childImageSharp.fluid}
                sx={{
                  width: ["160px", "160px", "284px"],
                  mx: "auto",
                }}
              />
            </Box>

            <Flex
              sx={{
                flex: 1,
                flexDirection: "column",
                alignItems: ["flex-start", "flex-start", "center"],
              }}
            >
              <Styled.h3
                sx={{
                  textAlign: ["left", "left", "center"],
                  br: {
                    display: ["block", "block", "none"],
                  },
                  span: {
                    position: "relative",
                    display: "inline-flex",
                    ml: 1,
                    pb: ["2px", "2px", "4px"],
                    lineHeight: ["28px", "28px", "32px"],
                    color: "white",
                    backgroundColor: "#d91a4e",
                    ":before": {
                      content: '""',
                      position: "absolute",
                      top: "0px",
                      left: "-8px",
                      width: "60px",
                      height: "100%",
                      backgroundColor: "#d91a4e",
                      transform: "skew(-10deg)",
                      zIndex: -1,
                    },
                    ":after": {
                      content: '""',
                      position: "absolute",
                      top: "0px",
                      right: "-10px",
                      width: "60px",
                      height: "100%",
                      backgroundColor: "#d91a4e",
                      transform: "skew(-10deg)",
                      zIndex: -1,
                    },
                  },
                }}
              >
                Shop By The
                <br /> <span>Case</span>
              </Styled.h3>

              <Text sx={{ mt: 2, mb: 4 }}>6 x 946 mL</Text>

              <Button
                as="a"
                href="https://www.costco.ca/oat-canada-barista-sugar-free-oat-milk%2c-6-x-946-ml.product.100656800.html"
                target="_blank"
                rel="noopnener noreferrer"
                onClick={() => convert("AW-564308269/VhVCCJyJte0BEK3Sio0C")}
              >
                costco.ca <Arrow sx={{ marginLeft: 1 }} />
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Text
          sx={{
            my: 2,
            textAlign: "center",
          }}
        >
          I want to shop <Link to="/stores">In-Stores</Link> instead.
        </Text>
      </Modal>
    </React.Fragment>
  )
}
