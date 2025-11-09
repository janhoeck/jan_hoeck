import { type VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'
import * as React from 'react'
import { HTMLAttributes, forwardRef } from 'react'

const cardVariants = cva('rounded-lg bg-card text-card-foreground shadow-sm', {
  variants: {
    withBorder: {
      true: 'border border-border',
      false: null,
    },
  },
  defaultVariants: {
    withBorder: false,
  },
})

export type CardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, withBorder, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(cardVariants({ withBorder, className }))}
    {...props}
  />
))
Card.displayName = 'Card'

export const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={clsx('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={clsx('leading-relaxed text-muted-foreground', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx('p-6 flex flex-col space-y-4', className)}
      {...props}
    />
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'
