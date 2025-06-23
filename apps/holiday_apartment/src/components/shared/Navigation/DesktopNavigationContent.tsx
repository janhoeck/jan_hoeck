import React, { useEffect, useState } from 'react'
import { NavigationItem } from './NavigationItem'
import { NavigationConfiguration } from './types'
import { Link, usePathname } from '../../../i18n/navigation'
import Image from 'next/image'

export type DesktopNavigationContentProps = {
  configuration: NavigationConfiguration
}

export const DesktopNavigationContent = (props: DesktopNavigationContentProps) => {
  const { configuration } = props
  const currentPath = usePathname()

  const [activeAnchor, setActiveAnchor] = useState<HTMLAnchorElement | null>(null)
  const [offsetLeft, setOffsetLeft] = useState<number>(0)

  useEffect(() => {
    if (!activeAnchor) {
      return
    }

    setOffsetLeft(activeAnchor.offsetLeft)
    const handleResize = () => {
      setOffsetLeft(activeAnchor.offsetLeft)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeAnchor])

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
              ref={isActive ? setActiveAnchor : undefined}
              active={isActive}
              to={item.href}
            >
              {item.label}
            </NavigationItem>
          )
        })}
      </div>
      {activeAnchor && (
        <div
          className='absolute h-2 rounded-t-xl bg-teal-600 transition-all'
          style={{
            width: activeAnchor.offsetWidth,
            left: offsetLeft,
            bottom: 0,
          }}
        />
      )}
    </div>
  )
}
