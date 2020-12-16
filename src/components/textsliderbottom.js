/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect } from 'react'
import { motion, useTransform, animate, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function TextPiece({ text, base, index, total }) {
  const x = useTransform(
    base,
    [0, (50 / total) * (index + 1), (50 / total) * (index + 1), 50],
    [`${(index + 1) * -50}%`, '0%', '0%', `${total * 50 - (index + 1) * 50}%`]
  )

  return (
    <motion.li
      style={{ x }}
    >
      <motion.figure
        initial={false}
			>
				<div sx={{
          display: 'block',
          width: 'auto',
          fontSize: ['20px', '20px', '38px'],
          whiteSpace: 'nowrap'
				 }}>
          {text}
				</div>
      </motion.figure>
    </motion.li>
  )
}

export default () => {
  const texts = [
    'SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\ SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\ SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\ SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\ SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\ SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\ SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\ SMOOTHIES \\ COFFEE \\ TEA \\ BUBBLE TEA \\ CEREAL \\ OATMEAL \\ SAUCES \\'
  ]

  const x = useMotionValue(0)
  const { inView, ref: inViewRef } = useInView({ threshold: 0, rootMargin: '100px' })
  const duration = 500

  useEffect(() => {
    if (!inView) return

    const controls = animate(x, 100, {
      type: 'tween',
      duration,
      ease: 'linear',
      loop: Infinity,
    })

    return controls.stop
  }, [inView, x, duration])

  return (
    <div
      ref={inViewRef}
      sx={{
        position: 'relative',
        transform: 'rotate(-2deg)'
      }}
    >
      <div sx={{ display: 'flex', height: ['40px', '40px', '60px'], overflow: 'hidden' }}>
        <ul sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					listStyle: 'none',
          fontFamily: 'eastman',
          color: 'white',
          WebkitTextStroke: '1px black'
				}}>
          {texts.map((text, i) => (
            <TextPiece
              key={i}
              text={text}
              base={x}
              index={i}
              total={texts.length}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}