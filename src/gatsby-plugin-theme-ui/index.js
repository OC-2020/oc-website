export default {
  space: [
    '0',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
    '8rem',
    '10rem',
    '12rem',
    '14rem',
    '16rem',
  ],
  breakpoints: ['900px', '1200px', '1600px'],
  layout: {
    container: {
      px: [4, 4, 6],
      maxWidth: ['500px', '500px', '1200px']
    }
  },
  fonts: {
    averta: 'Averta, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    barlow: '"Barlow Condensed", Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    eastman: '"Eastman Trial", Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3.25rem',
    '4rem',
    '4.5rem',
  ],
  lineHeights: {
    body: 1.35,
    heading: 1.15
  },
  letterSpacings: {
    body: '.025em',
    heading: '.01em'
  },
  colors: {
    primary: '#0000ff',
    secondary: '#ed126a',
    background: '#fff',
    text: '#44474f'
  },
  buttons: {
    primary: {
      px: [2, 2, 6],
      py: [1, 1, 3],
      fontFamily: 'barlow',
      fontWeight: 600,
      fontSize: ['16px', '16px', '22px'],
      textTransform: 'uppercase',
      background: 'primary',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none'
      }
    },
    transparent: {
      px: [0, 0, 4],
      py: 0,
      color: 'primary',
      fontFamily: 'barlow',
      fontWeight: 600,
      fontSize: ['16px', '16px', '18px'],
      background: 'transparent',
      textTransform: 'uppercase'
    },
    round: {
      width: ['75px', '75px', '98px'],
      height: ['75px', '75px', '98px'],
      p: 0,
      lineHeight: '22px',
      fontFamily: 'barlow',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: ['16px', '16px', '22px'],
      borderRadius: '50%',
      cursor: 'pointer',
      ':focus': {
        outline: 'none',
      },
      ':after': {
        content: "''",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1.2, 1.2)',
        height: '100%',
        width: '100%',
        border: '3px solid',
        borderColor: 'primary',
        borderRadius: '50%',
        animation: 'radiate 2s forwards infinite'
      },
      '@keyframes radiate': {
        '0%': {
          opacity: 1,
          transform: 'translate(-50%, -50%) scale(.95, .9)'
        },
        '100%': {
          opacity: 0,
          transform: 'translate(-50%, -50%) scale(1.2, 1.2)'
        }
      }
    }
  },
  cards: {
    primary: {
      width: 260,
      boxShadow: '0 20px 30px 0 rgba(79,79,79,.1)',
      backgroundColor: 'white',
      fontSize: 1,
      borderRadius: '8px',
      p: 4,
      '.title': {
        fontSize: 0
      }
    }
  },
  forms: {
    input: {
      p: '1.25rem',
      backgroundColor: 'white',
      ':focus': {
        border: '1px solid',
        borderColor: '#aaa'
      }
    },
    textarea: {
      p: '1.25rem',
      backgroundColor: 'white',
      ':focus': {
        border: '1px solid',
        colorColor: '#aaa'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'averta',
      lineHeight: 'body',
      letterSpacing: 'body',
      backgroundColor: 'background',
      color: 'text',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    h1: {
      m: '0px',
      fontFamily: 'eastman',
      fontSize: ['36px', '36px', '100px'],
      lineHeight: ['40px', '40px', '105px'],
      textTransform: 'uppercase'
    },
    h2: {
      m: '0px',
      fontFamily: 'eastman',
      fontSize: ['36px', '36px', '54px'],
      lineHeight: ['40px', '40px', '49px'],
      textTransform: 'uppercase'
    },
    h3: {
      m: '0px',
      fontFamily: 'barlow',
      fontSize: ['22px', '22px', '32px'],
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: '-0.003em',
      lineHeight: 'body',
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35
    },
    a: {
      color: 'text',
      textDecoration: 'none',
      ':visited': {
        color: 'text'
      },
      ':hover': {
        color: 'primary'
      }
    }
  }
}