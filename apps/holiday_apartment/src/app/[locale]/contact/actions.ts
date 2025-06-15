'use server'
import { Resend } from 'resend'
import { ContactFormData } from '../../../components/ContactForm/types'

import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMail(_initialState: never, formData: FormData) {
  try {
    const filePath = path.join(process.cwd(), 'public/templates', 'contactMailTemplate.html')
    const htmlContent = fs.readFileSync(filePath, 'utf8')
    const handlebarsTemplate = Handlebars.compile(htmlContent)

    const contactFormData = Object.fromEntries([...formData]) as ContactFormData
    contactFormData.message = contactFormData.message.replaceAll(' ', '&nbsp;').replace(/\r\n|\r|\n/g, '<br />')

    const { data, error } = await resend.emails.send({
      from: `Anfrage <anfrage@janhoeck.de>`,
      to: ['jan.hoeck@gmx.net'],
      subject: `Neue Nachricht von ${contactFormData.name}`,
      html: handlebarsTemplate(contactFormData),
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
