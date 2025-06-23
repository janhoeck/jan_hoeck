import { Section } from '@/components/shared/Section/Section'
import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { useTranslations } from 'next-intl'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'

export default function AboutUsPage() {
  const t = useTranslations('pages.about')
  return (
    <ContentContainer className='mt-10'>
      <Section headline={t('headline')}>
        <ContentBlock items={[t('description.1'), t('description.2')]} />
      </Section>
    </ContentContainer>
  )
}
