import localFont from 'next/font/local'

export const avenirNext = localFont({
  src: [
    {
      path: '../public/fonts/AvenirNextThin/font.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextThinItalic/font.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/AvenirNextUltraLight/font.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextUltraLightItalic/font.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/AvenirNextLight/font.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextLightItalic/font.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/AvenirNextRegular/font.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextItalic/font.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/AvenirNextMedium/font.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextMediumItalic/font.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/AvenirNextDemi/font.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextDemiItalic/font.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/AvenirNextBold/font.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextBoldItalic/font.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/AvenirNextHeavy/font.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/AvenirNextHeavyItalic/font.woff2',
      weight: '800',
      style: 'italic',
    }
  ],
  variable: '--font-avenir-next',
  display: 'swap',
}) 