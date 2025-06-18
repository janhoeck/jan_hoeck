'use server'
import { Resend } from 'resend'
import { ContactFormData } from '../../../components/ContactForm/types'

import { ContactEmailTemplate } from './ContactMailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(_initialState: any, formData: FormData) {
  try {
    const contactFormData = Object.fromEntries([...formData]) as ContactFormData
    contactFormData.message = contactFormData.message.replaceAll(' ', '&nbsp;').replace(/\r\n|\r|\n/g, '<br />')

    const { data, error } = await resend.emails.send({
      from: `Anfrage <anfrage@janhoeck.de>`,
      to: ['jan.hoeck@gmx.net'],
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
