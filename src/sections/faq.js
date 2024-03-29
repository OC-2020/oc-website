/** @jsx jsx */
import { jsx, Styled, Container, Flex } from 'theme-ui'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import '../assets/accordion-styles.css'

export default () => {
	const questionsLeft = [
		{
			question: 'Where can I find your oat milk in Canada?',
			answer: "Oat Canada is officially available <b>CANADA WIDE</b>! We're available at <b>Loblaws</b> banners including <b>Superstore</b>, <b>Valu-Mart</b>, <b>Zehrs</b>, <b>Provigo</b>, <b>Dominion</b>, <b>Your Independent Grocer, and more</b>. Check out our <a href='https://oatcanada.com/stores/' target='_blank' rel='noopener noreferrer'>Store Locator Page</a>. We're quickly expanding, so if there is a specific retailer you'd like to find our product in, be sure to let us know!"
		},
		{
			question: 'Which Costco locations can I find your oat milk in?',
			answer: "We are available at the following Costco warehouses. We're also expanding! If there's a specific Costco warehouse you'd like to find our product in, make sure to request item #1428374, Oat Canada, at your local Costco warehouse. Also, let us know in the contact form below!<br /><br />• Overlea - 42 Overlea Blvd, Toronto, ON M4H 1B6<br />• Etobicoke - 50 Queen Elizabeth Blvd, Etobicoke, ON M8Z 1M1<br />• Downsview - 100 Billy Bishop Way, Toronto, ON M3K 2C8<br />• Richmond Hill - 35 John Birchall Rd, Toronto, ON L4S 0B2<br />• Mississauga South - 3180 Laird Rd, Mississauga ON L5L 6A5<br />• Burlington - 1225 Brant St, Burlington, ON L7P 1X7<br />• Montreal - 300 Rue Bridge, Montreal, QC H3K 2C3<br />• Sherbrooke - 3800 Bd de Monseigneur-Fortier, Sherbrooke, QC J1L<br /><br />Make sure to look in the milk-alternatives section, usually found across the dairy fridge!"
		},
		{
			question: 'Is your oat milk Gluten-Free?',
			answer: 'We take celiacs disease very seriously. As such, after production our product immediately undergoes rigorous testing with Romer Labs in California for any traces of gluten.<br /><br /> As per Health Canada, a product having less than 20ppm of gluten is able to make the claim of gluten-free in Canada. Oat Canada’s Zero Sugar Oat Milk with expiration date of July 2022, Oct 2022, December 2022, March 2023, and May 2023 have less than 2.0 ppm which is considered gluten-free!<br /><br /> We test every batch and we’re are happy to provide results upon request. '
		},
		{
			question: 'Is it nut free?',
			answer: "We do understand how difficult it can be regarding allergy restrictions, as one of our Co-Founders actually has severe peanut allergies herself. As such, we've made it a priority to take allergens very seriously.<br /><br />Rest assured that our 0g Sugar Oat Milk is produced in a 100% peanut and dairy free facility. There is however an almond milk brand produced on the same production line from time to time, however, I assure you that this production line undergoes a thorough cleaning regularly after each production run as well as a CIP (Clean-in-place) process to ensure absolutely no contamination occurs. All of our products are produced locally in Toronto."
		},
		
	]

	const questionsRight = [
		{
			question: 'Is this oat milk shelf-stable?',
			answer: "Our oat milk is shelf-stable and has a 12-month shelf life from the date of production. This means you can safely store our Oat Canada 0g Sugar Oat Milk in your pantry! Our customers appreciate this because then they're able to stock up and save themselves multiple trips to the grocery store.<br /><br /> Once opened, it is fresh for up to 14 days and must be kept refrigerated."
		},
		{
			question: 'Is it Barista Grade? Does it froth?',
			answer: "Yes, it is Barista Grade! And it most definitely froths! You can check out Arlene Dickinson froth it on <a href='https://www.cbc.ca/dragonsden/m_pitches/oat-canada' target='_blank' rel='noopener noreferrer'>CBC's Dragons' Den.</a>"
		},
		{
			question: 'What does this oat milk taste like?',
			answer: 'Our Oat Canada 0g Sugar Oat Milk has a smooth, neutral, and fresh taste. Because it is completely sugar free, it makes for the perfect base for your coffee, tea, cereal, smoothies, and even your baking and cooking recipes.'
		},
		{
			question: 'Is this oat milk for me?',
			answer: 'This oat milk is perfect for: those practicing the ketogenic diet, anyone who has diabetes, great for athletes, vegans, coffee lovers, those who have lactose intolerance, and anyone who practices or wants to live a more health conscious life.'
		},
		
		
	]

	return (
		<Container as="section" sx={{
			mt: [10, 10, 12]
		}}>
			<Styled.h3>YOU GOT QUESTIONS</Styled.h3>
			<Styled.h2>WE GOT ANSWERS</Styled.h2>

			<Flex sx={{
				mt: 6,
				flexDirection: ['column', 'column', 'row'],
				alignItems: ['center', 'center', 'flex-start']
			}}>
				<Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
					{questionsLeft.map(({ question, answer }, i) => (
						<AccordionItem key={i}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<span sx={{ pr: 2 }}>
										{question}
									</span>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p dangerouslySetInnerHTML={{__html: answer}} />
							</AccordionItemPanel>
						</AccordionItem>
					))}
				</Accordion>

				<Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
					{questionsRight.map(({ question, answer }, i) => (
						<AccordionItem key={i}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<span sx={{ pr: 2 }}>
										{question}
									</span>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p dangerouslySetInnerHTML={{__html: answer}} />
							</AccordionItemPanel>
						</AccordionItem>
					))}
				</Accordion>
			</Flex>
		</Container>
	)
}
