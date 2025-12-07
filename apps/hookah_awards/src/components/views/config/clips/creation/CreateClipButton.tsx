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
import { FaPlus } from 'react-icons/fa'

import { createClipAction } from './actions'

export const CreateClipButton = () => {
  const { categories, addClip } = useDataContext()

  const [isPending, setPending] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const availableCategories = categories.filter((category) => category.type === 'clip')
  const hasClipCategories = availableCategories.length !== 0

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button disabled={!hasClipCategories}>
          <FaPlus size={16} />
          Erstellen
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <Form
          action={async (formData: FormData) => {
            setPending(true)
            const response = await createClipAction(formData)
            setPending(false)

            if (response) {
              addClip(response)
              setIsOpen(false)
            }
          }}
        >
          <DialogContent
            title='Clip erstellen'
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
                placeholder='Der Titel des Clips'
                validation={[
                  {
                    match: 'valueMissing',
                    message: 'Du musst einen Titel angeben',
                  },
                ]}
              />
              <FormInput
                required
                label='Link'
                name='link'
                placeholder='Der Link des Clips'
                pattern='^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[\w\-]{11}([?&].*)?$'
                validation={[
                  {
                    match: 'patternMismatch',
                    message: 'Der Link ist kein YouTube link',
                  },
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
