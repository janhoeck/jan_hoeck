import React, { useEffect, useRef, useState } from 'react'
import { NavigationItem } from './NavigationItem'
import { NavigationConfiguration } from './types'
import { Link, usePathname } from '../../../i18n/navigation'
import Image from 'next/image'
import { useResizeObserver } from '@jan_hoeck/ui'

export type DesktopNavigationContentProps = {
  configuration: NavigationConfiguration
}

export const DesktopNavigationContent = (props: DesktopNavigationContentProps) => {
  const { configuration } = props
  const currentPath = usePathname()

  const activeAnchorRef = useRef<HTMLAnchorElement | null>(null)

  const { width: anchorWidth } = useResizeObserver({
    ref: activeAnchorRef,
    box: 'border-box',
  })

  return (
    <div className='relative flex w-full justify-center gap-2 px-8 py-4'>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={40}
          height={40}
        />
      </Link>
      <div className='flex flex-1 justify-center'>
        {configuration.map((item) => {
          const isActive = item.href === currentPath
          return (
            <NavigationItem
              key={item.href}
              ref={isActive ? activeAnchorRef : undefined}
              active={isActive}
              to={item.href}
            >
              {item.label}
            </NavigationItem>
          )
        })}
      </div>
      {activeAnchorRef.current && (
        <div
          className='absolute h-2 rounded-t-xl bg-teal-600 transition-all'
          style={{
            width: anchorWidth,
            left: activeAnchorRef.current.offsetLeft,
            bottom: 0,
          }}
        />
      )}
    </div>
  )
}
