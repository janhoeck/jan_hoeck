import { getTranslation } from '@/components/property/utils'
import { GoogleMapsAPIProvider } from '@/components/shared/GoogleMapsAPIProvider/GoogleMapsAPIProvider'
import { loadPropertyConfig } from '@/lib/load-property-configs'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

type Params = Promise<{ locale: string; slug: string }>

type MetadataProps = {
  params: Params
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await props.params
  const expose = loadPropertyConfig(slug)

  if (!expose) {
    return {}
  }

  return {
    title: getTranslation(locale, expose.title),
    openGraph: {
      title: getTranslation(locale, expose.title),
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
