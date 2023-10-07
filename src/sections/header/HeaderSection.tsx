import React from 'react'
import { Section, Typography } from '../../components'
import { CgMouse } from 'react-icons/cg'
import { Fade } from 'react-awesome-reveal'
import { Socials } from './components/Socials'

export const HeaderSection = () => {
    return (
        <Section
            className='flex flex-col items-center justify-center'
            sectionKey='header'
            sectionBackgroundColor='#9cb8b3'
            sectionIndicatorColor='#efedce'
        >
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
