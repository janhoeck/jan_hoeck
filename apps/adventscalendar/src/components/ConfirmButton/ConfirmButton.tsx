import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export type ConfirmButtonProps = React.HTMLAttributes<HTMLButtonElement>

export const ConfirmButton = (props: PropsWithChildren<ConfirmButtonProps>) => {
  const { children, className, ...restProps } = props
  return (
    <button
      className={twMerge(
        'bg-red-700 text-white shadow-md shadow-red-900 rounded-sm cursor-pointer py-1 px-2',
        'active:scale-[0.98]',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  )
}
