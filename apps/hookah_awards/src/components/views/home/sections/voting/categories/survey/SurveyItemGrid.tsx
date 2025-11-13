'use client'

import { Variants, motion, stagger } from 'motion/react'

import { Survey } from '../../../../../../../types'
import { SurveyItem } from './SurveyItem'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: stagger(0.07) },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18,
    },
  },
}

type SurveyItemGridProps = {
  surveys: Survey[]
}

export const SurveyItemGrid = (props: SurveyItemGridProps) => {
  const { surveys } = props
  return (
    <motion.div
      className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
      variants={container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      {surveys.map((survey) => (
        <motion.div
          key={survey.id}
          variants={item}
          whileHover={{
            scale: 1.04,
            transition: { type: 'spring', stiffness: 300, damping: 15 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <SurveyItem survey={survey} />
        </motion.div>
      ))}
    </motion.div>
  )
}
