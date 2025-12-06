import { Headline } from '@/components/shared/Headline'
import { twMerge } from 'tailwind-merge'

import { TwitchAccountButton } from './TwitchAccountButton'
import styles from './styles.module.css'

export type HeroSectionProps = {
  className?: string
}

export const HeroSection = (props: HeroSectionProps) => {
  const { className } = props

  return (
    <section className={twMerge(['flex flex-col items-center', className])}>
      <div className='max-w-2xl'>
        <Headline className={twMerge('text-primary', styles.headline)}>Hookah Awards</Headline>
        <h2 className='text-2xl mb-4 font-bold'>Willkommen zum „Best of 2025“ Community-Voting!</h2>
        <p className='mb-4 text-foreground'>
          Das Jahr 2025 war voller legendärer Momente, unerwarteter Fails und absoluter Highlight-Clips. Jetzt ist deine
          Stimme gefragt! Hier kannst du für die besten Clips des Jahres abstimmen und gemeinsam mit der Community
          entscheiden, welche Momente in die Hall of Fame kommen.
        </p>
        <div className='mb-10'>
          <p className='text-xl font-bold mb-2'>So funktioniert's:</p>
          <div>
            <ul className='list-decimal list-inside'>
              <li>Logge dich mit deinem Twitch Account ein</li>
              <li>Schau dir die nominierten Clips an</li>
              <li>Wähle deinen Favoriten in jeder Kategorie</li>
            </ul>
          </div>
        </div>
        <TwitchAccountButton />
      </div>
    </section>
  )
}
