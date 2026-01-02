import { Button, Input, Textarea, Typography, toast } from '@jan_hoeck/ui'
import { useTranslations } from 'next-intl'
import { Form } from 'radix-ui'
import { useActionState, useEffect, useState } from 'react'

import { sendMail } from './actions'
import { FormState } from './types'

const INITIAL_FORM_STATE: FormState = {
  success: undefined,
}

export const ContactForm = () => {
  const t = useTranslations('components.contactForm')

  const [initialFormState, setInitialFormState] = useState(INITIAL_FORM_STATE)
  const [formState, action, isPending] = useActionState(sendMail, initialFormState)

  useEffect(() => {
    if (formState.success === true) {
      toast.success(t('success'))
      setInitialFormState(INITIAL_FORM_STATE)
    } else if (formState.success === false) {
      toast.error(t('error'))
    }
  }, [t, formState, toast])

  const fieldClassName = 'flex flex-col gap-1'

  return (
    <Form.Root
      className='flex flex-col gap-4'
      action={action}
    >
      <Form.Field
        name='name'
        className={fieldClassName}
      >
        <div className='flex justify-between gap-4'>
          <Form.Label>
            <Typography>{t('name.label')}</Typography>
          </Form.Label>
          <Form.Message match='valueMissing'>
            <Typography variant='smallText'>{t('name.valueMissing')}</Typography>
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input required />
        </Form.Control>
      </Form.Field>
      <Form.Field
        name='email'
        className={fieldClassName}
      >
        <div className='flex justify-between gap-4'>
          <Form.Label>
            <Typography>{t('email.label')}</Typography>
          </Form.Label>
          <Form.Message match='valueMissing'>
            <Typography variant='smallText'>{t('email.valueMissing')}</Typography>
          </Form.Message>
          <Form.Message match='typeMismatch'>
            <Typography variant='smallText'>{t('email.typeMismatch')}</Typography>
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            required
            type='email'
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        name='phone'
        className={fieldClassName}
      >
        <Form.Label>
          <Typography>{t('phone.label')}</Typography>
        </Form.Label>
        <Form.Control asChild>
          <Input type='tel' />
        </Form.Control>
      </Form.Field>
      <Form.Field
        name='message'
        className={fieldClassName}
      >
        <div className='flex justify-between gap-4'>
          <Form.Label>
            <Typography>{t('message.label')}</Typography>
          </Form.Label>
          <Form.Message match='valueMissing'>
            <Typography variant='smallText'>{t('message.valueMissing')}</Typography>
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Textarea required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <Button
          disabled={isPending}
          className='self-end'
        >
          {t('sendButtonLabel')}
        </Button>
      </Form.Submit>
    </Form.Root>
  )
}
