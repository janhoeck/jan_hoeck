import { FormControl, FormField, FormLabel, FormMessage } from '@radix-ui/react-form'
import { PropsWithChildren } from 'react'

export type FormSelectWrapperProps = PropsWithChildren<{
  name: string
  label: string
  validation?: {
    match: 'valueMissing'
    message: string
  }[]
}>

export const FormSelectWrapper = (props: FormSelectWrapperProps) => {
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
      <FormControl asChild>{children}</FormControl>
    </FormField>
  )
}
