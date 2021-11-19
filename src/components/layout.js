/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Global } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import NowAt from "../components/nowAt"
import "../fonts/averta.css"
import "../fonts/barlow.css"
import "../fonts/eastman.css"
import "normalize.css"

export default ({ children, home }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Global
        styles={(theme) => ({
          "*": {
            boxSizing: `inherit`,
          },
          "::selection": {
            backgroundColor: "#ffb3d2",
          },
          body: {
            margin: 0,
            overflowX: "hidden",
          },
          ".pac-container": {
            visibility: "hidden",
            pointerEvents: "none",
          },
          a: {
            color: "#0000ff",
          },
          "[id]": {
            scrollMarginTop: "4ex",
          },
        })}
      />

      {home && <NowAt />}

      <Header siteTitle={title} />

      <main role="main" sx={{ overflow: ["hidden", "hidden", "visible"] }}>
        {children}
      </main>

      <Footer />
    </React.Fragment>
  )
}
