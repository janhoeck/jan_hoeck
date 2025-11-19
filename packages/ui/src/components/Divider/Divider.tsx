export type DividerProps = {
  align?: 'horizontal' | 'vertical'
}

export const Divider = ({ align = 'horizontal' }: DividerProps) => {
  if (align === 'vertical') {
    return <div className='w-px bg-divider mx-10 h-full' />
  }

  return <hr className='text-divider my-10' />
}
