import { FormControl, FormField, FormLabel, FormMessage } from '@radix-ui/react-form'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export type FormInputWrapperProps = PropsWithChildren<{
  name: string
  label: string
  validation?: {
    match:
      | 'badInput'
      | 'patternMismatch'
      | 'rangeOverflow'
      | 'rangeUnderflow'
      | 'stepMismatch'
      | 'tooLong'
      | 'tooShort'
      | 'typeMismatch'
      | 'valid'
      | 'valueMissing'
    message: string
  }[]
}>

export const FormInputWrapper = (props: FormInputWrapperProps) => {
  const { label, name, validation = [], children } = props

  return (
    <FormField
      className='flex flex-col gap-2'
      name={name}
    >
      <div className='flex flex-row items-center justify-between'>
        <FormLabel className='block font-normal text-input-fg'>{label}</FormLabel>
        {validation.map((item) => (
          <FormMessage
            key={item.match}
            match={item.match}
            className='text-sm text-muted-foreground'
          >
            {item.message}
          </FormMessage>
        ))}
      </div>
      <div
        className={twMerge(
          'flex items-center rounded-md bg-input-bg pl-3 outline-1 -outline-offset-1 outline-input-border',
          'focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-input-focus-border'
        )}
      >
        <FormControl asChild>{children}</FormControl>
      </div>
    </FormField>
  )
}
