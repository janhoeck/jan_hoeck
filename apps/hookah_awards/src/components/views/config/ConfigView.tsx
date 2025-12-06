import { Headline } from '@/components/shared/Headline'
import { Divider } from '@jan_hoeck/ui'

import { CategoriesConfigSection } from './categories/CategoriesConfigSection'
import { ClipsConfigSection } from './clips/ClipsConfigSection'
import { SurveysConfigSection } from './surveys/SurveysConfigSection'

export const ConfigView = () => {
  return (
    <div className='container mx-auto max-w-6xl'>
      <Headline>Konfiguration</Headline>
      <CategoriesConfigSection />
      <Divider />
      <ClipsConfigSection />
      <Divider />
      <SurveysConfigSection />
    </div>
  )
}
