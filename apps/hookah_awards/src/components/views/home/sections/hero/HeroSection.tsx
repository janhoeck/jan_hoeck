'use client'

import { twMerge } from 'tailwind-merge'

import { TwitchAccountButton } from './TwitchAccountButton'

export type HeroSectionProps = {
  className?: string
}

export const HeroSection = (props: HeroSectionProps) => {
  const { className } = props

  return (
    <section className={twMerge(['flex flex-col items-center', className])}>
      <div className='max-w-2xl'>
        <h1 className='text-6xl font-bold text-center mx-2 text-foreground text-shadow-3d mb-4 font-sans-pro uppercase'>
          Hookah Awards
        </h1>
        <p className='mb-2 text-foreground text-lg'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam
        </p>
        <p className='text-foreground text-lg mb-6'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam
        </p>
        <TwitchAccountButton />
      </div>
    </section>
  )
}
