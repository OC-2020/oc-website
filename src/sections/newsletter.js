/** @jsx jsx */
import { jsx, Styled, Container, Flex, Button, Input } from 'theme-ui'
import Arrow from "../assets/arrow-btn.svg"

export default () => {
  return (
		<section sx={{
			position: 'relative',
			mt: ['3.5rem', '3.5rem', '12rem'],
			pt: [5, 5, 0],
			height: '360px',
			backgroundColor: '#f9f9f9',
			'.slanted-top': {
				position: 'absolute',
				top: 0,
				width: '100%',
				height: '10vw',
				transform: 'translateY(-100%)'
			},
			'.slanted-bottom': {
				position: 'absolute',
				bottom: 0,
				width: '100%',
				height: '10vw',
				transform: 'scale(-1) translateY(-100%)'
			}
		}}>

			<svg className="slanted-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" sx={{ zIndex: -1 }}>
				<polygon fill="#f9f9f9" points="0,100 100,50 100,100"/>
			</svg>

			<svg className="slanted-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" sx={{ zIndex: -1 }}>
				<polygon fill="#f9f9f9" points="0,100 100,50 100,100"/>
			</svg>

			<Container sx={{ position: 'relative', height: '100%' }}>
				<Flex sx={{
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
					textAlign: 'center'
				}}>
					<Styled.h5 sx={{
						fontSize: ["15px", "15px", "24px"]
					}}>
						Sign up to know when we launch our <br />ecommerce store & new products!
					</Styled.h5>
					<Flex
							as="form"
							action="https://usebasin.com/f/e954e7f86e07"
							method="POST"
							sx={{
								flexDirection: ["column", "column", "row"],
								alignItems: "center",
								maxWidth: '460px',
								width: '100%',
								mt: 5
							}}
						>
							<Input
								type="email"
								name="email"
								placeholder="Your Email"
								required
								sx={{
									height: "62px",
									borderTopRightRadius: ["4px", "4px", 0],
									borderBottomRightRadius: ["4px", "4px", 0],
								}}
							/>

							<Button
								type="submit"
								sx={{
									minWidth: "160px",
									height: "62px",
									mt: [2, 2, 0],
									fontSize: "18px !important",
									py: "0 !important",
									borderTopLeftRadius: ["4px", "4px", 0],
									borderBottomLeftRadius: ["4px", "4px", 0],
								}}
							>
								Submit <Arrow sx={{ marginLeft: 1 }} />
							</Button>
						</Flex>
				</Flex>
			</Container>
		</section>
	)
}