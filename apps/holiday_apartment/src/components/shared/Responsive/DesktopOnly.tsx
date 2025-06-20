import { PropsWithChildren } from 'react'

export const DesktopOnly = (props: PropsWithChildren) => {
  return <div className='hidden sm:block'>{props.children}</div>
}
