import { getTranslation } from '@/components/expose/utils'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { GrGroup } from 'react-icons/gr'
import { LuBed } from 'react-icons/lu'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'

import { ExposeCardFeatureItem } from './ExposeCardFeatureItem'
import { ExposeCardLocationPin } from './ExposeCardLocationPin'
import { ExposeCardTag } from './ExposeCardTag'

export type EstateCardProps = {
  expose: ExposeConfiguration
}

export const ExposeCard = (props: EstateCardProps) => {
  const { expose } = props
  const t = useTranslations('pages.home.exposes.card')
  const locale = useLocale()

  const groupPropertySummary = expose.propertySummary.find((item) => item.type === 'group')
  const bedPropertySummary = expose.propertySummary.find((item) => item.type === 'bed')

  return (
    <div
      className={twMerge([
        'text-card-foreground group shadow-medium overflow-hidden rounded-lg border-0 bg-white shadow-sm transition-all duration-500',
        'hover:shadow-large hover:-translate-y-2',
      ])}
    >
      <div className={twMerge(['relative h-64 overflow-hidden', 'md:h-80'])}>
        <Image
          fill
          src={`/images/${expose.id}/coverPhoto.webp`}
          alt='Estate'
          className='object-cover transition-transform duration-700 group-hover:scale-110'
          quality={80}
          sizes='(max-width: 40rem) 90vw, 350px'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
        <div className='absolute top-4 left-4'>
          <ExposeCardLocationPin city={expose.location.address.city} />
        </div>
      </div>
      <div className='p-6 md:p-8'>
        <h3 className='text-foreground group-hover:text-primary mb-2 font-serif text-2xl font-bold transition-colors md:text-3xl'>
          {getTranslation(locale, expose.title)}
        </h3>
        <p className='text-muted-foreground mb-6 leading-relaxed'>{getTranslation(locale, expose.subtitle)}</p>
        <div className='text-muted-foreground mb-6 flex items-center gap-6'>
          {bedPropertySummary && (
            <ExposeCardFeatureItem
              icon={LuBed}
              text={t('beds', { amount: bedPropertySummary.amount })}
            />
          )}
          {groupPropertySummary && (
            <ExposeCardFeatureItem
              icon={GrGroup}
              text={t('guests', { amount: groupPropertySummary.amount })}
            />
          )}
        </div>
        <div className='mb-6 flex flex-wrap gap-2'>
          <ExposeCardTag text={t('pool')} />
          <ExposeCardTag text={t('airConditioner')} />
          <ExposeCardTag text={t('wlan')} />
          <ExposeCardTag text={t('parking')} />
        </div>
        <Link
          className='bg-primary hover:bg-primary/90 shadow-ocean hover:shadow-large group/btn inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-8 text-sm font-medium whitespace-nowrap text-white transition-all duration-300'
          href={`/expose/${expose.id}`}
        >
          {t('showMe')}
          <MdOutlineOpenInNew
            size={16}
            className='ml-2 transition-transform group-hover/btn:translate-x-1'
          />
        </Link>
      </div>
    </div>
  )
}
