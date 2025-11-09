import { type VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'
import { ButtonHTMLAttributes, ComponentProps, ElementType, ReactElement, Ref, forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors cursor-pointer disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'text-muted-foreground hover:bg-muted hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      fullWidth: {
        true: 'w-full',
        false: null,
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
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
  const { className, variant, size, as = 'button', fullWidth, ...restProps } = props
  const Component = as

  return (
    <Component
      className={clsx(buttonVariants({ variant, size, fullWidth, className }))}
      ref={ref}
      {...restProps}
    />
  )
}

ButtonInner.displayName = 'Button'

export const Button = forwardRef(ButtonInner) as <T extends ElementType>(
  props: ButtonProps<T>,
  ref?: Ref<T>
) => ReactElement
