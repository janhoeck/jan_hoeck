import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { Section } from '@/components/shared/Section/Section'
import { ContactDetails } from '@/components/shared/ContactDetails/ContactDetails'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
  const t = useTranslations('pages.privacy')
  return (
    <ContentContainer className='mt-10'>
      <Section headline={t('headline')}>
        <div className='flex flex-col gap-4'>
          <Section
            headline={t('descriptions.1/headline')}
            variant='subsection'
          >
            <ContentBlock items={[t('descriptions.1')]} />
          </Section>
          <Section
            headline={t('descriptions.2/headline')}
            variant='subsection'
          >
            <ContentBlock items={[t('descriptions.2')]} />
            <ContactDetails />
          </Section>
          <Section
            headline={t('descriptions.3/headline')}
            variant='subsection'
          >
            <ContentBlock items={[t('descriptions.3')]} />
          </Section>
          <Section
            headline={t('descriptions.4/headline')}
            variant='subsection'
          >
            <ContentBlock items={[t('descriptions.4')]} />
          </Section>
          <Section
            headline={t('descriptions.5/headline')}
            variant='subsection'
          >
            <ContentBlock items={[t('descriptions.5')]} />
          </Section>
          <Section
            headline={t('descriptions.6/headline')}
            variant='subsection'
          >
            <ContentBlock
              items={[
                {
                  text: t('descriptions.6'),
                  bulletpoints: [
                    t('descriptions.6/1'),
                    t('descriptions.6/2'),
                    t('descriptions.6/3'),
                    t('descriptions.6/4'),
                    t('descriptions.6/5'),
                  ],
                },
                t('descriptions.7'),
              ]}
            />
          </Section>
          <Section
            headline={t('descriptions.8/headline')}
            variant='subsection'
          >
            <ContentBlock
              items={[
                {
                  text: t('descriptions.8'),
                  bulletpoints: [
                    t('descriptions.8/1'),
                    t('descriptions.8/2'),
                    t('descriptions.8/3'),
                    t('descriptions.8/4'),
                    t('descriptions.8/5'),
                    t('descriptions.8/6'),
                  ],
                },
                t('descriptions.9'),
              ]}
            />
          </Section>
          <Section
            headline={t('descriptions.10/headline')}
            variant='subsection'
          >
            <ContentBlock items={[t('descriptions.10')]} />
          </Section>
        </div>
      </Section>
    </ContentContainer>
  )
}
