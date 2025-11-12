import { Typography } from '@jan_hoeck/ui'
import Link from 'next/link'
import { PiEnvelopeOpenLight, PiPhoneCallLight } from 'react-icons/pi'

export const ContactDetails = () => {
  return (
    <div className='flex flex-col gap-2 text-foreground'>
      <div className='flex flex-col'>
        <span className='font-bold'>Olaf und Tina Asbach</span>
        <span>Calle Fernando Dodero 12</span>
        <span>30368 Los Urrutias</span>
        <span>Murcia</span>
      </div>
      <div className='flex items-center gap-4'>
        <PiPhoneCallLight size={30} />
        <Link href='tel:+34604482002'>
          <Typography>+34 604 482 002</Typography>
        </Link>
        <Link href='tel:+491764736718'>
          <Typography>+49 176 47 36 7 18</Typography>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <PiEnvelopeOpenLight size={30} />
        <Link href='mailto:casas.marmenor@gmx.de'>
          <Typography>casas.marmenor@gmx.de</Typography>
        </Link>
      </div>
    </div>
  )
}
