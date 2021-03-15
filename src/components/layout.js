/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Global } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../fonts/averta.css"
import "../fonts/barlow.css"
import "../fonts/eastman.css"
import "normalize.css"

export default ({ children, hasHero }) => {
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
          html: {
            scrollBehavior: "smooth",
          },
          body: {
            margin: 0,
            overflowX: "hidden",
          },
          a: {
            color: "#0000ff",
          },
          "[id]": {
            scrollMarginTop: "4ex",
          },
        })}
      />
      <Header siteTitle={title} />

      <main role="main">{children}</main>

      <Footer />
    </React.Fragment>
  )
}
