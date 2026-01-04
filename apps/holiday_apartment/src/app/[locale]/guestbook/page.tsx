'use server'

import { EmptyGuestbookView } from '@/components/guestbook/EmptyGuestbookView'
import { GuestbookView } from '@/components/guestbook/GuestbookView'
import { getSupabaseServer } from '@/utils/supabase/server'

export default async function GuestbookPage() {
  const supabase = getSupabaseServer()
  const { data } = await supabase.from('guestbook').select()

  if (!data || data.length === 0) {
    return <EmptyGuestbookView />
  }

  return <GuestbookView entries={data} />
}
