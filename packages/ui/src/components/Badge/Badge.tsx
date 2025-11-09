import { type VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        muted: 'border-transparent bg-muted text-muted-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

export const Badge = (props: BadgeProps) => {
  const { className, variant, ...restProps } = props
  return (
    <div
      className={clsx(badgeVariants({ variant }), className)}
      {...restProps}
    />
  )
}
