import React from 'react'
import { twMerge } from 'tailwind-merge'

import { FormInputWrapper, FormInputWrapperProps } from './wrappers/FormInputWrapper'

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  validation?: FormInputWrapperProps['validation']
}

export const FormInput = (props: FormInputProps) => {
  const { label, type = 'text', name, validation, ...restProps } = props

  return (
    <FormInputWrapper
      name={name}
      label={label}
      validation={validation}
    >
      <input
        type={type}
        name={name}
        className={twMerge(
          'block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white',
          'placeholder:text-input-placeholder-fg focus:outline-none sm:text-sm/6'
        )}
        {...restProps}
      />
    </FormInputWrapper>
  )
}
