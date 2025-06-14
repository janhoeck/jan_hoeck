import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export type ConfirmButtonProps = React.HTMLAttributes<HTMLButtonElement>

export const ConfirmButton = (props: PropsWithChildren<ConfirmButtonProps>) => {
  const { children, className, ...restProps } = props
  return (
    <button
      className={twMerge(
        'cursor-pointer rounded-sm bg-red-700 px-2 py-1 text-white shadow-md shadow-red-900',
        'active:scale-[0.98]',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  )
}
