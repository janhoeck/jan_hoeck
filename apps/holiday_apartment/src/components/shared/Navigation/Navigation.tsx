'use client'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { DesktopNavigationContent } from './DesktopNavigationContent'
import { MobileNavigationContent } from './MobileNavigationContent'
import { NavigationConfiguration } from './types'
import { DesktopOnly } from '@components/shared/Responsive/DesktopOnly'
import { MobileOnly } from '@components/shared/Responsive/MobileOnly'

export type NavigationProps = {
  configuration: NavigationConfiguration
}

export const Navigation = (props: NavigationProps) => {
  const { configuration } = props
  const [didScroll, setDidScroll] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setDidScroll(document.body.scrollTop !== 0)
    }

    document.body.addEventListener('scroll', handleScroll, false)
    return () => {
      document.body.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={twMerge([
        // default styles
        'sticky top-0 z-10 flex items-center bg-white px-4 shadow-md',
        didScroll && 'border-b-1 border-neutral-300 shadow-none',
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
