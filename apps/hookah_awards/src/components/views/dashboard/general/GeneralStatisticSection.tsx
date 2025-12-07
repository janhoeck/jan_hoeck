'use client'

import { useDataContext } from '@/components/contexts/data/DataContext'
import { Card, CardContent } from '@jan_hoeck/ui'

export const GeneralStatisticSection = () => {
  const { categories, clips, votes } = useDataContext()
  return (
    <section>
      <h2 className='text-2xl text-foreground mb-6'>Allgemeine Statistik</h2>
      <div className='grid grid-cols-3 space-x-4'>
        <Card className='glass-card'>
          <CardContent className='text-center'>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-primary'>{categories.length}</span>
              <span className='text-foreground'>Kategorien</span>
            </div>
          </CardContent>
        </Card>
        <Card className='glass-card'>
          <CardContent className='text-center'>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-primary'>{clips.length}</span>
              <span className='text-foreground'>Clips</span>
            </div>
          </CardContent>
        </Card>
        <Card className='glass-card'>
          <CardContent className='text-center'>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-primary'>{votes.length}</span>
              <span className='text-foreground'>Votes</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
