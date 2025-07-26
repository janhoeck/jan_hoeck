'use server'

import { GuestbookFormData } from '@/components/shared/GuestbookForm/types'
import { getSupabaseServer } from '@/utils/supabase/server'
import { redirect } from '../../../i18n/navigation'
import { getLocale } from 'next-intl/server'

export async function insertGuestbookEntry(_initialState: any, formData: FormData) {
  const guestbookFormData = Object.fromEntries([...formData]) as GuestbookFormData
  const locale = await getLocale()

  const supabaseServer = getSupabaseServer()
  const { data, error } = await supabaseServer
    .from('guestbook')
    .insert({
      name: guestbookFormData.name,
      message: guestbookFormData.message,
      rating: Number(guestbookFormData.rating),
    })
    .select('id')
    .single()

  if (error || !data) {
    return
  }

  redirect({
    locale: locale,
    href: {
      pathname: '/guestbook',
      query: {
        id: data.id,
      },
    },
  })
}
