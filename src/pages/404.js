/** @jsx jsx */
import { jsx, Container, Styled, Text } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Styled.h2 sx={{ mt: [10, 10, 5], mb: 0 }}>Page Not Found :(</Styled.h2>
      <Text sx={{ mt: [4, 4, 10], mb: 10 }}>
        We couldn't find the page that you were looking for.
      </Text>
    </Container>
  </Layout>
)

export default NotFoundPage
