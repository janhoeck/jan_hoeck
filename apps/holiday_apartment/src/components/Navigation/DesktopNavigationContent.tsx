import React from 'react'
import { NavigationItem } from './NavigationItem'
import { NavigationConfiguration } from './types'

export type DesktopNavigationContentProps = {
  configuration: NavigationConfiguration
}

export const DesktopNavigationContent = (props: DesktopNavigationContentProps) => {
  const { configuration } = props
  return (
    <div className='hidden gap-2 sm:flex'>
      {configuration.map((item) => (
        <NavigationItem
          key={item.href}
          to={item.href}
        >
          {item.label}
        </NavigationItem>
      ))}
    </div>
  )
}
