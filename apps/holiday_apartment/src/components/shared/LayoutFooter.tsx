import { Typography } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'

import { Link } from '../../i18n/navigation'
import { LanguageSelector } from './LanguageSelector/LanguageSelector'

export const LayoutFooter = () => {
  const t = useTranslations('components.footer')
  return (
    <footer className='p-4'>
      <div className='flex flex-col items-end gap-4 px-4 sm:flex-row sm:items-center sm:justify-between'>
        <LanguageSelector />
        <div className='flex gap-4'>
          <Link href='/imprint'>
            <Typography variant='smallText'>{t('imprint')}</Typography>
          </Link>
          <Link href='/privacy'>
            <Typography variant='smallText'>{t('privacy')}</Typography>
          </Link>
          <Link href='/contact'>
            <Typography variant='smallText'>{t('contact')}</Typography>
          </Link>
        </div>
      </div>
      <hr className='my-4 text-neutral-300' />
      <div className='w-full text-center'>
        <Typography variant='smallText'>{t('allRightsReserved')}</Typography>
      </div>
    </footer>
  )
}
