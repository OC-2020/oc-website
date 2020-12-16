/** @jsx jsx */
import { jsx, Button  } from 'theme-ui'
import Arrow from '../assets/arrow-btn.svg'

export default ({ children, link, conversion, footer }) => {
	const convert = conversion => {
		typeof window !== "undefined" && window.gtag('event', 'conversion', {'send_to': conversion})
	}

	return (
		<Button
			as="a"
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			variant="transparent"
			onClick={() => convert(conversion)}
			sx={{
				px: footer && '0px !important',
				textTransform: footer ? 'none' : 'uppercase',
				fontStyle: footer && 'italic',
				fontFamily: footer ? 'averta' : 'barlow',
				fontSize: footer && '16px !important'
			}}
		>
			{children} <Arrow sx={{ marginLeft: 1 }} />
		</Button>
	)
}
