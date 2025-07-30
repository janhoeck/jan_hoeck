import { Form } from 'radix-ui'
import { Typography, Button } from '@jan_hoeck/ui'
import { FormHTMLAttributes } from 'react'
import { useTranslations } from 'next-intl'

export type ContactFormProps = {
  action: FormHTMLAttributes<HTMLFormElement>['action']
  isPending: boolean
}

export const ContactForm = (props: ContactFormProps) => {
  const { action, isPending } = props
  const t = useTranslations('components.contactForm')

  const inputClassName = 'w-full p-1 border-1 rounded-sm border-neutral-300 text-slate-800 bg-white'
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
          <input
            required
            className={inputClassName}
          />
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
          <input
            required
            type='email'
            className={inputClassName}
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
          <input
            type='tel'
            className={inputClassName}
          />
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
          <textarea
            required
            className={inputClassName}
          />
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
