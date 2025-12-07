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
import { Button, Card } from '@jan_hoeck/ui'
import { FaRegTrashAlt } from 'react-icons/fa'

import { deleteCategoryAction } from './actions'
import { EditCategoryButton } from './edit/EditCategoryButton'

export const CategoryTable = () => {
  const { categories, removeCategory } = useDataContext()

  return (
    <Card>
      <Table>
        <TableHead>
          <TableHeadCell variant='default'>Title</TableHeadCell>
          <TableHeadCell variant='default'>Beschreibung</TableHeadCell>
          <TableHeadCell variant='default'>Typ</TableHeadCell>
          <TableHeadCell variant='action' />
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableBodyRow key={category.id}>
              <TableBodyCell variant='default'>{category.title}</TableBodyCell>
              <TableBodyCell variant='default'>{category.description}</TableBodyCell>
              <TableBodyCell variant='default'>{category.type === 'clip' ? 'Clip' : 'Umfrage'}</TableBodyCell>
              <TableBodyCell variant='action'>
                <div className='flex flex-row space-x-2'>
                  <EditCategoryButton category={category} />
                  <Button
                    variant='outline'
                    onClick={async () => {
                      await deleteCategoryAction(category)
                      removeCategory(category.id)
                    }}
                  >
                    <FaRegTrashAlt size={16} />
                  </Button>
                </div>
              </TableBodyCell>
            </TableBodyRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
