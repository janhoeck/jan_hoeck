'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export const LoginView = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <main className='p-6'>
        <h1>Willkommen, {session.user?.name}</h1>
        <img
          src={session.user?.image ?? ''}
          alt='Avatar'
          width={50}
          height={50}
        />
        <p>Access Token: {(session as any).accessToken}</p>
        <button
          onClick={() => signOut()}
          className='mt-4 rounded bg-red-500 p-2 text-white'
        >
          Logout
        </button>
      </main>
    )
  }

  return (
    <main className='p-6'>
      <h1>Login mit Twitch</h1>
      <button
        onClick={() => signIn('twitch')}
        className='mt-4 rounded bg-purple-600 p-2 text-white'
      >
        Mit Twitch einloggen
      </button>
    </main>
  )
}
