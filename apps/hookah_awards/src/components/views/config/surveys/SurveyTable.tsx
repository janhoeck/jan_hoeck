'use client'

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

import { useDataContext } from '../DataContext'
import { deleteSurvey } from './actions'

export const SurveyTable = () => {
  const { surveys, categories, removeSurvey } = useDataContext()

  return (
    <Card>
      <Table>
        <TableHead>
          <TableHeadCell variant='default'>Title</TableHeadCell>
          <TableHeadCell variant='default'>Beschreibung</TableHeadCell>
          <TableHeadCell variant='default'>Kategorie</TableHeadCell>
          <TableHeadCell variant='action' />
        </TableHead>
        <TableBody>
          {surveys.map((survey) => {
            const category = categories.find((category) => category.id === survey.categoryId)
            return (
              <TableBodyRow key={survey.id}>
                <TableBodyCell variant='default'>{survey.title}</TableBodyCell>
                <TableBodyCell variant='default'>{survey.description}</TableBodyCell>
                <TableBodyCell variant='default'>{category?.title}</TableBodyCell>
                <TableBodyCell variant='action'>
                  <Button
                    variant='outline'
                    onClick={async () => {
                      await deleteSurvey(survey)
                      removeSurvey(survey.id)
                    }}
                  >
                    <FaRegTrashAlt size={16} />
                    Löschen
                  </Button>
                </TableBodyCell>
              </TableBodyRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}
