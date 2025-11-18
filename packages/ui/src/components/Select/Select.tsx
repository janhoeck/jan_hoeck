import {
  Select as RadixSelect,
  SelectGroup as RadixSelectGroup,
  SelectGroupProps as RadixSelectGroupProps,
  SelectItem as RadixSelectItem,
  SelectItemProps as RadixSelectItemProps,
  SelectLabel as RadixSelectLabel,
  SelectLabelProps as RadixSelectLabelProps,
  SelectProps as RadixSelectProps,
  SelectSeparator as RadixSelectSeparator,
  SelectSeparatorProps as RadixSelectSeparatorProps,
  SelectContent,
  SelectIcon,
  SelectItemText,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '@radix-ui/react-select'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import { twMerge } from 'tailwind-merge'

export type SelectGroupProps = RadixSelectGroupProps
export const SelectGroup = (props: SelectGroupProps) => {
  return <RadixSelectGroup {...props} />
}

export type SelectSeparatorProps = RadixSelectSeparatorProps
export const SelectSeparator = (props: SelectSeparatorProps) => {
  return (
    <RadixSelectSeparator
      className='mx-2 my-1 h-px bg-input-border'
      {...props}
    />
  )
}

export type SelectItemProps = RadixSelectItemProps
export const SelectItem = (props: SelectItemProps) => {
  const { children, ...restProps } = props
  return (
    <RadixSelectItem
      className={twMerge(
        'relative flex cursor-pointer select-none items-center rounded px-8 py-2 text-sm text-input-fg outline-none',
        'data-[highlighted]:bg-input-border data-[highlighted]:text-white',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
      )}
      {...restProps}
    >
      <SelectItemText>{children}</SelectItemText>
    </RadixSelectItem>
  )
}

export type SelectLabelProps = RadixSelectLabelProps
export const SelectLabel = (props: SelectLabelProps) => {
  return (
    <RadixSelectLabel
      className='px-8 py-2 text-xs font-semibold text-input-placeholder-fg'
      {...props}
    />
  )
}

export type SelectProps = RadixSelectProps & {
  placeholder?: string
}

export const Select = (props: SelectProps) => {
  const { children, placeholder, ...restProps } = props
  return (
    <RadixSelect {...restProps}>
      <SelectTrigger
        className={twMerge(
          'flex w-full items-center justify-between rounded-md bg-input-bg px-3 py-1.5',
          'text-sm text-input-fg outline-1 -outline-offset-1 outline-input-border',
          'focus:outline-2 focus:-outline-offset-2 focus:outline-input-focus-border',
          'data-[placeholder]:text-input-placeholder-fg'
        )}
      >
        <SelectValue placeholder={placeholder} />
        <SelectIcon className='ml-2'>
          <GoChevronDown />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectContent
          className={twMerge(
            'overflow-hidden rounded-md bg-input-bg shadow-lg',
            'border border-input-border',
            'min-w-[var(--radix-select-trigger-width)]'
          )}
          position='popper'
          sideOffset={5}
          align='start'
          sticky='partial'
        >
          <SelectScrollUpButton
            className={twMerge('flex cursor-pointer items-center justify-center', 'h-6 bg-input-bg text-input-fg')}
          >
            <GoChevronUp />
          </SelectScrollUpButton>
          <SelectViewport className='p-1'>{children}</SelectViewport>
          <SelectScrollDownButton
            className={twMerge('flex cursor-pointer items-center justify-center', 'h-6 bg-input-bg text-input-fg')}
          >
            <GoChevronDown />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </RadixSelect>
  )
}
