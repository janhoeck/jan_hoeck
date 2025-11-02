import React from 'react'

import { ExposeListSection } from './ExposeListSection/ExposeListSection'
import { MainSection } from './MainSection/MainSection'
import { WelcomeSection } from './WelcomeSection/WelcomeSection'

export const HomeView = () => {
  return (
    <div className='flex flex-col'>
      <WelcomeSection />
      <MainSection />
      <ExposeListSection />
    </div>
  )
}
