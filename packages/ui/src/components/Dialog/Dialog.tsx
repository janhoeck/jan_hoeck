import {
  Dialog,
  DialogPortal,
  DialogTrigger,
  DialogClose as RadixDialogClose,
  DialogContent as RadixDialogContent,
  DialogContentProps as RadixDialogContentProps,
  DialogOverlay as RadixDialogOverlay,
  DialogTitle as RadixDialogTitle,
} from '@radix-ui/react-dialog'
import React from 'react'
import { GoX } from 'react-icons/go'
import { twMerge } from 'tailwind-merge'

import { Button, ButtonProps } from '../Button'

const DialogOverlay = () => <RadixDialogOverlay className='bg-dialog-backdrop backdrop-blur-sm fixed inset-0' />

export type DialogContentProps = RadixDialogContentProps & {
  title?: string | React.ReactNode
  primaryAction?: {
    label: string
  } & Omit<ButtonProps<'button'>, 'variant' | 'children'>
}

const DialogContent = (props: DialogContentProps) => {
  const { className, children, title, primaryAction, ...restProps } = props

  const { label: primaryActionLabel, ...restPrimaryAction } = primaryAction ?? {}

  return (
    <RadixDialogContent
      className={twMerge('fixed inset-0 flex items-center justify-center', className)}
      {...restProps}
    >
      <div className='relative bg-dialog-background rounded-lg text-dialog-foreground min-w-2xl'>
        <div className='px-6 h-14 border-b border-dialog-border text-lg font-bold flex flex-row justify-between items-center space-x-6'>
          <RadixDialogTitle>{title}</RadixDialogTitle>
          <RadixDialogClose asChild>
            <Button
              variant='ghost'
              size='icon'
            >
              <GoX size={24} />
            </Button>
          </RadixDialogClose>
        </div>
        <div className='px-6 py-4'>{children}</div>
        {primaryAction && (
          <div className='flex flex-row space-x-6 justify-end h-16 items-center px-6'>
            <Button
              variant='primary'
              {...restPrimaryAction}
            >
              {primaryActionLabel}
            </Button>
          </div>
        )}
      </div>
    </RadixDialogContent>
  )
}

export { Dialog, DialogPortal, DialogTrigger, DialogOverlay, DialogContent }
