'use client'

import { useDataContext } from '@/components/contexts/data/DataContext'
import {
  Button,
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
  SelectItem,
} from '@jan_hoeck/ui'
import { useState } from 'react'
import { FaPen } from 'react-icons/fa'

import { Survey } from '../../../../../types'
import { updateSurveyAction } from './actions'

export type EditSurveyButtonProps = {
  survey: Survey
}

export const EditSurveyButton = (props: EditSurveyButtonProps) => {
  const { survey } = props
  const { categories, updateSurvey } = useDataContext()

  const [isPending, setPending] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const availableCategories = categories.filter((category) => category.type === 'survey')

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button variant='outline'>
          <FaPen size={16} />
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <Form
          action={async (formData: FormData) => {
            setPending(true)
            const response = await updateSurveyAction(survey.id, formData)
            setPending(false)

            if (response) {
              updateSurvey(survey.id, response)
              setIsOpen(false)
            }
          }}
        >
          <DialogContent
            title='Umfrage editieren'
            primaryAction={{
              disabled: isPending,
              type: 'submit',
              label: 'Aktualisieren',
            }}
          >
            <div className='flex flex-col gap-6'>
              <FormInput
                required
                label='Titel'
                name='title'
                placeholder='Der Titel des Items der Umfrage'
                defaultValue={survey.title}
                validation={[
                  {
                    match: 'valueMissing',
                    message: 'Du musst einen Titel angeben',
                  },
                ]}
              />
              <FormSelect
                required
                name='categoryId'
                label='Kategorie'
                defaultValue={survey.categoryId}
                validation={[
                  {
                    match: 'valueMissing',
                    message: 'Du musst eine Kategorie zuordnen',
                  },
                ]}
              >
                {availableCategories.map((category) => (
                  <SelectItem
                    key={category.id}
                    value={category.id}
                  >
                    {category.title}
                  </SelectItem>
                ))}
              </FormSelect>
              <FormTextarea
                label='Beschreibung'
                name='description'
                defaultValue={survey.description ?? ''}
              />
            </div>
          </DialogContent>
        </Form>
      </DialogPortal>
    </Dialog>
  )
}
