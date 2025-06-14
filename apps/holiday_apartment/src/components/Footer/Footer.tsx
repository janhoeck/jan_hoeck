import Link from 'next/link'
import { Typography } from '@jan_hoeck/ui'

export const Footer = () => {
  return (
    <div className='p-4'>
      <div className='flex items-center justify-end gap-4 px-2'>
        <Link
          scroll
          href='/imprint'
        >
          <Typography variant='smallText'>Impressum</Typography>
        </Link>
        <Link
          scroll
          href='/contact'
        >
          <Typography variant='smallText'>Kontakt</Typography>
        </Link>
      </div>
      <hr className='my-4 text-neutral-300' />
      <div className='w-full text-center'>
        <Typography variant='smallText'>All rights reserved</Typography>
      </div>
    </div>
  )
}
