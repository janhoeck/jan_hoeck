import { PropsWithChildren } from 'react'

export const Headline = ({ children }: PropsWithChildren) => (
  <div className='space-y-2 mb-10 text-center'>
    <h1 className='font-bebas-neue text-6xl md:text-8xl tracking-wider text-primary'>{children}</h1>
    <div className='h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full' />
  </div>
)
