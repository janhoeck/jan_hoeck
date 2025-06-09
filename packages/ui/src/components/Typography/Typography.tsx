import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Variant = 'hugeHeadline' | 'headline' | 'subHeadline' | 'text' | 'secondary'

export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  variant?: Variant
  noWrap?: boolean
}

const componentMapping: Record<Variant, React.ElementType> = {
  hugeHeadline: 'h1',
  headline: 'h1',
  subHeadline: 'h4',
  text: 'span',
  secondary: 'span',
}

export const Typography: React.FunctionComponent<TypographyProps> = (props) => {
  const { className, children, variant = 'text', noWrap = false, ...restProps } = props

  const styles: Record<Variant, string> = {
    hugeHeadline: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
    headline: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    subHeadline: 'text-lg sm:text-lg md:text-2xl xl:text-3xl',
    text: 'text-base',
    secondary: 'text-sm',
  }

  const Component = componentMapping[variant]
  return (
    <Component className={twMerge([`m-0`, styles[variant], noWrap && 'truncate', className])} {...restProps}>
      {children}
    </Component>
  )
}
