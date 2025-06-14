import { DesktopImageGrid } from './desktop/DesktopImageGrid'
import { ExposeConfiguration } from '../types'
import { MobileImageCarousel } from './mobile/MobileImageCarousel'

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
