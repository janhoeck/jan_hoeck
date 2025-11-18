import { SurveyTableContainer } from './SurveyTableContainer'
import { CreateSurveyButton } from './creation/CreateSurveyButton'

export const SurveysConfigSection = () => {
  return (
    <section>
      <div className='flex justify-between'>
        <h2 className='text-2xl text-foreground mb-6'>Umfragen</h2>
        <CreateSurveyButton />
      </div>
      <SurveyTableContainer />
    </section>
  )
}
