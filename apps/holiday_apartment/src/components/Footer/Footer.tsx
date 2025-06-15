import { Typography } from '@jan_hoeck/ui'
import { LanguageSelector } from '../LanguageSelector/LanguageSelector'
import { Link } from '../../i18n/navigation'

export const Footer = () => {
  return (
    <footer className='p-4'>
      <div className='flex items-center justify-between gap-4 px-4'>
        <LanguageSelector />
        <div className='flex gap-4'>
          <Link href='/imprint'>
            <Typography variant='smallText'>Impressum</Typography>
          </Link>
          <Link href='/contact'>
            <Typography variant='smallText'>Kontakt</Typography>
          </Link>
        </div>
      </div>
      <hr className='my-4 text-neutral-300' />
      <div className='w-full text-center'>
        <Typography variant='smallText'>All rights reserved</Typography>
      </div>
    </footer>
  )
}
