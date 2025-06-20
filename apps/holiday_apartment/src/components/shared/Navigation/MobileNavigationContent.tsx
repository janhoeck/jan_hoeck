import { Button } from '../Button/Button'
import { LiaBarsSolid } from 'react-icons/lia'
import React from 'react'
import { useLockBodyScroll, useOpenState } from '@jan_hoeck/ui'
import { twMerge } from 'tailwind-merge'
import { NavigationItem } from './NavigationItem'
import { NavigationConfiguration } from './types'
import { IoMdClose } from 'react-icons/io'
import { usePathname } from '../../../i18n/navigation'

export type MobileNavigationContentProps = {
  configuration: NavigationConfiguration
}

export const MobileNavigationContent = (props: MobileNavigationContentProps) => {
  const { configuration } = props
  const { isOpen, open, close } = useOpenState()
  const currentPath = usePathname()

  useLockBodyScroll(isOpen)

  return (
    <div className='py-4 sm:hidden'>
      <div className='flex'>
        <Button
          variant='ghost'
          onClick={open}
        >
          <LiaBarsSolid size={20} />
        </Button>
      </div>
      <div
        className={twMerge([
          'xs:w-full absolute right-0 top-0 h-dvh w-full bg-white pt-20 shadow-md',
          isOpen && 'animate-slide-in-right',
          !isOpen && 'hidden',
        ])}
      >
        <Button
          variant='ghost'
          className='absolute right-4 top-4'
          onClick={close}
        >
          <IoMdClose size={25} />
        </Button>
        <div className='flex flex-col gap-4'>
          {configuration.map((item) => {
            const isActive = item.href === currentPath
            return (
              <NavigationItem
                fullWidth
                centerText
                key={item.href}
                to={item.href}
                active={isActive}
                onClick={close}
              >
                {item.label}
              </NavigationItem>
            )
          })}
        </div>
      </div>
    </div>
  )
}
