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
  FormTextarea,
} from '@jan_hoeck/ui'
import { useState } from 'react'
import { FaPen } from 'react-icons/fa'

import { Category } from '../../../../../types'
import { updateCategoryAction } from './actions'

export type EditCategoryButtonProps = {
  category: Category
}

export const EditCategoryButton = (props: EditCategoryButtonProps) => {
  const { category } = props
  const { updateCategory } = useDataContext()

  const [isPending, setPending] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
            const response = await updateCategoryAction(category.id, formData)
            setPending(false)

            if (response) {
              updateCategory(category.id, response)
              setIsOpen(false)
            }
          }}
        >
          <DialogContent
            title='Kategorie editieren'
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
                placeholder='Der Titel der Kategorie'
                defaultValue={category.title}
                validation={[
                  {
                    match: 'valueMissing',
                    message: 'Du musst einen Titel angeben',
                  },
                ]}
              />
              <FormTextarea
                label='Beschreibung'
                name='description'
                defaultValue={category.description}
              />
            </div>
          </DialogContent>
        </Form>
      </DialogPortal>
    </Dialog>
  )
}
