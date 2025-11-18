'use client'

import { Button, Card } from '@jan_hoeck/ui'
import { FaRegTrashAlt } from 'react-icons/fa'

import { useDataContext } from '../DataContext'
import { deleteSurvey } from './actions'

export const SurveyTable = () => {
  const { surveys, categories, removeSurvey } = useDataContext()

  return (
    <Card>
      <table className='w-full table-auto'>
        <thead className='bg-[#2b2b2b] border-b border-[#eaeaea]'>
          <tr>
            <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>Title</th>
            <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>Beschreibung</th>
            <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>Kategorie</th>
            <th className='w-32' />
          </tr>
        </thead>
        <tbody className='bg-[#1c1c1c] divide-y divide-[#ffffff20]'>
          {surveys.map((survey) => {
            const category = categories.find((category) => category.id === survey.categoryId)
            return (
              <tr
                key={survey.id}
                className='hover:bg-[#2b2b2b] transition-colors duration-150'
              >
                <td className='px-6 py-4 text-sm text-foreground'>{survey.title}</td>
                <td className='px-6 py-4 text-sm text-foreground'>{survey.description}</td>
                <td className='px-6 py-4 text-sm text-foreground'>{category?.title}</td>
                <td className='px-6 py-4'>
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
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}
