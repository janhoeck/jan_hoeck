import { Typography } from '@jan_hoeck/ui'
import { ReactNode } from 'react'

export type SectionProps = {
  headline: string
  children: ReactNode
}

export const Section = (props: SectionProps) => {
  const { headline, children } = props
  return (
    <section>
      <Typography
        className='mb-4'
        variant='heading'
        size={2}
      >
        {headline}
      </Typography>
      {children}
    </section>
  )
}
