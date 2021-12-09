/** @jsx jsx */
import { jsx, Container, Styled, Flex, Box, Text } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Video from "../sections/video"

export default () => {
  const { about_image } = useStaticQuery(
    graphql`
      query {
        about_image: file(relativePath: { eq: "about-us-hero.png" }) {
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
    <Img fluid={about_image.childImageSharp.fluid} />
    </Container>

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
        

        <section sx={{ mt: [6, 6, "60px"] }}>
        <Text sx={{ mt: 2 }}>
          Hi! We’re Eloise and Jamari Ambursley – high school sweethearts and
          the proud founders of Oat Canada.
        </Text>

        
          <Text sx={{ mt: [4, 4, 6] }}>
            Oat Canada was fundamentally built on small good habits. We believe 
            that when you make one good habit, it has a rippling effect, 
            influencing other areas of your life. When my husband and I got 
            married, we had started a simple habit—save 25% or more of our 
            monthly income. By the end of the year, we ended up saving more than 
            50% of our annual income. Because of one simple change, our entire 
            lifestyle changed as well. We started cooking more meals at home, 
            exercising daily, and consiously checking nutrition facts tables. As 
            we optimized our lives in small ways, we became more aware of how we 
            cared for our health as well as how we treated the planet. This lead 
            to the choice to consioucly reducing our sugar consumption where ever 
            possible and include more plant proteins into our diets—and that’s 
            how we got introduced to oat milk!
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            When we discovered oat milk it worked great for Jamari (because he’s 
            lactose intolerant) and myself (I have a nut allergry), except for 
            the fact that most oat milks were loaded with sugar. This was especially 
            important to us because we come from families who suffer from diabetes
            —Jamari’s grandma would especially be on his case about watching his 
            sugar intake because he’s legit a sugar addict. So, we tried to find ways 
            to cut out sugar as much as possible, especially in things where it just 
            didn’t make sense to have a lot in—like milk. 
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            We looked and looked for a zero sugar oat milk option but got tired of 
            misleading labels like “unsweetened” or “no sugar added” on cartons with 
            sugar contents as high as 10 grams to 17 grams of sugar in one serving. 
            To give some perspective, that’s nearly half of the sugar found in a can 
            of coke. So, we decided to take matters into our own hands. Thus, Oat 
            Canada was born.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Our promise is to be transparent with how much sugar is in our products, 
            so that’s why you see a giant zero on the front of our packaging—no 
            guessing and no confusion from misleading labels. We’re proud to have 
            launched the first zero sugar and keto-friendly barista oat milk in the 
            market—especially to have launched our business right in the middle of the 
            pandemic in 2020.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Today, just a year later after launch, we are now available in over 1,300 
            stores across Canada, including major retailers such as Loblaws, Costco East, 
            Longo’s and Whole Foods (January 2022). An incredible feet considering Oat 
            Canada only has one product in market at moment!
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            We’ve had the privilege to be featured on <a href="https://www.cbc.ca/dragonsden/m_pitches/oat-canada">CBC’s Dragons’ Den</a>. 
            (Didn’t see the episode? Watch to find out what happened!) We’ve also been featured on 
            <a href="https://vegnews.com/2021/8/sugar-free-oat-milk">VegNews</a>, 
            <a href="https://issuu.com/ensembleiq/docs/cg07_2021?fr=sNjRhZjgwODQ2MQ">Canadian Grocer</a>, 
            <a href="https://www.blogto.com/eat_drink/2020/06/toronto-zero-sugar-oat-milk-costco/">BlogTO</a>, 
            <a href="https://www.thestar.com/local-vaughan/life/food-wine/2021/02/25/neighbourhood-eats-vaughan-markham-business-programs-help-couple-launch-oat-milk.html">Toronto Star</a>, 
            and more. More recently, we’ve announced our exclusive partnership with Canada Soccer and the Canadian Premiere League! Oat Canada will be their “Official Plant Protein Partner”! Read all about it <a href="https://oatcanada.com/oat-canada-announces-new-partnership-with-canada-soccer/">here</a>.
          </Text>
          </section>
          


    <Video />


          <section sx={{ mt: [6, 6, "60px"] }}>
          <Text sx={{ mt: [4, 4, 6] }}>
            At Oat Canada, we’re committed to becoming the leader in oat-based products, producing low sugar, protein enriched food and beverages that challenge people to sustain their health and the planet.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            This is why our zero sugar oat milk is a big deal. 
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            It’s a small step towards a healthier life,
          <br>
            a small step towards a more sustainable planet.
          <br>
            Let’s help the planet and ourselves along the way.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Change begins with you.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Not everyone is going to drop sugar,
            <br>
            not everyone will become vegan,
            <br>
            not everyone is going to care about sustainability,
            <br>
            but...
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            we’re simply providing a small way to get started. 
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Change doesn’t happen overnight and so we hope to inspire and share with other Canadians how one simple habit could change your life in a big way – we’re hoping to do that starting with our zero sugar oat milk.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Lots of love, 
          </Text>
        </section>
        

      </Container>
    </Layout>
  )
}
