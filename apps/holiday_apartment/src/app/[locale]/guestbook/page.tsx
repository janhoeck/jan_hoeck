import { supabaseServer } from '@/utils/supabase/server'
import { GuestbookView } from '@/components/guestbook/GuestbookView'
import { EmptyGuestbookView } from '@/components/guestbook/EmptyGuestbookView'
import { insertGuestbookEntry } from './actions'

export default async function GuestbookPage() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Supabase configuration is missing')
  }

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
