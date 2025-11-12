import { Typography } from '@jan_hoeck/ui'
import { ReactNode } from 'react'

export type SectionProps = {
  title: string
  children: ReactNode
  variant?: 'default' | 'subsection'
}

export const Section = (props: SectionProps) => {
  const { title, variant = 'default', children } = props
  return (
    <section className='z-1'>
      {variant === 'default' ? (
        <h2 className='text-2xl font-serif font-bold text-foreground mb-4'>{title}</h2>
      ) : (
        <h3 className='text-xl font-serif font-bold text-foreground mb-2'>{title}</h3>
      )}
      {children}
    </section>
  )
}
