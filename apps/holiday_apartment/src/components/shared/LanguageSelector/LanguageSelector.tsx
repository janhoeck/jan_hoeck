'use client'
import { Select } from 'radix-ui'
import { routing } from '../../../i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import { LiaAngleDownSolid, LiaCheckSolid } from 'react-icons/lia'
import { usePathname, useRouter } from '../../../i18n/navigation'
import { Button } from '@jan_hoeck/ui'

export const LanguageSelector = () => {
  const t = useTranslations('components.languageSelector')
  const currentLocale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleValueChange = (locale: string) => {
    router.replace({ pathname }, { locale })
    router.refresh()
  }

  return (
    <Select.Root
      value={currentLocale}
      onValueChange={handleValueChange}
    >
      <Select.Trigger className='border-1 flex items-center gap-4 rounded-sm border-neutral-300 bg-white px-2 py-1'>
        <Select.Value placeholder={t('placeholder')}>{t(`options.${currentLocale}`)}</Select.Value>
        <Select.Icon className='SelectIcon'>
          <LiaAngleDownSolid />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className='z-10 overflow-hidden rounded-sm bg-white py-2 shadow-md'
          side='bottom'
          position='popper'
        >
          {routing.locales.map((locale) => (
            <Select.Item
              asChild
              key={locale}
              value={locale}
            >
              <Button
                fullWidth
                variant='ghost'
              >
                {t(`options.${locale}`)}
                {locale === currentLocale && <LiaCheckSolid />}
              </Button>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
