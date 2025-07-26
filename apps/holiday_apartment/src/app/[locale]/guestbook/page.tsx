import { getSupabaseServer } from '@/utils/supabase/server'
import { GuestbookView } from '@/components/guestbook/GuestbookView'
import { EmptyGuestbookView } from '@/components/guestbook/EmptyGuestbookView'
import { insertGuestbookEntry } from './actions'

export default async function GuestbookPage() {
  const supabase = getSupabaseServer()
  const { data } = await supabase.from('guestbook').select()

  if (!data || data.length === 0) {
    return <EmptyGuestbookView serverAction={insertGuestbookEntry} />
  }

  return (
    <GuestbookView
      entries={data}
      serverAction={insertGuestbookEntry}
    />
  )
}
