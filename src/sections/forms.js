/** @jsx jsx */
import { jsx, Styled, Container, Flex, Input, Button } from "theme-ui"
import Arrow from "../assets/arrow-btn.svg"

export default () => {
  return (
    <Container
      as="section"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        mt: [8, 8, "180px"],
        width: "100%",
        ":after": {
          display: ["none", "none", "block"],
          content: "''",
          width: "1px",
          height: "100%",
          position: "absolute",
          left: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <div sx={{ width: "460px" }}>
        <Styled.h3 sx={{ mb: 2 }}>I'm A Customer</Styled.h3>
        <Styled.h2>Please Add My Favorite Store</Styled.h2>

        <Flex
          as="form"
          action="https://usebasin.com/f/b8de600d859d"
          method="POST"
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 6,
            height: "480px",
          }}
        >
          <Input name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Input name="fav-store" placeholder="Your Favourite Store(s)" />
          <Input name="city" placeholder="City" />

          <select
            name="province"
            placeholder="Province"
            sx={{
              background:
                "url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+) no-repeat 100% 50%",
              backgroundSize: "24px",
              backgroundPosition: "98%",
              fontFamily: "inherit",
              overflow: "visible",
              boxSizing: "border-box",
              margin: "0",
              minWidth: "0",
              display: "block",
              width: "100%",
              appearance: "none",
              fontSize: "inherit",
              lineHeight: "inherit",
              border: "1px solid",
              borderRadius: "4px",
              color: "inherit",
              padding: "1.25rem",
              backgroundColor: "white",
              "&:focus": {
                outline: "none",
                borderColor: "primary",
              },
            }}
          >
            <option value="">Province</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            <option value="Manitoba">Manitoba</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="British Columbia">British Columbia</option>
            <option value="Atlantic Provinces">Atlantic Provinces</option>
          </select>

          <Button type="submit" sx={{ maxWidth: "160px" }}>
            Submit <Arrow sx={{ marginLeft: 1 }} />
          </Button>
        </Flex>
      </div>

      <div sx={{ width: "460px", mt: [8, 8, 0] }}>
        <Styled.h3 sx={{ mb: 2 }}>I'm A Retailer</Styled.h3>
        <Styled.h2>
          I Want To
          <br /> Add It To My Menu/Shelves
        </Styled.h2>

        <Flex
          as="form"
          action="https://usebasin.com/f/07f49a395e1c"
          method="POST"
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            mt: 6,
            height: "480px",
          }}
        >
          <Input name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Input name="store-name" placeholder="Store Name" />
          <Input name="locations" placeholder="Number of Locations" />
          <Input name="distributor" placeholder="Primary Distributor" />

          <Button type="submit" sx={{ maxWidth: "160px" }}>
            Submit <Arrow sx={{ marginLeft: 1 }} />
          </Button>
        </Flex>
      </div>
    </Container>
  )
}
