import { ConfigView } from '@/components/views/config/ConfigView'
import { getCurrentUser } from '@/lib/auth-server'
import { unauthorized } from 'next/navigation'

export default async function ConfigPage() {
  const user = await getCurrentUser()

  if (!user) {
    unauthorized()
  }

  return <ConfigView />
}
