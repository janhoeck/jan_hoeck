import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { GoogleMapsAPIProvider } from '@/components/shared/GoogleMapsAPIProvider/GoogleMapsAPIProvider'

type Params = Promise<{ locale: string; slug: string }>

type MetadataProps = {
  params: Params
}

export async function generateMetadata(props: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await props.params
  const t = await getTranslations({ locale, namespace: `pages.expose/${slug}` })

  return {
    title: t('headline'),
    openGraph: {
      title: t('headline'),
      url: `https://solymarmenor.com/expose/${slug}`,
      images: [
        {
          url: 'https://solymarmenor.com/images/apartment/IMG_9806.webp',
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
