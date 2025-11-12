import { Typography } from '@jan_hoeck/ui'
import { twMerge } from 'tailwind-merge'

export type MessageBoxProps = {
  type: 'success' | 'error'
  children: string
}

export const MessageBox = (props: MessageBoxProps) => {
  const { type, children } = props
  return (
    <div
      className={twMerge([
        'rounded-sm border-1 p-2',
        type === 'success' && 'border-lime-400 bg-lime-300/30',
        type === 'error' && 'border-red-400 bg-red-300/30',
      ])}
    >
      <Typography className={twMerge([type === 'success' && 'text-lime-700', type === 'error' && 'text-red-700'])}>
        {children}
      </Typography>
    </div>
  )
}
