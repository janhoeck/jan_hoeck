'use client'
import { ReactElement, useEffect, useState } from 'react'
import { NavigationItemProps } from './NavigationItem'
import { twMerge } from 'tailwind-merge'
import { useIsClient } from '@jan_hoeck/ui'
import { DesktopNavigationContent } from './DesktopNavigationContent'
import { MobileNavigationContent } from './MobileNavigationContent'
import { NavigationConfiguration } from './types'

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
        'z-1 sticky top-0 flex items-center bg-white p-4',
        // responsive
        'justify-end sm:justify-center',
        !didScroll && 'shadow-md',
        didScroll && 'border-b-1 border-neutral-300',
      ])}
    >
      <DesktopNavigationContent configuration={configuration} />
      <MobileNavigationContent configuration={configuration} />
    </header>
  )
}
