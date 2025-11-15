import { Card, CardContent } from '@jan_hoeck/ui'

export const GeneralStatisticSection = () => {
  return (
    <section>
      <h2 className='text-2xl text-foreground mb-6'>Allgemeine Statistik</h2>
      <div className='grid grid-cols-3 space-x-4'>
        <Card>
          <CardContent className='text-center'>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-primary'>3</span>
              <span className='text-foreground'>Kategorien</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='text-center'>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-primary'>250</span>
              <span className='text-foreground'>Clips</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='text-center'>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-primary'>1200</span>
              <span className='text-foreground'>Votes</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
