/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Logos from "../sections/logos"
import Testimonials from "../components/testimonials"
import FAQ from "../sections/faq"
import PIC from "../sections/pic-news"
import Soccer from "../sections/soccer"
import Slanted from "../sections/slanted"
import Story from "../sections/story"
import Video from "../sections/video"
import TextSliders from "../sections/textsliders"
import Instagram from "../sections/instagram"
import Contact from "../sections/contact"
import Vegan from "../sections/vegan"

export default () => (
  <Layout home>
    <SEO />
    <Hero />
    <Logos />
    <PIC />
{/* <Soccer /> */}
    <Slanted />
    <Story />
    <Vegan />
    <Testimonials />
    <TextSliders />
    <Instagram />
    <FAQ />
  {/* <Video /> */}
    <Contact />
  </Layout>
)
