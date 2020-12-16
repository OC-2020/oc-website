/** @jsx jsx */
import { jsx, Styled, Container, Grid, Input, Textarea, Button } from 'theme-ui'
import Arrow from '../assets/arrow-btn.svg'

export default () => {
	return (
		<Container as="section" sx={{
			mt: 10
		}}>
			<Styled.h3>Need Help?</Styled.h3>
			<Styled.h2>Drop us a line</Styled.h2>

			<Grid
				as="form"
				action="https://usebasin.com/f/03da55400dc6"
				method="POST"
				columns={[1, 1, 2]}
				rows={[3, 3, 2]}
				gap={6}
				sx={{
					mt: 6
				}}
			>
				<Input name="name" placeholder="Your Name" required />

				<Input type="email" name="email" placeholder="Your Email" required />

				<Textarea
					name="message"
					rows="5"
					placeholder="Your Message"
					sx={{ gridColumn: [1, 1, '1 / 3']}}
					required
				/>

				<Button type="submit" sx={{ maxWidth: '160px' }}>
					Submit <Arrow sx={{ marginLeft: 1 }} />
				</Button>
			</Grid>
		</Container>

	)
}