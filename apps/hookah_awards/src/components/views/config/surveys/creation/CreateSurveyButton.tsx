'use client'

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
import { FaPlus } from 'react-icons/fa'

import { useDataContext } from '../../DataContext'
import { createSurvey } from './actions'

export const CreateSurveyButton = () => {
  const { categories, addSurvey } = useDataContext()

  const [isPending, setPending] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const availableCategories = categories.filter((category) => category.type === 'survey')

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <FaPlus size={16} />
          Erstellen
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <Form
          action={async (formData: FormData) => {
            setPending(true)
            const response = await createSurvey(formData)
            setPending(false)

            if (response) {
              addSurvey(response)
              setIsOpen(false)
            }
          }}
        >
          <DialogContent
            title='Umfrage erstellen'
            primaryAction={{
              disabled: isPending,
              type: 'submit',
              label: 'Erstellen',
            }}
          >
            <div className='flex flex-col gap-6'>
              <FormInput
                required
                label='Titel'
                name='title'
                placeholder='Der Titel des Items der Umfrage'
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
                defaultValue={availableCategories[0]?.id}
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
              />
            </div>
          </DialogContent>
        </Form>
      </DialogPortal>
    </Dialog>
  )
}
