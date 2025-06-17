import React, { useState } from 'react'
import { NavigationItem } from './NavigationItem'
import { NavigationConfiguration } from './types'
import { usePathname } from '../../i18n/navigation'

export type DesktopNavigationContentProps = {
  configuration: NavigationConfiguration
}

export const DesktopNavigationContent = (props: DesktopNavigationContentProps) => {
  const { configuration } = props
  const currentPath = usePathname()

  const [activeAnchor, setActiveAnchor] = useState<HTMLElement | null>(null)

  return (
    <div className='relative hidden gap-2 py-4 sm:flex'>
      {configuration.map((item) => {
        const isActive = item.href === currentPath
        return (
          <NavigationItem
            key={item.href}
            ref={(element) => {
              if (isActive) {
                setActiveAnchor(element)
              }
            }}
            active={isActive}
            to={item.href}
          >
            {item.label}
          </NavigationItem>
        )
      })}
      {activeAnchor && (
        <div
          className='absolute h-2 rounded-t-xl bg-teal-600 transition-all'
          style={{
            width: activeAnchor.offsetWidth,
            left: activeAnchor.offsetLeft,
            bottom: 0,
          }}
        />
      )}
    </div>
  )
}
