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

import { Clip } from '../../../../../types'
import { updateClipAction } from './actions'

export type EditClipButtonProps = {
  clip: Clip
}

export const EditClipButton = (props: EditClipButtonProps) => {
  const { clip } = props
  const { categories, updateClip } = useDataContext()

  const [isPending, setPending] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const availableCategories = categories.filter((category) => category.type === 'clip')

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
            const response = await updateClipAction(clip.id, formData)
            setPending(false)

            if (response) {
              updateClip(clip.id, response)
              setIsOpen(false)
            }
          }}
        >
          <DialogContent
            title='Clip editieren'
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
                placeholder='Der Titel des Clips'
                defaultValue={clip.title}
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
                defaultValue={clip.link}
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
                defaultValue={clip.categoryId}
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
                defaultValue={clip.description ?? ''}
              />
            </div>
          </DialogContent>
        </Form>
      </DialogPortal>
    </Dialog>
  )
}
