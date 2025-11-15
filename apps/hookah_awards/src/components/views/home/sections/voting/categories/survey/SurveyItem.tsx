import { Survey } from '../../../../../../../types'
import { VoteButton } from '../VoteButton'

export type SurveyItemProps = {
  survey: Survey
}

export const SurveyItem = (props: SurveyItemProps) => {
  const { survey } = props
  return (
    <VoteButton
      className='w-full transition-all duration-300'
      referenceId={survey.id}
      type='survey'
      label={survey.title}
    />
  )
}
