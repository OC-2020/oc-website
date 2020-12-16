/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Container>
      <Box sx={{
        position: 'relative',
        mt: [8, 8, '-2rem'],
        paddingBottom: '56.25%',
        overflow: 'hidden',
        maxWidth: '100%',
        height: 0
      }}>
        <iframe
          title="THANK YOU"
          width="100%"
          src="https://www.youtube.com/embed/NNT3am8BPLI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </Box>
    </Container>
  </Layout>
)
