import { ClipTableContainer } from './ClipTableContainer'
import { CreateClipButton } from './creation/CreateClipButton'

export const ClipsConfigSection = () => {
  return (
    <section>
      <div className='flex justify-between'>
        <h2 className='text-2xl text-foreground mb-6'>Clips</h2>
        <CreateClipButton />
      </div>
      <ClipTableContainer />
    </section>
  )
}
