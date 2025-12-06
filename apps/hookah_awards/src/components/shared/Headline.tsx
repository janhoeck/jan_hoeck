import { PropsWithChildren } from 'react'

export const Headline = ({ children }: PropsWithChildren) => (
  <h1 className='text-6xl font-extrabold font-sans-pro uppercase text-foreground mb-12 text-center'>{children}</h1>
)
