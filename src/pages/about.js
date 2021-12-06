/** @jsx jsx */
import { jsx, Container, Styled, Box, Text } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/layout"

export default () => {
  // const { press_image } = useStaticQuery(
  //   graphql`
  //     query {
  //       press_image: file(relativePath: { eq: "press-release-new.jpg" }) {
  //         childImageSharp {
  //           fluid(maxWidth: 950, quality: 100) {
  //             ...GatsbyImageSharpFluid_withWebp_noBase64
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  return (
    <Layout>
      <Container sx={{ width: ["100%", "100%", "950px"], mt: [4, 4, 8] }}>
        <Styled.h3
          sx={{
            mb: [1, 1, 2],
            fontSize: ["18px", "18px", "18px"],
          }}
        >
          THIS IS OUR STORY
        </Styled.h3>
        <Styled.h2 sx={{ lineHeight: [1.15, 1.15, "59px !important"] }}>
          WE BELIEVE SMALL, SIMPLE HABITS CAN CHANGE YOUR LIFE
        </Styled.h2>
        <Text sx={{ mt: 2 }}>
          Hi! We’re Eloise and Jamari Ambursley – high school sweethearts and
          the proud founders of Oat Canada.
        </Text>

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
            This news release comes ahead of Oat Canada’s disruptive innovation
            project announcement – a project which is expected to benefit both
            consumers and companies in the food and beverage industry. In
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
            Oat Canada will also have coast to coast reach through a full suite
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
