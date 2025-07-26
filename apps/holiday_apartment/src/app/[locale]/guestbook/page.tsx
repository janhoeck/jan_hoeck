import { supabaseServer } from '@/utils/supabase/server'
import { GuestbookView } from '@/components/guestbook/GuestbookView'
import { EmptyGuestbookView } from '@/components/guestbook/EmptyGuestbookView'
import { insertGuestbookEntry } from './actions'

export default async function GuestbookPage() {
  const { data } = await supabaseServer.from('guestbook').select()

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
