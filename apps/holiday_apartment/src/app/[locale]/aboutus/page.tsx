import { Typography } from '@jan_hoeck/ui'
import { Section } from '@components/shared/Section/Section'
import { ContentContainer } from '@components/shared/Container/ContentContainer'
import { useTranslations } from 'next-intl'

export default function AboutUsPage() {
  const t = useTranslations('pages.about')
  return (
    <ContentContainer className='mt-10'>
      <Section headline={t('headline')}>
        <div className='flex flex-col gap-4'>
          {t.rich('description', {
            typography: (children) => <Typography variant='paragraph'>{children}</Typography>,
          })}
        </div>
      </Section>
    </ContentContainer>
  )
}
