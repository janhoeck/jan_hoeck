import React from 'react'
import { MeImage } from './components/MeImage'
import { Section, Typography } from '../../components'
import { Fade } from 'react-awesome-reveal'
import { Skills } from '../../components/Skills/Skills'
import { skills } from './components/skills'
import { frameworks } from './components/frameworks'
import { testing } from './components/testing'
import { twMerge } from 'tailwind-merge'
import colors from '../../tools/theme/colors'

export const AboutMeSection = () => {
    return (
        <Section
            className='bg-[#eae5e5] p-6'
            sectionKey='aboutMe'
            sectionBackgroundColor='#eae5e5'
            sectionIndicatorColor={colors.primary.main}
        >
            <div
                className={twMerge([
                    'flex flex-col items-center m-[5vh_auto_10vh_auto] max-w-[1440]',
                    'lg:flex-row lg:m-[5vh_auto] lg:items-start',
                ])}
            >
                <Fade triggerOnce direction='left'>
                    <MeImage className={twMerge(['mr-0 mb-12', 'lg:mr-12 lg:mb-0'])} />
                </Fade>
                <Fade triggerOnce direction='up'>
                    <div className='flex flex-col [&>*:not(:last-child)]:mb-4'>
                        <Typography variant='subHeadline'>WER BIN ICH?</Typography>
                        <Typography className='leading-8 text-secondary'>
                            Ich heiße Jan Höck, wurde am 17.01.1996 geboren und komme aus der Nähe von Köln. Meine
                            Leidenschaft ist die Programmierung. Seit meinem 14. Lebensjahr entwickle ich Software und
                            stelle mich seitdem technischen Herausforderungen.
                            <br />
                            Doch wie begann alles?
                            <br />
                            Ich war schon immer an Technik interessiert. In meinem Kinderzimmer habe ich das erste Mal
                            von Java gehört und fand es so interessant, dass ich mir es kurzerhand selber beigebracht
                            habe. Während meiner Ausbildung bin ich dann mit ReactJS in Berührung gekommen. Von Backend
                            zu Frontend! Nun spezialisiere ich mich seit guten 5 Jahren auf dieses Framework. Mein Fokus
                            liegt hierbei auf Web Performance, Best Practices und Design Standards.
                            <br />
                            <br />
                            Als Senior Frontend Entwickler habe ich schon viel Code gelesen und geschrieben. Ich bin vor
                            viele Herausforderungen gestellt worden und fand geeignete Lösungen. Dabei lag mein Blick
                            immer auf die Skalier- und Wartbarkeit des Codes. Zudem ist es mir wichtig in einem
                            funktionierenden Team zu arbeiten. Jeder Entwickler hat seine eigenen Erfahrungen, seine
                            eigenen Ansätze etwas zu lösen und eigene Stärken. Nur durch eine Kombination aus diesen
                            Menschen und einem gewissen Freiraum, erschafft man gute Software.
                            <br />
                            <br />
                            Scroll gerne weiter runter, um zu meinen Referenzen zu gelangen. Ein Blick in den Code ist
                            manchmal eindeutiger, als jede Beschreibung über mich selbst.
                        </Typography>
                        <Typography variant='subHeadline'>SKILLS</Typography>
                        <Skills skills={skills} />
                        <Typography variant='subHeadline'>FRAMEWORKS</Typography>
                        <Skills skills={frameworks} />
                        <Typography variant='subHeadline'>TESTING</Typography>
                        <Skills skills={testing} />
                    </div>
                </Fade>
            </div>
        </Section>
    )
}
