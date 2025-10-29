import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { GoogleMapsAPIProvider } from '@/components/shared/GoogleMapsAPIProvider/GoogleMapsAPIProvider'
import { loadExposeConfig } from '../../../../api/loadExposeConfigs'
import { getTranslation } from '@/components/expose/utils'

type Params = Promise<{ locale: string; slug: string }>

type MetadataProps = {
  params: Params
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await props.params
  const expose = loadExposeConfig(slug)

  if (!expose) {
    return {}
  }

  return {
    title: getTranslation(locale, expose.headline),
    openGraph: {
      title: getTranslation(locale, expose.headline),
      url: `https://solymarmenor.com/expose/${expose.id}`,
      images: [
        {
          url: `https://solymarmenor.com/images/${expose.id}/coverPhoto.webp`,
          width: 400,
          height: 400,
        },
      ],
      locale,
      type: 'website',
    },
  }
}

export default function PageLayout({ children }: PropsWithChildren) {
  return <GoogleMapsAPIProvider>{children}</GoogleMapsAPIProvider>
}
