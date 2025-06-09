'use client'
import React from 'react'
import { Section } from '@/components'
import { CgMouse } from 'react-icons/cg'
import { Socials } from './components/Socials'
import { motion } from 'framer-motion'
import { Typography } from '@jan_hoeck/ui'

export const HeaderSection = () => {
  return (
    <Section
      className='flex flex-col items-center justify-center'
      sectionKey='header'
      sectionBackgroundColor='bg-zinc-900'
      sectionIndicatorColor='bg-indigo-400'
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className='text-center flex flex-col items-center justify-center w-full uppercase'>
          <Typography className='text-indigo-400' variant='headline'>
            Jan Höck
          </Typography>
          <Typography className='text-indigo-200' variant='subHeadline'>
            Senior Frontend Entwickler
          </Typography>
          <Socials className='mt-4' />
        </div>
      </motion.div>
      <div className='absolute w-full left-[50%] bottom-4 -translate-x-2/4 flex flex-col text-center items-center uppercase text-gray-400'>
        <CgMouse className='mb-2 text-3xl' />
        <Typography className='text-inherit' variant='secondary'>
          Finde mehr heraus
        </Typography>
      </div>
    </Section>
  )
}
