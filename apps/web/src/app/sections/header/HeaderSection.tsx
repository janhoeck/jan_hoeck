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
        <div className='flex w-full flex-col items-center justify-center text-center uppercase'>
          <Typography
            className='text-indigo-400'
            variant='heading'
            size={1}
          >
            Jan Höck
          </Typography>
          <Typography
            className='text-indigo-200'
            variant='heading'
            size={3}
          >
            Senior Frontend Entwickler
          </Typography>
          <Socials className='mt-4' />
        </div>
      </motion.div>
      <div className='absolute bottom-4 left-[50%] flex w-full -translate-x-2/4 flex-col items-center text-center uppercase text-gray-400'>
        <CgMouse className='mb-2 text-3xl' />
        <Typography
          className='text-inherit'
          variant='leadText'
        >
          Finde mehr heraus
        </Typography>
      </div>
    </Section>
  )
}
