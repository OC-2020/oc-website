/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { Link } from "gatsby"
import Arrow from "../assets/arrow-btn.svg"
import ArrowBtn from "./arrowbtn"
import CloseBtn from "./closeBtn"

export default ({ showMenu, setShowMenu }) => (
  <nav
    sx={{
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      top: "0",
      left: "0",
      right: "0",
      height: "100vh",
      background: "white",
      zIndex: 99999,
      textAlign: "center",
      transform: showMenu ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)",
      transition: "transform .2s ease-in-out",
    }}
  >
    <CloseBtn
      onClick={() => setShowMenu(!showMenu)}
      sx={{
        top: "2rem",
        right: "20px",
      }}
    />

    <Link
      to="/about"
      sx={{
        textDecoration: "none",
        fontFamily: "barlow",
        textTransform: "uppercase",
        fontWeight: 600,
        fontSize: "16px",
      }}
    >
      Our story
      <Arrow sx={{ marginLeft: 1 }} />
    </Link>

    <ArrowBtn
      link="https://well.ca/products/oat-canada-barista-approved-oat-milk_194746.html"
      conversion="AW-564308269/7NBhCLOOpO0BEK3Sio0C"
      sx={{ mt: 1 }}
    >
      shop well.ca
    </ArrowBtn>

    <Link to="/stores">
      <Button variant="small" sx={{ mt: 4 }}>
        store locator
      </Button>
    </Link>
  </nav>
)
