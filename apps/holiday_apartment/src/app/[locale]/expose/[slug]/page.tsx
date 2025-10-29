import { use } from 'react'
import { ExposeView } from '@/components/expose/ExposeView'
import { notFound } from 'next/navigation'
import { loadExposeConfig } from '../../../../api/loadExposeConfigs'

type Params = Promise<{ slug: string }>

export default function ExposePage({ params }: { params: Params }) {
  const { slug: id } = use(params)

  const exposeConfiguration = loadExposeConfig(id)
  if (!exposeConfiguration) {
    notFound()
  }

  return <ExposeView configuration={exposeConfiguration} />
}
