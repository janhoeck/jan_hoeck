import {
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeadCell,
} from '@/components/shared/Table/Table'
import React from 'react'

export const ConfigSectionSkeleton = () => {
  return (
    <div className='w-full animate-pulse flex flex-col'>
      <div className='flex flex-row justify-between items-center mb-6'>
        <div className='h-8 w-40 bg-foreground/10 rounded'></div>
        <div className='h-9 w-28 bg-foreground/10 rounded-full'></div>
      </div>
      <Table>
        <TableHead>
          <TableHeadCell variant='default'>
            <div className='h-8 w-40 bg-foreground/10 rounded' />
          </TableHeadCell>
          <TableHeadCell variant='default'>
            <div className='h-8 w-40 bg-foreground/10 rounded' />
          </TableHeadCell>
          <TableHeadCell variant='default'>
            <div className='h-8 w-40 bg-foreground/10 rounded' />
          </TableHeadCell>
          <TableHeadCell variant='action' />
        </TableHead>
        <TableBody>
          {[...Array(6)].map((_, index) => (
            <TableBodyRow key={index}>
              <TableBodyCell variant='default'>
                <div className='h-8 w-40 bg-foreground/10 rounded' />
              </TableBodyCell>
              <TableBodyCell variant='default'>
                <div className='h-8 w-40 bg-foreground/10 rounded' />
              </TableBodyCell>
              <TableBodyCell variant='default'>
                <div className='h-8 w-40 bg-foreground/10 rounded' />
              </TableBodyCell>
              <TableBodyCell variant='action'>
                <div className='h-9 w-28 bg-foreground/10 rounded-full' />
              </TableBodyCell>
            </TableBodyRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
