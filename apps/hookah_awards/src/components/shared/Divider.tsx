export type DividerProps = {
  align?: 'horizontal' | 'vertical'
}

export const Divider = ({ align = 'horizontal' }: DividerProps) => {
  if (align === 'vertical') {
    return <div className='w-px bg-muted-foreground mx-10 h-full' />
  }

  return <hr className='text-muted-foreground my-10' />
}
