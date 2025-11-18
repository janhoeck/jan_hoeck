import React from 'react'
import { twMerge } from 'tailwind-merge'

import { FormInputWrapper } from './wrappers/FormInputWrapper'

export type FormTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  name: string
  placeholder?: string
}

export const FormTextarea = (props: FormTextareaProps) => {
  const { label, name, ...restProps } = props

  return (
    <FormInputWrapper
      name={name}
      label={label}
    >
      <textarea
        name={name}
        rows={3}
        className={twMerge(
          'block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white',
          'placeholder:text-input-placeholder-fg focus:outline-none sm:text-sm/6'
        )}
        {...restProps}
      />
    </FormInputWrapper>
  )
}
