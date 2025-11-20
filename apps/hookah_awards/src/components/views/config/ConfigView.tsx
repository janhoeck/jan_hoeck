import { Divider } from '@jan_hoeck/ui'

import { CategoriesConfigSection } from './categories/CategoriesConfigSection'
import { ClipsConfigSection } from './clips/ClipsConfigSection'
import { SurveysConfigSection } from './surveys/SurveysConfigSection'

export const ConfigView = () => {
  return (
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
  )
}
