import { Divider } from '@/components/shared/Divider'
import { DataContextProvider } from '@/components/views/config/DataContextProvider'
import { getCategories } from '@/lib/db/api/categories'
import { getClips } from '@/lib/db/api/clips'
import { getSurveys } from '@/lib/db/api/surveys'

import { CategoriesConfigSection } from './categories/CategoriesConfigSection'
import { ClipsConfigSection } from './clips/ClipsConfigSection'
import { SurveysConfigSection } from './surveys/SurveysConfigSection'

export const ConfigView = async () => {
  const [categories, clips, surveys] = await Promise.all([getCategories(), getClips(), getSurveys()])

  return (
    <DataContextProvider
      categories={categories}
      clips={clips}
      surveys={surveys}
    >
      <div className='container mx-auto max-w-6xl'>
        <h1 className='text-6xl font-extrabold font-sans-pro uppercase text-foreground mb-12 text-center'>
          Konfiguration
        </h1>
        <CategoriesConfigSection />
        <Divider />
        <ClipsConfigSection />
        <Divider />
        <SurveysConfigSection />
      </div>
    </DataContextProvider>
  )
}
