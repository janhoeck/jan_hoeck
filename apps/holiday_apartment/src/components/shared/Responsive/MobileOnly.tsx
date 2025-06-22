import { PropsWithChildren } from 'react'

export const MobileOnly = (props: PropsWithChildren) => {
  return <div className='contents sm:hidden'>{props.children}</div>
}
