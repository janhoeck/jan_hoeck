import { Typography } from '@jan_hoeck/ui'
import { ReactNode } from 'react'

export type SectionProps = {
  headline: string
  children: ReactNode
  variant?: 'default' | 'subsection'
}

export const Section = (props: SectionProps) => {
  const { headline, variant = 'default', children } = props
  return (
    <section className='z-1'>
      <Typography
        className={variant === 'default' ? 'mb-4' : 'mb-2'}
        variant='heading'
        size={variant === 'default' ? 2 : 5}
      >
        {headline}
      </Typography>
      {children}
    </section>
  )
}
