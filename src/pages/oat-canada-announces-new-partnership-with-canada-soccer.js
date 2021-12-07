/** @jsx jsx */
import { jsx, Container, Styled, Flex, Box, Text } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default () => {
  const { press_image } = useStaticQuery(
    graphql`
      query {
        press_image: file(relativePath: { eq: "press-release-new.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 950, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Container sx={{ maxWidth: "1200px", mt: -6, px: [null, null, "2rem"] }}>
        <Styled.h3
          sx={{
            mt: [9, 9, 0],
            mb: [1, 1, 2],
            fontSize: ["18px", "18px", "18px"],
          }}
        >
          NEWS | PRESS RELEASE
        </Styled.h3>
        <Img fluid={press_image.childImageSharp.fluid} />
      </Container>
      <Container sx={{ width: ["100%", "100%", "950px"], mt: [4, 4, 8] }}>
        <Styled.h2 sx={{ lineHeight: [1.15, 1.15, "59px !important"] }}>
          Oat Canada Announces New Partnership with Canada Soccer
        </Styled.h2>
        <Styled.h3 sx={{ mt: 2 }}>
          Official Plant Protein Partner of Canada Soccer and Canadian Premier
          League
        </Styled.h3>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "115px",
            mt: 5,
          }}
        >
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://oatcanada.com/oat-canada-announces-new-partnership-with-canada-soccer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.79998 13.875 9.74897V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                fill="#1877F2"
              />
            </svg>
          </a>
          <a href="https://twitter.com/intent/tweet?text=Oat%20Canada%20is%20now%20the%20Official%20Plant%20Protein%20Partner%20of%20Canada%20Soccer%20and%20the%20CPL%20https://oatcanada.com/oat-canada-announces-new-partnership-with-canada-soccer">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.54753 19.7512C16.6042 19.7512 21.5578 12.2479 21.5578 5.74098C21.5578 5.52789 21.5578 5.31573 21.5434 5.10452C22.507 4.40744 23.3389 3.54442 24 2.55573C23.1014 2.95394 22.148 3.21503 21.1718 3.33044C22.1995 2.71525 22.9692 1.74691 23.3366 0.606906C22.3701 1.18042 21.3126 1.58467 20.2099 1.80212C19.2789 0.812078 17.9786 0.25 16.6196 0.25C13.9158 0.25 11.691 2.47487 11.691 5.17862C11.691 5.55372 11.7338 5.92764 11.8185 6.29298C7.86145 6.09466 4.16948 4.22294 1.67039 1.14836C0.370828 3.38552 1.04325 6.28473 3.19486 7.72145C2.41134 7.69825 1.64466 7.48684 0.96 7.10514V7.16753C0.960656 9.50256 2.62158 11.5321 4.91039 11.9944C4.18552 12.1921 3.42478 12.221 2.68706 12.0789C3.33052 14.0798 5.18602 15.459 7.28738 15.4984C5.54409 16.8685 3.38939 17.6126 1.17216 17.6104C0.780375 17.6097 0.388969 17.586 0 17.5394C2.25159 18.9843 4.87219 19.7509 7.54753 19.7474"
                fill="#1DA1F2"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=http://www.oatcanada.com">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 2.75C22 1.23221 20.7678 0 19.25 0H2.75C1.23221 0 0 1.23221 0 2.75V19.25C0 20.7678 1.23221 22 2.75 22H19.25C20.7678 22 22 20.7678 22 19.25V2.75Z"
                fill="#2867B2"
              />
              <path
                d="M6.30609 7.67529H2.62109V18.7596H6.30609V7.67529Z"
                fill="white"
              />
              <path
                d="M4.49075 2.33105C3.23 2.33105 2.40625 3.15992 2.40625 4.2463C2.40625 5.30986 3.20495 6.16159 4.44198 6.16159H4.46579C5.75068 6.16159 6.55046 5.30986 6.55046 4.2463C6.52661 3.15992 5.75077 2.33105 4.49075 2.33105Z"
                fill="white"
              />
              <path
                d="M15.3404 7.41479C13.3858 7.41479 12.5103 8.48974 12.02 9.24479V7.67544H8.33594C8.38479 8.71516 8.33594 18.7597 8.33594 18.7597H12.0199V12.5695C12.0199 12.2381 12.0438 11.9069 12.1414 11.6701C12.4073 11.0084 13.0139 10.3229 14.0317 10.3229C15.3643 10.3229 15.8981 11.3397 15.8981 12.8292V18.7597H19.5823V12.4033C19.5823 8.99862 17.7645 7.41479 15.3404 7.41479Z"
                fill="white"
              />
            </svg>
          </a>
        </Flex>
        <Box
          sx={{ mt: 4, width: "264px", height: "1px", background: "#505050" }}
        />
        <section sx={{ mt: [6, 6, "60px"] }}>
          <Text sx={{ mt: [4, 4, 6] }}>
            Toronto, ON (December 7, 2021) – Oat Canada and Canada Soccer have
            announced an exclusive multi-year partnership encompassing Canada
            Soccer’s National Teams and the Canadian Premier League (CPL). Oat
            Canada will be the “Official Plant Protein Partner” of Canada Soccer
            ahead of what is scheduled to be a very busy 2022 year including
            FIFA World Cup Qatar 2022™ Qualifiers matches and FIFA Women’s World
            Cup 2023™ Qualifiers. This partnership supports Oat Canada's
            strategic direction to deliver higher protein plant-based products
            with maximum nutritional value for athletes and consumers alike
            across Canada and beyond.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            This news release comes ahead of Oat Canada’s new innovation
            project announcement – a project which is expected to benefit both
            consumers and companies throughout the food and beverage industry. In
            addition to the Canada Soccer partnership, Oat Canada is preparing
            to launch a suite of new products in 2022.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Oat Canada will be featured as a presenting sponsor of one Canada
            Soccer National Team match per year, including a FIFA World Cup
            Qatar 2022™ Qualifiers match. Oat Canada will also be an official
            partner of the 2022 editions of the Canadian Championship and Toyota
            National Championships.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “As an Ex-Semi-Professional soccer player, and having grown up in
              the Canadian Soccer system ,I can say we are truly honoured for
              Oat Canada to be part of Canadian history. This partnership with
              Canada Soccer and the Canadian Premier League will advance Oat
              Canada’s mission to accelerate the world’s transition to
              plant-protein,”
            </i>{" "}
            said Jamari Ambursley, Co-Founder & COO, Oat Canada.{" "}
            <i>
              “We’re excited to support Canadian Soccer, to inspire and unite
              with fans across the nation at a time when Canadian soccer is at
              its absolute best. Through this partnership, we’re eager to learn
              from our athletes how we can best serve them and develop products
              that support them on their quest to becoming the best in the
              world.”
            </i>
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “Canada Soccer is excited to welcome such a dynamic and innovative
              company like Oat Canada to our family of partners,”
            </i>{" "}
            said Peter Montopoli, Canada Soccer General Secretary.{" "}
            <i>
              “The interest and momentum for the sport in our country has never
              been higher and we look forward to growing together with Oat
              Canada.”
            </i>
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Oat Canada is the first plant protein company to partner with Canada
            Soccer, a timely collaboration as the world increasingly shifts
            towards plant-based choices. With this new plant protein
            partnership, Oat Canada is setting a new standard for functional
            foods and leading the way to a plant-powered and more sustainable
            future.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            This partnership will provide coast to coast reach through a full suite
            of sponsorships assets with all eight Canadian Premier League clubs
            including match day brand integration across each CPL match and
            original content and editorial on CanPL channels, providing fans
            with more engaging and informative updates.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “We are pleased to partner with Oat Canada – a transformative
              company dedicated to sustainability and health/nutrition in the
              plant protein space,”
            </i>{" "}
            said David Clanachan, Commissioner, Canadian Premier League.
            <i>
              “Partnering with a company that is innovative and focused on
              making change through their vision is in-line with our vision and
              we are excited to have such an exciting new company support soccer
              in Canada at all levels.”
            </i>
          </Text>
        </section>
        <section sx={{ mt: [6, 6, "60px"] }}>
          <Box sx={{ mt: 6 }}>
            <Text sx={{ mb: "4px", fontWeight: "bold" }}>About Oat Canada</Text>
            <Text>
              Oat Canada is a rapidly growing food and beverage Startup from
              Toronto, Ontario. The company introduced the first Zero Sugar oat
              milk in 2020. Only a year later, with one product they are now
              available in over +1,300 stores across Canada, including major
              retailers such as Loblaws, Costco East, Longo’s and Whole Foods
              (January 2022). Oat Canada was also featured on CBC’s Dragons’
              Den, where they received investment offers from all six Dragons.
              Oat Canada is committed to becoming the leader in oat
              protein-based products, producing low sugar, protein enriched food
              and beverages that challenge soccer players to sustain their
              health and the planet. For more information about Oat Canada,
              visit <a href="https://oatcanada.com">oatcanada.com.</a>
            </Text>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Text sx={{ mb: "4px", fontWeight: "bold" }}>
              About Canada Soccer
            </Text>
            <Text>
              Canada Soccer, in partnership with its membership and its
              partners, provides leadership in the pursuit of excellence in
              soccer, both at the national and international levels. Canada
              Soccer not only strives to lead Canada to victory, but also
              encourages Canadians to a life-long passion for soccer. For more
              details on Canada Soccer, visit the official website at{" "}
              <a href="https://canadasoccer.com">canadasoccer.com</a>
            </Text>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Text sx={{ mb: "4px", fontWeight: "bold" }}>
              About Canadian Premier League
            </Text>
            <Text>
              Canadian Premier League (CPL) is Canada’s Tier 1 professional
              men’s soccer league that debuted on April 27, 2019. Playing in
              world-class and unique venues, and partnering with strong
              community-led ownership groups, the CPL is a league for Canadians
              by Canadians that brings professional soccer to communities
              coast-to-coast. For updates and more information, please go to{" "}
              <a href="https://canpl.ca">CanPL.ca.</a>
            </Text>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Text sx={{ mb: "4px", fontWeight: "bold" }}>
              About Canadian Soccer Business
            </Text>
            <Text>
              Canadian Soccer Business (CSB) represents a suite of top-tier
              national assets that are core to the sport of soccer in Canada.
              This includes representation for all corporate partnerships and
              media rights (broadcast and distribution) related to Canada
              Soccer’s core assets including its national teams, along with all
              rights associated with the Canadian Premier League – Canada’s
              professional men’s soccer league that debuted coast-to-coast in
              April 2019.
            </Text>
          </Box>
        </section>
        <section
          sx={{
            mt: [8, 8, "60px"],
            mb: [8, 8, 0],
          }}
        >
          <Text sx={{ mb: "4px", fontWeight: "bold" }}>Media Contacts:</Text>

          <Text sx={{ mt: 6, mb: "4px", fontWeight: "bold" }}>Oat Canada</Text>
          <Text>
            Marika Mousseau{" "}
            <a href="mailto:media@oatcanada.com">media@oatcanada.com</a>
          </Text>

          <Text sx={{ mt: 6, mb: "4px", fontWeight: "bold" }}>
            Canada Soccer
          </Text>
          <Text>
            Sandra Gage{" "}
            <a href="mailto:sgage@canadasoccer.com">sgage@canadasoccer.com</a>
          </Text>

          <Text sx={{ mt: 6, mb: "4px", fontWeight: "bold" }}>
            Canadian Premier League
          </Text>
          <Text>
            Micki Benedetti{" "}
            <a href="mailto:micki.benedetti@canpl.ca">
              micki.benedetti@canpl.ca
            </a>
          </Text>
        </section>
      </Container>
    </Layout>
  )
}
