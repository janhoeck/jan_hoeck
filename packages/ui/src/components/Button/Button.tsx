import { ComponentProps, ElementType, forwardRef, ReactElement, ReactNode, Ref, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

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

const ButtonInner = <T extends ElementType>(props: ButtonProps<T>, ref?: Ref<T>) => {
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
    return twMerge([
      'whitespace-nowrap cursor-pointer w-fit py-2 px-4 transition-colors flex gap-2 items-center h-[40px]',
      rounded && 'rounded-sm',
      fullWidth && 'w-full',
      centerText && 'justify-center',
      variant === 'ghost' && 'text-neutral-800 hover:bg-neutral-100',
      variant === 'basic' && 'bg-teal-600 text-white hover:bg-teal-700',
      disabled && variant === 'basic' && 'bg-neutral-200 text-neutral-300',
    ])
  }, [variant, rounded, fullWidth, centerText, disabled])

  const Component = as
  return (
    <Component
      ref={ref}
      className={twMerge(styles, className)}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </Component>
  )
}

export const Button = forwardRef(ButtonInner) as <T extends ElementType>(
  props: ButtonProps<T>,
  ref?: Ref<T>
) => ReactElement
