'use server'
import { Resend } from 'resend'

import { ContactEmailTemplate } from './ContactMailTemplate'
import { ContactFormData } from '@/components/shared/ContactForm/types'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function sendMail(_initialState: any, formData: FormData) {
  try {
    const contactFormData = Object.fromEntries([...formData]) as ContactFormData
    contactFormData.message = contactFormData.message.replaceAll(' ', '&nbsp;').replace(/\r\n|\r|\n/g, '<br />')

    const { data, error } = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_CONTACT_MAIL_FROM as string,
      to: [process.env.NEXT_PUBLIC_CONTACT_MAIL_TO as string],
      subject: `Neue Nachricht von ${contactFormData.name}`,
      react: ContactEmailTemplate(contactFormData),
    })

    if (error) {
      return false
    }

    if (data) {
      return true
    }
  } catch (error) {
    console.error(error)
  }
  return false
}
