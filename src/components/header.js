/** @jsx jsx */
import { useState } from "react"
import { jsx, Container, Flex, Button } from "theme-ui"
import { Link } from "gatsby"
import Burger from "./burger"
import MobileMenu from "./mobileMenu"
import Logo from "../assets/logo.svg"
import LogoMobile from "../assets/logo-small.svg"

export default () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header
      sx={{
        height: ["auto", "auto", "200px"],
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: ["center", "center", "flex-end"],
          pt: ["20px", "20px", "40px"],
        }}
      >
        <Link to="/">
          <Logo
            style={{ width: "276px" }}
            sx={{
              display: ["none", "none", "block"],
            }}
          />

          <LogoMobile
            style={{ width: "62px" }}
            sx={{
              display: ["block", "block", "none"],
            }}
          />
        </Link>

        <Flex
          sx={{
            display: ["none", "none", "block"],
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
            pb: [0, 0, "10px"],
          }}
        >
          <Link to="/stores">
            <Button variant="small" sx={{ ml: 4 }}>
              where to buy
            </Button>
          </Link>
        </Flex>

        <Burger showMenu={showMenu} setShowMenu={setShowMenu} />

        <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </header>
  )
}
