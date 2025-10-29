import { Section } from '@/components/shared/Section/Section'
import { ContentContainer } from '@/components/shared/Container/ContentContainer'
import { useTranslations } from 'next-intl'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import Image from 'next/image'

export default function AboutUsPage() {
  const t = useTranslations('pages.about')
  return (
    <ContentContainer className='pt-10'>
      <div className='relative z-1 flex justify-center'>
        <div className='w-full justify-center text-center sm:max-w-[450px] lg:max-w-[650px]'>
          <Section headline={t('headline')}>
            <div className='flex flex-col items-center gap-6'>
              <Image
                src='/images/tina_and_olaf.webp'
                alt='Tina & Olaf'
                width={450}
                height={350}
                className='h-auto w-full max-w-full rounded-md object-contain'
              />
              <div className='text-justify'>
                <ContentBlock items={[t('description.1'), t('description.2')]} />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </ContentContainer>
  )
}
