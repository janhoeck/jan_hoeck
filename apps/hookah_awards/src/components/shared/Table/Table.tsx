import React, { PropsWithChildren } from 'react'

type Variant = 'default' | 'action'

export const Table = ({ children }: PropsWithChildren) => {
  return <table className='w-full table-auto'>{children}</table>
}

export const TableHead = ({ children }: PropsWithChildren) => {
  return (
    <thead className='bg-[#2b2b2b] border-b border-divider'>
      <tr>{children}</tr>
    </thead>
  )
}

export const TableHeadCell = ({ children, variant }: PropsWithChildren<{ variant: Variant }>) => {
  if (variant === 'action') {
    return <th className='w-32'>{children}</th>
  }
  return <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>{children}</th>
}

export const TableBody = ({ children }: PropsWithChildren) => {
  return <tbody className='bg-[#1c1c1c] divide-y divide-divider'>{children}</tbody>
}

export const TableBodyRow = ({ children }: PropsWithChildren) => {
  return <tr className='hover:bg-[#2b2b2b] transition-colors duration-150'>{children}</tr>
}

export const TableBodyCell = ({ children, variant }: PropsWithChildren<{ variant: Variant }>) => {
  if (variant === 'action') {
    return <td className='px-6 py-4'>{children}</td>
  }
  return <td className='px-6 py-4 text-sm text-foreground'>{children}</td>
}
