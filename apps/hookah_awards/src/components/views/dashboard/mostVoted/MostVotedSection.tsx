'use client'

import { useDataContext } from '@/components/contexts/data/DataContext'
import {
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeadCell,
} from '@/components/shared/Table/Table'

import { mostVotesForCategory } from './utils'

export const MostVotedSection = () => {
  const { categories, clips, surveys, votes } = useDataContext()

  return (
    <section>
      <h2 className='text-2xl text-foreground mb-6'>Meiste Votes</h2>
      <Table>
        <TableHead>
          <TableHeadCell variant='default'>Kategorie</TableHeadCell>
          <TableHeadCell variant='default'>Clip / Umfrage</TableHeadCell>
          <TableHeadCell variant='default'>Votes</TableHeadCell>
        </TableHead>
        <TableBody>
          {categories.map((category) => {
            const { items, amount } = mostVotesForCategory(category, category.type === 'clip' ? clips : surveys, votes)

            return (
              <TableBodyRow key={category.id}>
                <TableBodyCell variant='default'>{category.title}</TableBodyCell>
                <TableBodyCell variant='default'>
                  <div className='flex flex-col space-y-4'>
                    {items.map((item) => (
                      <span key={item.id}>{item.title}</span>
                    ))}
                  </div>
                </TableBodyCell>
                <TableBodyCell variant='default'>{amount ?? '--'}</TableBodyCell>
              </TableBodyRow>
            )
          })}
        </TableBody>
      </Table>
    </section>
  )
}
