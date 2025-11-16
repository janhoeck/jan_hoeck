import { type VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, ComponentProps, ElementType, ReactElement, Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-btn text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-btn-primary-bg text-btn-primary-fg hover:bg-btn-primary-hover-bg hover:text-color-btn-primary-hover-fg',
        secondary:
          'bg-btn-secondary-bg text-btn-secondary-fg hover:btn-secondary-hover-bg hover:btn-secondary-hover-fg',
        outline:
          'border border-btn-outlined-border bg-btn-outlined-bg text-btn-outlined-fg hover:bg-btn-outlined-hover-bg hover:text-btn-outlined-hover-fg hover:border-btn-outlined-hover-border',
        ghost: 'text-btn-ghost-fg bg-btn-ghost-bg hover:bg-btn-ghost-hover-bg hover:text-btn-ghost-hover-fg',
      },
      fullWidth: {
        true: 'w-full',
        false: null,
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3',
        lg: 'px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      fullWidth: false,
    },
  }
)

export type ButtonProps<T extends ElementType> = ComponentProps<T> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    as?: T
  }

const ButtonInner = <T extends ElementType>(props: ButtonProps<T>, ref: Ref<T>) => {
  const { className, variant, size, as = 'button', fullWidth, disabled, ...restProps } = props
  const Component = as

  return (
    <div className={twMerge(disabled && 'cursor-not-allowed', fullWidth && 'w-full')}>
      <Component
        className={twMerge(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled}
        ref={ref}
        {...restProps}
      />
    </div>
  )
}

ButtonInner.displayName = 'Button'

export const Button = forwardRef(ButtonInner) as <T extends ElementType>(
  props: ButtonProps<T>,
  ref?: Ref<T>
) => ReactElement
