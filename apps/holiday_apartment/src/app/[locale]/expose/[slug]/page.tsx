import { configurations } from './config'
import { notFound } from 'next/navigation'
import { ExposeView } from '@components/expose/ExposeView'

type Params = Promise<{ slug: string }>

export default async function ExposePage({ params }: { params: Params }) {
  const { slug: id } = await params
  const exposeConfiguration = configurations.find((config) => config.id === id)

  if (!exposeConfiguration) {
    notFound()
  }

  return <ExposeView configuration={exposeConfiguration} />
}
