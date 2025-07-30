import { Form } from 'radix-ui'
import { Typography, Button } from '@jan_hoeck/ui'
import { FormHTMLAttributes } from 'react'
import { useTranslations } from 'next-intl'

export type GuestbookFormProps = {
  action: FormHTMLAttributes<HTMLFormElement>['action']
  isPending: boolean
}

export const GuestbookForm = (props: GuestbookFormProps) => {
  const { action, isPending } = props
  const t = useTranslations('components.guestbookForm')

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
        name='rating'
        className={fieldClassName}
      >
        <div className='flex justify-between gap-4'>
          <Form.Label>
            <Typography>{t('rating.label')}</Typography>
          </Form.Label>
        </div>
        <Form.Control asChild>
          <select
            required
            defaultValue={5}
            className={inputClassName}
          >
            <option value={1}>{t('rating.options.1')}</option>
            <option value={2}>{t('rating.options.2')}</option>
            <option value={3}>{t('rating.options.3')}</option>
            <option value={4}>{t('rating.options.4')}</option>
            <option value={5}>{t('rating.options.5')}</option>
          </select>
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
