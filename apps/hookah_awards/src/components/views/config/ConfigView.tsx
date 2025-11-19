import { getCategories } from '@/lib/db/api/categories'
import { getClips } from '@/lib/db/api/clips'
import { getSurveys } from '@/lib/db/api/surveys'
import { Divider } from '@jan_hoeck/ui'
import { Suspense } from 'react'

import { ConfigSectionSkeleton } from './ConfigSectionSkeleton'
import { DataContextProvider } from './DataContextProvider'
import { CategoriesConfigSection } from './categories/CategoriesConfigSection'
import { ClipsConfigSection } from './clips/ClipsConfigSection'
import { SurveysConfigSection } from './surveys/SurveysConfigSection'

const DataLoader = async () => {
  const [categories, clips, surveys] = await Promise.all([getCategories(), getClips(), getSurveys()])

  return (
    <DataContextProvider
      categories={categories}
      clips={clips}
      surveys={surveys}
    >
      <CategoriesConfigSection />
      <Divider />
      <ClipsConfigSection />
      <Divider />
      <SurveysConfigSection />
    </DataContextProvider>
  )
}

export const ConfigView = () => {
  return (
    <div className='container mx-auto max-w-6xl'>
      <h1 className='text-6xl font-extrabold font-sans-pro uppercase text-foreground mb-12 text-center'>
        Konfiguration
      </h1>
      <Suspense fallback={<ConfigSectionSkeleton />}>
        <DataLoader />
      </Suspense>
    </div>
  )
}
