'use client'
import { notFound } from 'next/navigation'
import { ExposeView } from '@/components/expose/ExposeView'
import { useExposes } from './config/useExposes'
import { use } from 'react'

type Params = Promise<{ slug: string }>

export default function ExposePage({ params }: { params: Params }) {
  const { slug: id } = use(params)
  const exposes = useExposes()

  const exposeConfiguration = exposes.find((expose) => expose.id === id)
  if (!exposeConfiguration) {
    notFound()
  }

  return <ExposeView configuration={exposeConfiguration} />
}
