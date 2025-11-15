import localFont from 'next/font/local'

export const arimoFont = localFont({
  src: [
    {
      path: '../../public/fonts/arimo/Arimo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/arimo/Arimo-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/arimo/Arimo-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-arimo',
})

export const sourceSansPro = localFont({
  src: [
    {
      path: '../../public/fonts/sansPro/SourceSansPro-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-BlackIt.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-BoldIt.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-ExtraLightIt.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-It.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-LightIt.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sansPro/SourceSansPro-SemiboldIt.otf',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-sans-pro',
})
