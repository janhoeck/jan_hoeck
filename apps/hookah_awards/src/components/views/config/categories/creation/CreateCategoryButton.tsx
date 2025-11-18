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
import { createCategory } from './actions'

export const CreateCategoryButton = () => {
  const { addCategory } = useDataContext()

  const [isPending, setPending] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
            const response = await createCategory(formData)
            setPending(false)

            if (response) {
              addCategory(response)
              setIsOpen(false)
            }
          }}
        >
          <DialogContent
            title='Kategorie erstellen'
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
                placeholder='Der Titel der Kategorie'
                validation={[
                  {
                    match: 'valueMissing',
                    message: 'Du musst einen Titel angeben',
                  },
                ]}
              />
              <FormSelect
                name='type'
                label='Art der Kategorie'
                defaultValue='clip'
              >
                <SelectItem value='clip'>Clip</SelectItem>
                <SelectItem value='survey'>Umfrage</SelectItem>
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
