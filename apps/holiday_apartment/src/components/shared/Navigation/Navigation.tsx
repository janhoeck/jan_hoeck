import { twMerge } from 'tailwind-merge'
import { DesktopNavigationContent } from './DesktopNavigationContent'
import { MobileNavigationContent } from './MobileNavigationContent'
import { NavigationConfiguration } from './types'
import { DesktopOnly } from '@/components/shared/Responsive/DesktopOnly'
import { MobileOnly } from '@/components/shared/Responsive/MobileOnly'

export type NavigationProps = {
  configuration: NavigationConfiguration
}

export const Navigation = (props: NavigationProps) => {
  const { configuration } = props

  return (
    <header
      className={twMerge([
        // default styles
        'sticky top-0 z-10 flex items-center bg-white',
      ])}
    >
      <DesktopOnly>
        <DesktopNavigationContent configuration={configuration} />
      </DesktopOnly>
      <MobileOnly>
        <MobileNavigationContent configuration={configuration} />
      </MobileOnly>
    </header>
  )
}
