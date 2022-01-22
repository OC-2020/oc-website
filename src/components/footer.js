/** @jsx jsx */
import {
  jsx,
  Styled,
  Container,
  Flex,
  Box,
  Text,
  Input,
  Button,
} from "theme-ui";
import { Link } from "gatsby";
import Logo from "../images/logo";
import ArrowBtn from "../components/arrowbtn";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Arrow from "../assets/arrow-btn.svg";

export default () => {
  return (
    <footer
      sx={{
        position: "relative",
        mt: [8, 8, 12],
        py: 8,
        backgroundColor: "#f9f9f9",
        ".slanted-top": {
          position: "absolute",
          top: 0,
          width: "100%",
          height: "10vw",
          transform: "translateY(-100%)",
          pointerEvents: "none",
        },
      }}
    >
      <svg
        className="slanted-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#f9f9f9" points="0,100 100,50 100,100" />
      </svg>

      <Container>
        <Flex
          sx={{
            alignItems: ["center", "center", "flex-end"],
            justifyContent: "space-between",
            flexDirection: ["column", "column", "row"],
          }}
        >
          <Box sx={{ textAlign: ["center", "center", "left"] }}>
            <Logo style={{ width: "169px" }} />
            <Text
              sx={{
                maxWidth: "370px",
                mt: 4,
                lineHeight: 1.5,
                textAlign: ["center", "center", "left"],
              }}
            >
              Helping Canadians build <br />
              healthy eating habits
            </Text>
          </Box>

          <Flex
            sx={{
              height: [null, null, "90px"],
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Styled.h3
              sx={{
                mt: [5, 5, 0],
                mb: [2, 2, 0],
                fontSize: "18px !important",
                textAlign: ["center", "center", "left"],
              }}
            >
              SHOP NOW
            </Styled.h3>

            <Flex
              sx={{
                position: "relative",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <ArrowBtn
                link="https://well.ca/products/oat-canada-barista-approved-oat-milk_194746.html"
                conversion="AW-564308269/7NBhCLOOpO0BEK3Sio0C"
                footer
              >
                Well.ca
              </ArrowBtn>

              <Link
                to="/stores"
                sx={{
                  textDecoration: "none",
                  fontStyle: "italic",
                  fontFamily: "averta",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Store locator
              </Link>
            </Flex>
          </Flex>

          <Flex
            sx={{
              height: [null, null, "90px"],
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Styled.h3
              sx={{
                mt: [5, 5, 0],
                mb: [2, 2, 0],
                fontSize: "18px !important",
                textAlign: ["center", "center", "left"],
              }}
            >
              Be part of our journey
            </Styled.h3>

            <Flex
              sx={{
                justifyContent: ["center", "center", "flex-start"],
                alignItems: "center",
                "> * + *": {
                  ml: 6,
                },
              }}
            >
              <a
                href="https://www.instagram.com/oatcanada/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ width: "24px" }}
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/oatcanada/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ width: "14px" }}
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com/OatCanada/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ width: "26px" }}
              >
                <Twitter />
              </a>
            </Flex>
          </Flex>

          <Flex
            sx={{
              height: [null, null, "90px"],
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Styled.h3
              sx={{
                mt: [5, 5, 0],
                mb: [2, 2, 0],
                fontSize: "18px !important",
                textAlign: ["center", "center", "left"],
              }}
            >
              Join our vip list. You don't want to miss out.
            </Styled.h3>

            <Flex
              as="form"
              action="https://usebasin.com/f/e954e7f86e07"
              method="POST"
              sx={{
                flexDirection: ["column", "column", "row"],
                alignItems: "center",
              }}
            >
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                sx={{
                  maxWidth: "260px",
                  height: "45px",
                  borderTopRightRadius: ["4px", "4px", 0],
                  borderBottomRightRadius: ["4px", "4px", 0],
                }}
              />

              <Button
                type="submit"
                sx={{
                  minWidth: "160px",
                  height: "45px",
                  mt: [2, 2, 0],
                  fontSize: "18px !important",
                  py: "0 !important",
                  borderTopLeftRadius: ["4px", "4px", 0],
                  borderBottomLeftRadius: ["4px", "4px", 0],
                }}
              >
                Submit <Arrow sx={{ marginLeft: 1 }} />
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Text
          sx={{
            mt: 8,
            textAlign: ["center", "center", "left"],
            br: {
              display: ["inline-block", "inline-block", "none"],
            },
          }}
        >
          Copyright © Oat Canada 2020. <br />
          All Rights Reserved.   
          <a
                href="https://www.termsfeed.com/live/379ea87a-1737-4ce7-b990-6abddb5d9a87"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ width: "24px" }}
              >Privacy Policy.</a>
        </Text>
      </Container>
    </footer>
  );
};
