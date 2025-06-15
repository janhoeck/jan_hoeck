import { ComponentProps, ElementType, ReactNode, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export type Variant = 'ghost' | 'basic'

export type ButtonProps<T extends ElementType> = ComponentProps<T> & {
  as?: T
  variant?: Variant
  className?: string
  rounded?: boolean
  fullWidth?: boolean
  centerText?: boolean
  children: ReactNode
}

export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const {
    as = 'button',
    children,
    className,
    variant = 'basic',
    rounded = true,
    fullWidth = false,
    centerText = false,
    disabled = false,
    ...restProps
  } = props

  const styles = useMemo(() => {
    return twMerge(
      clsx([
        'whitespace-nowrap cursor-pointer w-fit py-2 px-4 transition-colors flex gap-2 items-center h-[40px]',
        rounded && 'rounded-sm',
        fullWidth && 'w-full',
        centerText && 'justify-center',
        variant === 'ghost' && 'text-neutral-800 hover:bg-neutral-100',
        variant === 'basic' && 'bg-neutral-900 text-white',
        disabled && variant === 'basic' && 'bg-neutral-200 text-neutral-300',
      ])
    )
  }, [variant, rounded, fullWidth, centerText, disabled])

  const Component = as
  return (
    <Component
      className={twMerge(styles, className)}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </Component>
  )
}
