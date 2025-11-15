import React from 'react'

import { InnerContent } from '../components/InnerContent/InnerContent'
import { MainContent } from '../components/MainContent/MainContent'
import { ViewFooter } from '../components/ViewFooter/ViewFooter'
import { ViewHeader } from '../components/ViewHeader/ViewHeader'

export default function NotFoundView() {
  return (
    <MainContent className='bg-gradient-to-t from-rose-300 to-pink-900'>
      <ViewHeader />
      <InnerContent className='text-2xl text-white'>
        <h2>Betreten verboten!</h2>
        <span>Du darfst dieses Türchen noch nicht öffnen! Zack zack, zurück mit Dir!</span>
      </InnerContent>
      <ViewFooter />
    </MainContent>
  )
}
