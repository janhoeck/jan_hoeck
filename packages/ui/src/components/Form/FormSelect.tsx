import React from 'react'

import { Select, SelectProps } from '../Select'
import { FormSelectWrapper, FormSelectWrapperProps } from './wrappers/FormSelectWrapper'

export type FormSelectProps = Omit<SelectProps, 'children'> & {
  label: string
  name: string
  validation?: FormSelectWrapperProps['validation']
  children: React.ReactNode
}

export const FormSelect = (props: FormSelectProps) => {
  const { label, name, validation, children, placeholder, value, defaultValue, onValueChange, ...restProps } = props

  return (
    <FormSelectWrapper
      name={name}
      label={label}
      validation={validation}
    >
      <Select
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        {...restProps}
      >
        {children}
      </Select>
    </FormSelectWrapper>
  )
}
