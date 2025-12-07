import { twMerge } from 'tailwind-merge'

import { TwitchAccountButton } from './TwitchAccountButton'

export type HeroSectionProps = {
  className?: string
}

export const HeroSection = (props: HeroSectionProps) => {
  const { className } = props

  return (
    <section className={twMerge(['flex flex-col items-center', className])}>
      <div className='relative max-w-4xl mx-auto text-center space-y-8 px-4'>
        {/* Background effects */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl' />
        </div>

        {/* Main title */}
        <div className='space-y-2 mb-10'>
          <h1 className='font-bebas-neue text-6xl md:text-8xl tracking-wider text-primary'>HOOKAH AWARDS</h1>
          <div className='h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full' />
        </div>
        {/* Subtitle */}
        <div className='space-y-4 max-w-2xl mx-auto'>
          <h2 className='text-xl md:text-2xl font-semibold text-foreground'>
            Willkommen zum „Best of 2025" Community-Voting!
          </h2>
          <p className='text-muted-foreground leading-relaxed'>
            Das Jahr 2025 war voller legendärer Momente, unerwarteter Fails und absoluter Highlight-Clips. Jetzt ist
            deine Stimme gefragt! Hier kannst du für die besten Clips des Jahres abstimmen und gemeinsam mit der
            Community entscheiden, welche Momente in die Hall of Fame kommen.
          </p>
        </div>

        {/* How it works */}
        <div className='glass-card rounded-2xl p-6 md:p-8 max-w-xl mx-auto space-y-4'>
          <h3 className='font-semibold text-lg text-foreground'>So funktioniert's:</h3>
          <ul className='space-y-3 text-left'>
            <li className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center'>
                1
              </span>
              <span className='text-muted-foreground'>Logge dich mit deinem Twitch Account ein</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center'>
                2
              </span>
              <span className='text-muted-foreground'>Schau dir die nominierten Clips an</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center'>
                3
              </span>
              <span className='text-muted-foreground'>Wähle deinen Favoriten in jeder Kategorie</span>
            </li>
          </ul>
        </div>
        <TwitchAccountButton />
      </div>
    </section>
  )
}
