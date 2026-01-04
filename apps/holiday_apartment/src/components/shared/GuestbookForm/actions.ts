'use server'

import { getSupabaseServer } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

import { FormState, GuestbookEntry, GuestbookFormData, schema } from './types'

export async function insertGuestbookEntry(_prevState: FormState, formData: FormData): Promise<FormState> {
  const guestbookFormData = Object.fromEntries([...formData]) as unknown as GuestbookFormData
  guestbookFormData.rating = Number(guestbookFormData.rating)

  const { success, error: zodError } = schema.safeParse(guestbookFormData)
  if (!success) {
    return {
      entry: null,
      errors: zodError.flatten().fieldErrors,
      success: false,
    }
  }

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
    return {
      entry: null,
      success: false,
      errors: null,
    }
  }

  revalidatePath('/guestbook')
  return {
    entry: data as GuestbookEntry,
    success: true,
    errors: null,
  }
}
