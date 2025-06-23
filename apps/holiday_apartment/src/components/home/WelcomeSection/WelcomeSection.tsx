import { Section } from '@/components/shared/Section/Section'
import React from 'react'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { useTranslations } from 'next-intl'

export const WelcomeSection = () => {
  const t = useTranslations('pages.home')
  return (
    <div className='flex flex-col gap-4'>
      <Section headline={t('headline')}>
        <ContentBlock items={[t('descriptions.1')]} />
      </Section>
      <Section
        variant='subsection'
        headline={t('descriptions.2/headline')}
      >
        <ContentBlock
          items={[
            {
              text: t('descriptions.2'),
              bulletpoints: [t('descriptions.2/1'), t('descriptions.2/2')],
            },
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline={t('descriptions.3/headline')}
      >
        <ContentBlock
          items={[
            {
              text: t('descriptions.3'),
              bulletpoints: [t('descriptions.3/1'), t('descriptions.3/2'), t('descriptions.3/3')],
            },
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline={t('descriptions.4/headline')}
      >
        <ContentBlock
          items={[
            {
              text: t('descriptions.4'),
              bulletpoints: [t('descriptions.4/1'), t('descriptions.4/2'), t('descriptions.4/3')],
            },
            t('descriptions.5'),
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline={t('descriptions.6/headline')}
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
        variant='subsection'
        headline={t('descriptions.8/headline')}
      >
        <ContentBlock
          items={[
            {
              bulletpoints: [
                t('descriptions.8/1'),
                t('descriptions.8/2'),
                t('descriptions.8/3'),
                t('descriptions.8/4'),
                t('descriptions.8/5'),
              ],
            },
          ]}
        />
      </Section>
      <Section
        variant='subsection'
        headline={t('descriptions.9/headline')}
      >
        <ContentBlock items={[t('descriptions.9')]} />
      </Section>
    </div>
  )
}
