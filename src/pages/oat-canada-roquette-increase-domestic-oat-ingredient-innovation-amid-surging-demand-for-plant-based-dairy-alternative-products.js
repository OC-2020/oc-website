/** @jsx jsx */
import { jsx, Container, Styled, Flex, Box, Text } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default () => {
  const { press_image } = useStaticQuery(
    graphql`
      query {
        press_image: file(relativePath: { eq: "PIC-Roquette-OatCanada-Graphic-Home.png" }) {
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
          OAT CANADA, ROQUETTE INCREASE DOMESTIC OAT INGREDIENT INNOVATION AMID SURGING DEMAND FOR PLANT-BASED DAIRY ALTERNATIVE PRODUCTS
        </Styled.h2>
        <Styled.h3 sx={{ mt: 2 }}>
          
        </Styled.h3>

<Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "115px",
            mt: 5,
          }}
        >
 </Flex>


     {/*

      
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

*/}

        <Box
          sx={{ mt: 4, width: "264px", height: "1px", background: "#505050" }}
        />
        <section sx={{ mt: [6, 6, "60px"] }}>
          <Text sx={{ mt: [4, 4, 6] }}>
            Toronto, ON (March 22, 2022) – Today, Protein Industries Canada announced an investment into a project between Oat Canada, a rapidly growing oat-based food and beverage company, and Roquette, a global leader in plant-based ingredients. This $4.1 million project will see the development of novel oat ingredients and nutritionally superior oat-based food and beverage products.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “As more and more Canadians are turning to plant-based beverages, it is important that Canada can process dairy-alternative products all along the supply chain”
            </i>{" "}
            said the Honourable François-Philippe Champagne, Minister of Innovation, Science and Industry.{" "}
            <i>
              “This partnership between the Protein Industries Supercluster, Oat Canada and Roquette will help ensure that Canadians have access to plant-based foods and beverages that use crops grown and processed in Canada.”
            </i>
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “Oats account for a good part of Canada’s crops used in the production of plant-based beverages and ingredients. This project will increase oat-processing capabilities within the country, a value-added economic activity in Canada. It will also reduce greenhouse gas emissions associated with exporting raw oats and importing oat ingredients. Processing more oats in Canada means greater choice for Canadians and a stronger supply chain,”
            </i>{" "}
            said the Honourable Marie-Claude Bibeau, Minister of Agriculture and Agri-Food.{" "}

          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            The growing global demand for new plant-based products developed using sustainable processes has led to an increased drive for innovation among Canada’s agrifood sector, including an increase in domestic processing of Canadian crops, such as oats. This project builds on Canada’s worldwide reputation as one of the largest producers of oats, now elevating Canada’s capacity to processing and diversifying oat utility.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “Creating an oat milk that is actually nutritious meant collaborating with industry leaders and inventing entirely new technology,”
            </i>{" "}
            said Jamari Ambursley, Co-Founder/COO of Oat Canada. {" "}
            <i>
              “In 2020, we launched our zero sugar oat milk product which was the first oat-protein based food and beverage product in Canada and we are very excited to expand our product offering. As sustainability and environmental concerns continue to shift consumer preferences to plant-based alternatives, innovation is necessary to deliver equivalent, if not better, nutritional value as animal-based products. We remain focused and committed to innovation and will continue to collaborate with partners and customers, to produce products that give people the freedom to choose plant-based without sacrificing nutrition, functionality or taste.”
            </i>
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “Roquette excels at innovation and research on plant-based ingredients, it’s at the heart of our work with food innovators like Oat Canada,”
            </i>{" "}
            said Leon Zhou, Head of Research and Development for Roquette Americas. 
            <i>
              “Through our partnership with Oat Canada and the support of Protein Industries Canada, we are well positioned to continue our innovation and research on oat protein with the goal of meeting consumer demand for new and exciting plant-based food options.”
            </i>
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            Leveraging this large supply and its strong reputation as an innovator, Roquette will develop Canada’s first oat-protein ingredient through the project. Oat Canada will test the ingredient in its current line of products as well as in several new products. The companies’ combined expertise will help meet the growing demand for healthy, sustainable plant-based foods and ingredients, including among Canadian consumers.
          </Text>


          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “Increasing our domestic ingredient processing capacity is one of the most important steps in strengthening Canada’s economy and food supply chain, as well as the health of our environment,”
            </i>{" "}
            Protein Industries Canada CEO Bill Greuel said. 
            <i>
              “By processing and utilizing more of our plant-based ingredients at home, companies like Oat Canada and Roquette are helping reduce our sector’s carbon footprint and GHG emissions, while supplying Canadians—and consumers around the world—with healthy, sustainable food options. Together, they’re creating a healthier, stronger and more sustainable Canada for everyone along the value chain.”
            </i>
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            The partnership will further Oat Canada’s commitment to producing dairy alternative food and beverage products made with Canadian oats that are high in protein, low in sugar and deliver maximum nutritional value to Canadian consumers and beyond. Research shows demand for plant-based dairy alternatives could grow to $62 billion USD by 2030–an increase of more than 92 per cent–and double in size to reach 10 per cent of the total dairy market.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            For Roquette, this new partnership—the latest in a series of successful collaborations developed under Protein Industries Canada—will provide new opportunities related to the research and development of oat protein technology.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            <i>
              “Canada is home to an incredible plant-based food industry, and as demand on our food supply grows, Canadian companies will continue to look for ways to innovate and lead in a global market. On March 21 we launched the first National Plant Based Food Week to inspire Canadians to incorporate more plant-based foods in their diets. By prompting a conversation about the benefits and showcasing how easy it is to make small changes we can collectively contribute to a more sustainable environment,”
            </i>{" "}
             said Leslie Ewing, Executive Director of Plant-Based Foods of Canada.
          </Text>

          <Text sx={{ mt: [4, 4, 6] }}>
            This marks Protein Industries Canada’s 37th project announcement, and the 27th under their technology program. Together with industry, Protein Industries Canada has committed more than $451 million to Canada’s plant-based food, feed and ingredients ecosystem.
          </Text>

        </section>









        <section sx={{ mt: [6, 6, "60px"] }}>
          <Box sx={{ mt: 6 }}>
            <Text sx={{ mb: "4px", fontWeight: "bold" }}>About Oat Canada</Text>
            <Text>
              Oat Canada is an oat protein-based food and beverage company in Toronto, Ontario. In 2020, it launched the world’s first zero-sugar oat milk, drawing the attention of all six investors on CBC’s Dragons’ Den. Today, the product is available for sale in more than 1,300 stores across Canada, including major retailers such as Loblaws, Costco East, Longo’s and Whole Foods. It is committed to becoming a leader in oat-based food and beverage products, and to producing low-sugar, protein-enriched food and beverages for athletes and consumers, alike. For more information about Oat Canada, visit <a href="https://oatcanada.com">oatcanada.com.</a>
            </Text>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Text sx={{ mb: "4px", fontWeight: "bold" }}>
              About Protein Industries Canada
            </Text>
            <Text>
              Protein Industries Canada is an industry-led, not-for-profit organization committed to positioning Canada as a global source of high-quality plant-based food and ingredients. Over the past three years, Protein Industries Canada, along with industry, has committed more than $451 million to the Canadian plant-protein sector, primarily through projects focused on research and development or building capacity within the sector. For more information, visit{" "}
              <a href="https://www.proteinindustriescanada.ca/news/leading-plant-protein-companies-are-making-the-switch-to-canadian-processed-oat-protein">proteinindustriescanada.ca</a>
            </Text>
          </Box>


          <Box sx={{ mt: 6 }}>
            <Text sx={{ mb: "4px", fontWeight: "bold" }}>
              About Roquette
            </Text>
            <Text sx={{ mt: [4, 4, 6] }}>
              Roquette is a global leader in plant-based ingredients, a pioneer of plant proteins and a leading provider of pharmaceutical excipients. The group addresses current and future societal challenges by unlocking the potential of nature to offer the best ingredients for food, nutrition and health markets. In collaboration with customers who are also passionate about the ongoing food revolution, Roquette contributes to developing a whole new cuisine that meets consumers’ demands.
            </Text>
            <Text sx={{ mt: [4, 4, 6] }}>
              In the pharma sector, Roquette offers solutions that play a critical role in medical treatments that cure and save lives.
            </Text>
            <Text sx={{ mt: [4, 4, 6] }}>
            Thanks to a constant drive for innovation and a long-term vision, the group is committed to improving the well-being of millions of people all over the world, while taking care of resources and territories. Founded in 1933, Roquette is a family-owned company that operates in more than 100 countries, has a turnover of around 3.5 billion euros, and employs 8,360 people worldwide.
            </Text>
            <Text sx={{ mt: [4, 4, 6] }}>
            Roquette in Canada operates its brand new, state-of-the-art pea protein plant, the largest of its kind in the world, in Portage la Prairie, Manitoba. At capacity, the plant will employ 120 people and process 125,000MT of yellow peas annually. Products produced at the plant include NUTRALYS® pea protein, food-grade pea starch and pea-based ingredients suitable for pet food and livestock nutrition. Roquette, the anchor tenant of Canada’s growing plant-based protein sector, has invested more than half a billion euros in pea protein over the past five years, including more than CAD$600 million of its own funds for construction of the Portage pea protein plant.
            </Text>
            <Text sx={{ mt: [4, 4, 6] }}>
              Roquette has successfully participated in three PIC projects, including its collaboration with Oat Canada. For more information about Roquette, visit{" "}
              <a href="https://www.roquette.com/">roquette.com</a>
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
            Protein Industries Canada
          </Text>
          <Text>
            Miranda Burski{" "}
            <a href="mailto:miranda@proteinsupercluster.ca">miranda@proteinsupercluster.ca</a>
          </Text>

          <Text sx={{ mt: 6, mb: "4px", fontWeight: "bold" }}>
            Roquette
          </Text>
          <Text>
            Michelle Finley{" "}
            <a href="mailto:michelle.finley@roquette.com">
              michelle.finley@roquette.com
            </a>
          </Text>
        </section>
      </Container>
    </Layout>
  )
}
