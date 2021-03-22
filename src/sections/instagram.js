/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui'
import InstaSlider from '../components/instaslider'
import Arrow from '../assets/arrow-btn.svg'

export default () => (
	<section sx={{
		position: 'relative',
		mt: [6, 6, 10]
	}}>
		<InstaSlider />

		<Box sx={{ mt: 6, textAlign: 'center' }}>
			<Button
				as="a"
				href="https://instagram.com/oatcanada"
				target="_blank"
				rel="noopnener noreferrer"
			>
				Follow Us On Instagram <Arrow sx={{ marginLeft: 1 }} />
			</Button>
		</Box>
	</section>
)
