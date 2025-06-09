import React from 'react'
import { MeImage } from './components/MeImage'
import { Section, Skills, Skill } from '@/components'
import { twMerge } from 'tailwind-merge'
import { Typography } from '@jan_hoeck/ui/typography'

export const AboutMeSection = () => {
  return (
    <Section sectionKey='aboutMe' sectionBackgroundColor='bg-zinc-900' sectionIndicatorColor='bg-indigo-400'>
      <div
        className={twMerge([
          'flex flex-col items-center m-[5vh_auto_10vh_auto]',
          'lg:flex-row lg:m-[5vh_auto] lg:items-start',
        ])}
      >
        <MeImage className={twMerge(['flex-[1_0_auto] mr-0 mb-12', 'lg:mr-12 lg:mb-0'])} />
        <div className='flex flex-col [&>*:not(:last-child)]:mb-4'>
          <Typography variant='subHeadline' className='text-indigo-400'>
            WER BIN ICH?
          </Typography>
          <Typography className='leading-8 text-indigo-100'>
            Mein Name ist Jan Höck, ich wurde am 17.01.1996 geboren und komme aus der Nähe von Köln. Meine Leidenschaft
            ist das Programmieren. Seit meinem 14. Lebensjahr entwickle ich Software und stelle mich seitdem technischen
            Herausforderungen. Doch wie fing alles an? Ich habe mich schon immer für Technik interessiert. In meinem
            Kinderzimmer habe ich zum ersten Mal von Java gehört und fand es so interessant, dass ich es mir kurzerhand
            selbst beigebracht habe. Während meiner Ausbildung bin ich dann mit ReactJS in Berührung gekommen. Vom
            Backend zum Frontend! Seit gut 5 Jahren spezialisiere ich mich nun auf dieses Framework. Mein Fokus liegt
            dabei auf Web Performance, Best Practices und Design Standards.
            <br />
            <br />
            Als Senior Frontend Entwickler habe ich schon viel Code gelesen und geschrieben. Ich wurde mit vielen
            Herausforderungen konfrontiert und habe passende Lösungen gefunden. Dabei habe ich immer auf die
            Skalierbarkeit und Wartbarkeit des Codes geachtet. Außerdem ist es mir wichtig, in einem funktionierenden
            Team zu arbeiten. Jeder Entwickler hat seine eigenen Erfahrungen, Lösungsansätze und Stärken. Erst durch die
            Kombination dieser Menschen und einem gewissen Freiraum entsteht gute Software.
            <br />
            <br />
            Scrollen Sie gerne weiter nach unten, um zu meinen Referenzen zu gelangen. Ein Blick in den Code ist
            manchmal aussagekräftiger als jede Beschreibung über mich.
          </Typography>
          <Typography variant='subHeadline' className='text-indigo-400'>
            SKILLS
          </Typography>
          <Skills>
            <Skill imageSrc='/assets/skills/JavascriptLogo.svg' tooltip='Javascript' />
            <Skill imageSrc='/assets/skills/NodeJSLogo.svg' tooltip='NodeJS' />
            <Skill imageSrc='/assets/skills/TypescriptLogo.svg' tooltip='Typescript 5+' />
            <Skill imageSrc='/assets/skills/HTML5Logo.svg' tooltip='HTML 5' />
            <Skill imageSrc='/assets/skills/CSS3Logo.svg' tooltip='CSS 3' />
            <Skill imageSrc='/assets/skills/JavaLogo.svg' tooltip='Java' />
          </Skills>
          <Typography variant='subHeadline' className='text-indigo-400'>
            FRAMEWORKS
          </Typography>
          <Skills>
            <Skill imageSrc='/assets/frameworks/ReactLogo.svg' tooltip='React' />
            <Skill imageSrc='/assets/frameworks/MuiLogo.svg' tooltip='Mui 5' />
            <Skill imageSrc='/assets/frameworks/ReactJSSLogo.svg' tooltip='React JSS' />
            <Skill imageSrc='/assets/frameworks/jQueryLogo.svg' tooltip='jQuery' />
            <Skill imageSrc='/assets/frameworks/WebpackLogo.svg' tooltip='Webpack' />
            <Skill imageSrc='/assets/frameworks/SpringBootLogo.svg' tooltip='Spring Boot' />
            <Skill imageSrc='/assets/frameworks/TailwindLogo.svg' tooltip='TailwindCSS' />
            <Skill imageSrc='/assets/frameworks/NextJSLogo.svg' tooltip='NextJS' />
          </Skills>
          <Typography variant='subHeadline' className='text-indigo-400'>
            TESTING
          </Typography>
          <Skills>
            <Skill imageSrc='/assets/testing/CypressLogo.svg' tooltip='Cypress' />
            <Skill imageSrc='/assets/testing/JestLogo.svg' tooltip='Jest' />
            <Skill imageSrc='/assets/testing/SeleniumLogo.svg' tooltip='Selenium' />
            <Skill imageSrc='/assets/testing/PlaywrightLogo.svg' tooltip='Playwright' />
          </Skills>
        </div>
      </div>
    </Section>
  )
}
