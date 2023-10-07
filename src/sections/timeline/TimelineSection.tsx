import React, { useEffect } from 'react'
import { Section } from '../../components/Section'
import { SectionCaption, Timeline, TimelineItem, Typography, useSectionsScrollerContext } from '../../components'
import { useInView } from 'react-intersection-observer'
import { shadeColor } from '../../tools/utils/ColorUtils'
import colors from '../../tools/theme/colors'

export const TimelineSection = () => {
    const { setColor } = useSectionsScrollerContext()

    const { ref, inView } = useInView({ threshold: 0.1 })

    useEffect(() => {
        if (inView) {
            setColor(colors.white)
        }
    }, [inView, setColor])

    return (
        <Section className='bg-primary-main p-4' ref={ref}>
            <SectionCaption mainTextColor={colors.white} backgroundTextColor={shadeColor(colors.primary.main, 4)}>
                Lebenslauf
            </SectionCaption>
            <div className='mt-4 sm:mt-6 md:mt-8 xl:mt-10 p-0 sm:p-2 md:p-4 xl:p-6'>
                <Timeline>
                    <TimelineItem headline='Juli 2012 - Juli 2014'>
                        <Typography>Fachabitur im Bereich Informatik</Typography>
                        <Typography variant='secondary'>
                            <i>Carl-Reuther-Berufskolleg Hennef</i>
                        </Typography>
                    </TimelineItem>
                    <TimelineItem headline='August 2014 - Februar 2016'>
                        <Typography>Ausbildung zum Fachinformatiker für Anwendungsentwicklung</Typography>
                        <Typography variant='secondary'>FLOWFACT GmbH (ImmobilienScout24)</Typography>
                    </TimelineItem>
                    <TimelineItem headline='Februar 2016 - Januar 2019'>
                        <Typography>Frontend React Entwickler</Typography>
                        <Typography variant='secondary'>FLOWFACT GmbH (ImmobilienScout24)</Typography>
                        <Typography variant='secondary'>
                            <ul>
                                <li>Entwicklung von Microservices mit Java</li>
                                <li>Frontendentwicklung mit React</li>
                            </ul>
                        </Typography>
                    </TimelineItem>
                    <TimelineItem headline='Januar 2019 - Jetzt'>
                        <Typography>Frontend Senior React Entwickler</Typography>
                        <Typography variant='secondary'>FLOWFACT GmbH (ImmobilienScout24)</Typography>
                        <Typography variant='secondary'>
                            <ul>
                                <li>Verantwortlich für das Frontend Team</li>
                                <li>Verantwortlich für das Onboarding neuer Kollegen</li>
                                <li>Entwicklung mit React 17 (Hooks, Context etc.)</li>
                                <li>Aufbau eines Monorepository ausgelegt auf weit über 50.000 Kunden</li>
                                <li>
                                    Sicherstellung der Frontend Wartbarkeit durch kleine, logikgetrennte Componenten
                                </li>
                                <li>Vieles mehr...</li>
                            </ul>
                        </Typography>
                    </TimelineItem>
                </Timeline>
            </div>
        </Section>
    )
}
