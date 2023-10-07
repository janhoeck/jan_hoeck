import React, { useEffect } from 'react'
import { Section, Typography, useSectionsScrollerContext } from '../../components'
import { CgMouse } from 'react-icons/cg'
import { useInView } from 'react-intersection-observer'
import { Fade } from 'react-awesome-reveal'
import { Socials } from './components/Socials'

export const HeaderSection = () => {
    const { setColor } = useSectionsScrollerContext()
    const { ref, inView } = useInView({ threshold: 0.1 })

    useEffect(() => {
        if (inView) {
            setColor('#efedce')
        }
    }, [inView, setColor])

    return (
        <Section className='flex flex-col items-center justify-center bg-[#9cb8b3]' ref={ref}>
            <Fade duration={2000}>
                <div className='text-center flex flex-col items-center justify-center w-full uppercase'>
                    <Typography className='text-[#efedce]' variant='headline'>
                        Jan Höck
                    </Typography>
                    <Typography className='text-primary' variant='subHeadline'>
                        Senior Frontend Entwickler
                    </Typography>
                    <Socials className='mt-4' />
                </div>
            </Fade>
            <div className='absolute bottom-4 flex flex-col text-center items-center uppercase text-white/[0.5]'>
                <CgMouse className='mb-2 text-3xl' />
                <Typography className='text-inherit' variant='secondary'>
                    Finde mehr heraus
                </Typography>
            </div>
        </Section>
    )
}
