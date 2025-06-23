import { DesktopImageGrid } from './desktop/DesktopImageGrid'
import { MobileImageCarousel } from './mobile/MobileImageCarousel'
import { ExposeConfiguration } from '@/types/ExposeConfiguration'

export type ExposeImagesProps = {
  imageSources: ExposeConfiguration['imageSources']
}

export const ExposeImages = (props: ExposeImagesProps) => {
  const { imageSources } = props
  return (
    <div>
      <div className='block sm:hidden'>
        <MobileImageCarousel imageSources={imageSources} />
      </div>
      <div className='hidden sm:block'>
        <DesktopImageGrid imageSources={imageSources} />
      </div>
    </div>
  )
}
