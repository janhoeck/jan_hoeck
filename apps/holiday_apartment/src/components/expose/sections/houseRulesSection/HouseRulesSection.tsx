import { ItemWithIcon } from '@/components/expose/ItemWithIcon/ItemWithIcon'
import { iconMapping } from '@/components/expose/iconMapping'
import { convertDescription, getTranslation } from '@/components/expose/utils'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { Section } from '@/components/shared/Section/Section'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'
import { useLocale, useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

export type HouseRulesSectionProps = {
  houseRules: ExposeConfiguration['houseRules']
}

export const HouseRulesSection = (props: HouseRulesSectionProps) => {
  const { houseRules } = props
  const { description } = houseRules
  const t = useTranslations('pages.expose.houseRulesSection')
  const locale = useLocale()

  return (
    <Section title={t('headline')}>
      <div className='flex flex-col gap-4'>
        <div className={twMerge(['flex max-w-[600px] flex-col gap-2', 'sm:flex-row'])}>
          <div className='flex flex-1 flex-col gap-4'>
            <ItemWithIcon
              icon={iconMapping['checkin']}
              label={t('itemHeadlines.checkin')}
              description={getTranslation(locale, houseRules.checkIn)}
            />
            <ItemWithIcon
              icon={iconMapping['checkout']}
              label={t('itemHeadlines.checkout')}
              description={getTranslation(locale, houseRules.checkOut)}
            />
          </div>
          <div className='flex flex-1 flex-col gap-4'>
            {houseRules.rules.map((rule) => {
              const icon = iconMapping[rule]
              const label = t(`itemHeadlines.${rule}`)
              const description = t(`descriptions.${rule}`)

              return (
                <ItemWithIcon
                  strikeThrough
                  key={rule}
                  icon={icon}
                  label={label}
                  description={description}
                />
              )
            })}
          </div>
        </div>
        {description && <ContentBlock items={convertDescription(locale, description)} />}
      </div>
    </Section>
  )
}
