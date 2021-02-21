/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ showMenu, setShowMenu }) => (
  <button
    aria-label="Toggle menu"
    aria-expanded={showMenu}
    showMenu={showMenu}
    onClick={() => setShowMenu(!showMenu)}
    sx={{
      display: ["flex", "flex", "none"],
      flexDirection: "column",
      justifyContent: "space-around",
      width: "2rem",
      height: "2rem",
      padding: "0",
      background: "transparent",
      border: "none",
      zIndex: 2,
      cursor: "pointer",
      ":focus": {
        outline: "none",
      },
      span: {
        width: "2rem",
        height: ".25rem",
        backgroundColor: "primary",
      },
    }}
  >
    <span />
    <span />
    <span />
  </button>
)
