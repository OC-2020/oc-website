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
			question: 'Is your oat milk Gluten-Free?',
			answer: 'Our product is indeed gluten free! We take celiacs disease very seriously. As such, after production our product immediately undergoes rigorous testing with Romer Labs in California for any traces of gluten.<br /><br />As per Health Canada, a product having less than 20ppm of gluten is indeed able to make the claim of gluten-free in Canada. Oat Canada’s 0g Sugar Oat Milk is significantly less than this at 2.0ppm! We test every batch and are happy to provide results upon request.'
		},
		{
			question: 'Is it nut free?',
			answer: "We do understand how difficult it can be regarding allergy restrictions, as one of our Co-Founders actually has severe peanut allergies herself. As such, we've made it a priority to take allergens very seriously.<br /><br />Rest assured that our 0g Sugar Oat Milk is produced in a 100% peanut and dairy free facility. There is however an almond milk brand produced on the same production line from time to time, however, I assure you that this production line undergoes a thorough cleaning regularly after each production run as well as a CIP (Clean-in-place) process to ensure absolutely no contamination occurs. All of our products are produced locally in Toronto."
		},
		{
			question: 'Is this oat milk shelf-stable?',
			answer: "Our oat milk is shelf-stable and has a 12-month shelf life from the date of production. This means you can safely store our Oat Canada 0g Sugar Oat Milk in your pantry! Our customers appreciate this because then they're able to stock up and save themselves multiple trips to the grocery store.<br /><br /> Once opened, it is fresh for up to 14 days and must be kept refrigerated."
		},
		{
			question: 'Is it Barista Grade? Does it froth?',
			answer: "Yes, it is Barista Grade! And it most definitely froths! You can check out Arlene Dickinson froth it on <a href='https://www.cbc.ca/dragonsden/m_pitches/oat-canada' target='_blank' rel='noopener noreferrer'>CBC's Dragons' Den.</a>"
		}
	]

	const questionsRight = [
		{
			question: 'What does this oat milk taste like?',
			answer: 'Our Oat Canada 0g Sugar Oat Milk has a smooth and neutral taste. Because it is completely sugar free, it makes for the perfect base for your coffee, tea, cereal, smoothies, and even your baking and cooking recipes.'
		},
		{
			question: 'Is this oat milk for me?',
			answer: 'This oat milk is perfect for: those practicing the ketogenic diet, anyone who has diabetes, great for athletes, vegans, coffee lovers, those who have lactose intolerance, and anyone who practices or wants to live a more health conscious life.'
		},
		{
			question: 'Which Costco locations can I find your oat milk in?',
			answer: "We are available at the following Costco warehouses. We're also expanding! If there's a specific Costco warehouse you'd like to find out product in, tell us in the contact form below!<br /><br />• Thorncliffe - 42 Overlea Blvd, Toronto, ON M4H 1B6<br />• Etobicoke - 50 Queen Elizabeth Blvd, Etobicoke, ON M8Z<br />• Mississauga South - 3180 Laird Rd, Mississauga, ON L5L 6A5<br />• Central Mississauga - 1570 Dundas St E, Mississauga, ON L4X 1L4<br />• Richmond Hill - 35 John Birchall Rd, Richmond Hill, ON L4S 0B2<br />• Waterloo - 930 Erb St W, Waterloo, ON N2J 3Z4<br /><br />Make sure to look in the milk-alternatives section, usually found across the dairy fridge!"
		},
		{
			question: 'Where can I find your oat milk in Canada?',
			answer: "Besides Costco and Well.ca, you can also find our product at Local Independents in Eastern Canada below. We're quickly expanding, so if there is a specific retailer/independent you'd like to find our product in, be sure to let us know in the contact form below!<br /><br />Amici Foods<br />Battaglias<br />Coco Market<br />Dworkins<br />Eagle Lake Country Market<br />FH Fine Foods<br />La Bottega<br />La Moisson<br />O & V Tasting Room Elmira<br />On the Move Organics<br />Simply Zen<br />Vincenzo’s<br />Yummy Market<br />Vested Interest<br />Market Fresh"
		}
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
