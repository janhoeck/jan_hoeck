'use client'
import React from 'react'
import { MeImage } from './components/MeImage'
import { Section, Typography, Skills, Skill } from '@/components'
import { twMerge } from 'tailwind-merge'
import colors from '@/tools/theme/colors'

export const AboutMeSection = () => {
    return (
        <Section sectionKey='aboutMe' sectionBackgroundColor='#eae5e5' sectionIndicatorColor={colors.primary.main}>
            <div
                className={twMerge([
                    'flex flex-col items-center m-[5vh_auto_10vh_auto] max-w-[1440px]',
                    'lg:flex-row lg:m-[5vh_auto] lg:items-start',
                ])}
            >
                <MeImage className={twMerge(['flex-[1_0_auto] mr-0 mb-12', 'lg:mr-12 lg:mb-0'])} />
                <div className='flex flex-col [&>*:not(:last-child)]:mb-4'>
                    <Typography variant='subHeadline'>WER BIN ICH?</Typography>
                    <Typography className='leading-8 text-secondary'>
                        Mein Name ist Jan Höck, ich wurde am 17.01.1996 geboren und komme aus der Nähe von Köln. Meine
                        Leidenschaft ist das Programmieren. Seit meinem 14. Lebensjahr entwickle ich Software und stelle
                        mich seitdem technischen Herausforderungen. Doch wie fing alles an? Ich habe mich schon immer
                        für Technik interessiert. In meinem Kinderzimmer habe ich zum ersten Mal von Java gehört und
                        fand es so interessant, dass ich es mir kurzerhand selbst beigebracht habe. Während meiner
                        Ausbildung bin ich dann mit ReactJS in Berührung gekommen. Vom Backend zum Frontend! Seit gut 5
                        Jahren spezialisiere ich mich nun auf dieses Framework. Mein Fokus liegt dabei auf Web
                        Performance, Best Practices und Design Standards.
                        <br />
                        <br />
                        Als Senior Frontend Entwickler habe ich schon viel Code gelesen und geschrieben. Ich wurde mit
                        vielen Herausforderungen konfrontiert und habe passende Lösungen gefunden. Dabei habe ich immer
                        auf die Skalierbarkeit und Wartbarkeit des Codes geachtet. Außerdem ist es mir wichtig, in einem
                        funktionierenden Team zu arbeiten. Jeder Entwickler hat seine eigenen Erfahrungen,
                        Lösungsansätze und Stärken. Erst durch die Kombination dieser Menschen und einem gewissen
                        Freiraum entsteht gute Software.
                        <br />
                        <br />
                        Scrollen Sie gerne weiter nach unten, um zu meinen Referenzen zu gelangen. Ein Blick in den Code
                        ist manchmal aussagekräftiger als jede Beschreibung über mich.
                    </Typography>
                    <Typography variant='subHeadline'>SKILLS</Typography>
                    <Skills>
                        <Skill imageSrc='/jan_hoeck/assets/skills/JavascriptLogo.svg' tooltip='Javascript' />
                        <Skill imageSrc='/jan_hoeck/assets/skills/NodeJSLogo.svg' tooltip='NodeJS' />
                        <Skill imageSrc='/jan_hoeck/assets/skills/TypescriptLogo.svg' tooltip='Typescript 5+' />
                        <Skill imageSrc='/jan_hoeck/assets/skills/HTML5Logo.svg' tooltip='HTML 5' />
                        <Skill imageSrc='/jan_hoeck/assets/skills/CSS3Logo.svg' tooltip='CSS 3' />
                        <Skill imageSrc='/jan_hoeck/assets/skills/JavaLogo.svg' tooltip='Java' />
                    </Skills>
                    <Typography variant='subHeadline'>FRAMEWORKS</Typography>
                    <Skills>
                        <Skill imageSrc='/jan_hoeck/assets/frameworks/ReactLogo.svg' tooltip='React' />
                        <Skill imageSrc='/jan_hoeck/assets/frameworks/MuiLogo.svg' tooltip='Mui 5' />
                        <Skill imageSrc='/jan_hoeck/assets/frameworks/ReactJSSLogo.svg' tooltip='React JSS' />
                        <Skill imageSrc='/jan_hoeck/assets/frameworks/jQueryLogo.svg' tooltip='jQuery' />
                        <Skill imageSrc='/jan_hoeck/assets/frameworks/WebpackLogo.svg' tooltip='Webpack' />
                        <Skill imageSrc='/jan_hoeck/assets/frameworks/SpringBootLogo.svg' tooltip='Spring Boot' />
                    </Skills>
                    <Typography variant='subHeadline'>TESTING</Typography>
                    <Skills>
                        <Skill imageSrc='/jan_hoeck/assets/testing/CypressLogo.svg' tooltip='Cypress' />
                        <Skill imageSrc='/jan_hoeck/assets/testing/JestLogo.svg' tooltip='Jest' />
                        <Skill imageSrc='/jan_hoeck/assets/testing/SeleniumLogo.svg' tooltip='Selenium' />
                    </Skills>
                </div>
            </div>
        </Section>
    )
}
