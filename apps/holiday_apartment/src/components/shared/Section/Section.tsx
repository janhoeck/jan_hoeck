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
      <Typography
        className={variant === 'default' ? 'mb-4' : 'mb-2'}
        variant='heading'
        size={variant === 'default' ? 2 : 5}
      >
        {title}
      </Typography>
      {children}
    </section>
  )
}
