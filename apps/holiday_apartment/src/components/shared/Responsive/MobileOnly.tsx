import { PropsWithChildren } from 'react'

export const MobileOnly = (props: PropsWithChildren) => {
  return <div className='block sm:hidden'>{props.children}</div>
}
