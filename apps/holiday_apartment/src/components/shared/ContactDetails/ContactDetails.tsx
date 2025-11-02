import { Typography } from '@jan_hoeck/ui'
import Link from 'next/link'
import { PiEnvelopeOpenLight, PiPhoneCallLight } from 'react-icons/pi'

export const ContactDetails = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <Typography>Olaf und Tina Asbach</Typography>
        <Typography>Calle Fernando Dodero 12</Typography>
        <Typography>30368 Los Urrutias</Typography>
        <Typography>Murcia</Typography>
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
