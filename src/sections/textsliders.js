/** @jsx jsx */
import { jsx } from "theme-ui"
import TextSliderTop from "../components/textslidertop"
import TextSliderMid from "../components/textslidermid"
import TextSliderBottom from "../components/textsliderbottom"

export default () => (
  <section sx={{ maxWidth: "100%", overflow: "hidden", mt: [6, 6, 11] }}>
    <TextSliderTop />
    <TextSliderMid />
    <TextSliderBottom />
  </section>
)
