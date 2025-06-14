import React, { ElementType, HTMLAttributes, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

type Variant =
  | 'default'
  | 'heading'
  /**
   * A lead text (also called a lead paragraph or summary text) is an introductory section,
   * typically the first paragraph, of a document or article that provides a brief overview
   * of the main topic. A paragraph, on the other hand,
   * is a group of related sentences that develops a single idea or point.
   */
  | 'leadText'
  | 'paragraph'
  | 'smallText'

const componentMapping: Record<Variant, ElementType | ElementType[]> = {
  default: 'p',
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  leadText: 'p',
  paragraph: 'p',
  smallText: 'p',
}

type BaseTypographyProps<T extends ElementType> = HTMLAttributes<T> & {
  variant?: Variant
  noWrap?: boolean
}

type SizeableTypographyProps<T extends ElementType> = BaseTypographyProps<T> & {
  variant: 'heading'
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

export type TypographyProps<T extends ElementType> = BaseTypographyProps<T> | SizeableTypographyProps<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const { className, children, variant = 'default', noWrap = false, ...otherProps } = props

  const { size = 1, ...restProps } = otherProps as SizeableTypographyProps<T>

  const styles = useMemo(() => {
    if (variant === 'default') {
      return 'font-normal leading-relaxed m-0 text-slate-500 lg:text-lg text-base max-w-3xl'
    }

    if (variant === 'heading') {
      switch (size) {
        case 1:
          return 'font-bold leading-snug tracking-tight text-slate-800 m-0 text-2xl lg:max-w-3xl lg:text-5xl'
        case 2:
          return 'font-bold leading-snug tracking-normal text-slate-800 m-0 text-2xl lg:max-w-3xl lg:text-4xl'
        case 3:
          return 'font-semibold leading-snug tracking-normal text-slate-800 m-0 text-xl max-w-lg lg:max-w-2xl lg:text-3xl'
        case 4:
          return 'font-semibold leading-snug tracking-normal text-slate-800 m-0 text-lg max-w-md lg:max-w-xl lg:text-2xl'
        case 5:
          return 'font-semibold leading-snug tracking-normal text-slate-800 m-0 text-base max-w-sm lg:max-w-lg lg:text-xl'
        case 6:
          return 'font-bold leading-snug tracking-normal text-slate-800 m-0 text-sm max-w-xs lg:max-w-md lg:text-lg'
      }
    }

    if (variant === 'leadText') {
      return 'font-normal leading-relaxed m-0 text-slate-500 lg:text-lg text-base max-w-3xl">'
    }

    if (variant === 'paragraph') {
      return 'font-light leading-relaxed m-0 text-slate-500 lg:text-lg text-base max-w-3xl'
    }

    if (variant === 'smallText') {
      return 'font-light leading-relaxed m-0 text-slate-500 text-sm max-w-3xl'
    }
    return ''
  }, [variant, size])

  const Component = useMemo(() => {
    const mapping = componentMapping[variant]
    const isArray = Array.isArray(mapping)
    if (isArray) {
      const item = mapping[size - 1]
      if (!item) {
        console.warn('Typography', 'Could not found mapping of size', size)
      }
      return item ?? mapping[0]!
    }
    return mapping
  }, [variant, size])

  return (
    <Component
      className={twMerge([styles, noWrap && 'truncate', className])}
      {...restProps}
    >
      {children}
    </Component>
  )
}
