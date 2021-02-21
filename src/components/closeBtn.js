/** @jsx jsx */
import { jsx } from "theme-ui"

export default (props) => (
  <button
    {...props}
    sx={{
      position: "absolute",
      top: "12px",
      right: "12px",
      background: "none",
      border: "none",
      cursor: "pointer",
      ":focus": {
        outline: "none",
      },
    }}
  >
    <svg width="34" height="34">
      <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
        <circle stroke="#44474F" fill="#FFF" cx="16" cy="16" r="16" />
        <path
          d="M22.679 10.94L17.619 16l5.06 5.06-1.62 1.619L16 17.618l-5.06 5.06-1.619-1.619 5.06-5.06-5.06-5.058 1.62-1.62L16 14.381l5.06-5.06 1.619 1.62z"
          fill="#44474F"
        />
      </g>
    </svg>
  </button>
)
