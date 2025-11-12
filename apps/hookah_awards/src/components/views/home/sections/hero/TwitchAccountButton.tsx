'use client'

import { signIn, useSession } from '@/lib/auth-client'
import { Button } from '@jan_hoeck/ui'
import Image from 'next/image'
import { FaTwitch } from 'react-icons/fa'

export const TwitchAccountButton = () => {
  const { data } = useSession()
  console.log(data)
  // If data is present, the user is logged in
  if (data) {
    return (
      <Button
        fullWidth
        variant='primary'
        className='h-12 text-xl pointer-events-none shadow-sm'
      >
        {data.user.image && (
          <div className='relative h-8 w-8 rounded-full overflow-hidden'>
            <Image
              width={150}
              height={150}
              src={data.user.image}
              alt={data.user.name}
            />
          </div>
        )}
        Viel Spaß beim Abstimmen, {data.user.name}
      </Button>
    )
  }

  return (
    <Button
      fullWidth
      variant='outline'
      className='h-12 text-xl'
      onClick={() =>
        signIn.social({
          provider: 'twitch',
          callbackURL: '/',
          errorCallbackURL: '/error',
          newUserCallbackURL: '/',
        })
      }
    >
      <FaTwitch size={20} />
      Mit Twitch anmelden
    </Button>
  )
}
