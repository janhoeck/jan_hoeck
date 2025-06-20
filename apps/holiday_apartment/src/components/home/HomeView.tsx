import { WelcomeImage } from './WelcomeImage/WelcomeImage'
import { ContentContainer } from '@components/shared/Container/ContentContainer'
import React from 'react'
import { WelcomeSection } from './WelcomeSection/WelcomeSection'
import { ExposeListSection } from './ExposeListSection/ExposeListSection'

export const HomeView = () => {
  return (
    <div className='flex flex-col gap-6'>
      <WelcomeImage />
      <ContentContainer>
        <div className='flex flex-col gap-10'>
          <WelcomeSection />
          <ExposeListSection />
        </div>
      </ContentContainer>
    </div>
  )
}
