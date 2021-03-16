/** @jsx jsx */
import { jsx } from "theme-ui";
import { forwardRef } from "react";
import Cart from "../assets/cart.svg";
import Tea from "../assets/tea.svg";
import Arrow from "../assets/arrow-btn.svg";

export default forwardRef(
  ({ icon, lat, lng, store, onClick, handleCloseClick }, ref) => (
    <div lat={lat} lng={lng} ref={ref} sx={{ position: "relative" }}>
      <button
        onClick={onClick}
        onKeyPress={onClick}
        sx={{
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          svg: {
            transform: "scale(.75)",
            transition: "transform .1s ease-in-out",
          },
          ":focus": {
            outline: "none",
          },
        }}
      >
        {icon === "cart" ? <Cart /> : <Tea />}
      </button>

      <div
        sx={{
          display: "none",
          position: "absolute",
          top: 0,
          left: "32px",
          transform: "translate(-50%, -110%)",
          width: "262px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "1px solid #44474F",
          boxShadow: "14px 18px 35px 5px rgba(94, 104, 121, 0.19)",
          fontFamily: "barlow",
          fontSize: "15px",
          zIndex: 1,
          ":before": {
            content: "''",
            display: "block",
            position: "absolute",
            top: "calc(100% - 8px)",
            right: "calc(50% - 8px)",
            width: "16px",
            height: "16px",
            background: "white",
            borderBottom: "1px solid #44474F",
            borderRight: "1px solid #44474F",
            boxShadow: "14px 18px 35px 5px rgba(94, 104, 121, 0.19)",
            transform: "rotate(45deg)",
          },
          ".show-tooltip &": {
            display: "block",
          },
          ".close": {
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
            "&:focus": {
              outline: "none",
            },
          },
        }}
      >
        <h2
          sx={{
            mt: 0,
            mb: "4px",
            fontSize: "22px",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          {store.name}
        </h2>
        <p
          sx={{
            m: 0,
            fontSize: "16px",
          }}
        >
          {store.address}
        </p>
        <a
          href={store.link}
          target="_blank"
          rel="noreferrer noopener"
          sx={{
            position: "relative",
            display: "inline-block",
            pt: 2,
            fontFamily: "barlow",
            fontWeight: "500",
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          Directions
          <Arrow
            sx={{
              position: "absolute",
              bottom: "1px",
              left: "95%",
              ml: 1,
              transform: "scale(.9) !important",
            }}
          />
        </a>
        <button className="close" onClick={() => handleCloseClick(store.id)}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="#44474F">
            <path d="M8.52399 0L9.69971 1.17572L1.17572 9.69971L0 8.52399L8.52399 0Z" />
            <path d="M9.69971 8.52399L8.52399 9.69971L0 1.17572L1.17572 0L9.69971 8.52399Z" />
          </svg>
        </button>
      </div>
    </div>
  )
);
