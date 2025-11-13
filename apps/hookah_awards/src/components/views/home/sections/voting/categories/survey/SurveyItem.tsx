import { Button } from '@jan_hoeck/ui'

import { Survey } from '../../../../../../../types'

export type SurveyItemProps = {
  survey: Survey
}

export const SurveyItem = (props: SurveyItemProps) => {
  const { survey } = props
  return (
    <Button
      variant='outline'
      size='lg'
      className='w-full transition-all duration-300'
    >
      {survey.title}
    </Button>
  )
}
