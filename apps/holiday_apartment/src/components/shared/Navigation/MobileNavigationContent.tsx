'use client'
import { LiaBarsSolid } from 'react-icons/lia'
import React from 'react'
import { Button, useLockBodyScroll, useOpenState } from '@jan_hoeck/ui'
import { twMerge } from 'tailwind-merge'
import { NavigationItem } from './NavigationItem'
import { NavigationConfiguration } from './types'
import { IoMdClose } from 'react-icons/io'
import { Link, usePathname } from '../../../i18n/navigation'
import Image from 'next/image'

export type MobileNavigationContentProps = {
  configuration: NavigationConfiguration
}

export const MobileNavigationContent = (props: MobileNavigationContentProps) => {
  const { configuration } = props
  const { isOpen, open, close } = useOpenState()
  const currentPath = usePathname()

  useLockBodyScroll(isOpen)

  return (
    <div className='flex w-full justify-between px-4 py-4'>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={40}
          height={40}
        />
      </Link>
      <Button
        variant='ghost'
        onClick={open}
      >
        <LiaBarsSolid size={20} />
      </Button>
      <div
        className={twMerge([
          'xs:w-full absolute top-0 right-0 h-dvh w-full bg-white pt-20 shadow-md',
          isOpen && 'animate-slide-in-right',
          !isOpen && 'hidden',
        ])}
      >
        <Button
          variant='ghost'
          className='absolute top-4 right-4'
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
