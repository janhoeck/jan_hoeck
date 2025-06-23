import { Section } from '@/components/shared/Section/Section'
import { useTranslations } from 'next-intl'
import { ItemWithIcon } from '@/components/expose/ItemWithIcon/ItemWithIcon'
import { iconMapping } from '@/components/expose/iconMapping'
import { twMerge } from 'tailwind-merge'
import { ContentBlock } from '@/components/shared/ContentBlock/ContentBlock'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

export type HouseRulesSectionProps = {
  houseRules: ExposeConfiguration['houseRules']
}

export const HouseRulesSection = (props: HouseRulesSectionProps) => {
  const { houseRules } = props
  const { description } = houseRules
  const t = useTranslations('pages.expose.houseRulesSection')
  return (
    <Section headline={t('headline')}>
      <div className='flex flex-col gap-4'>
        <div className={twMerge(['flex max-w-[600px] flex-col gap-2', 'sm:flex-row'])}>
          <div className='flex flex-1 flex-col gap-4'>
            <ItemWithIcon
              icon={iconMapping['checkin']}
              label={t('itemHeadlines.checkin')}
              description={houseRules.checkIn}
            />
            <ItemWithIcon
              icon={iconMapping['checkout']}
              label={t('itemHeadlines.checkout')}
              description={houseRules.checkOut}
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
        {description && <ContentBlock items={description} />}
      </div>
    </Section>
  )
}
