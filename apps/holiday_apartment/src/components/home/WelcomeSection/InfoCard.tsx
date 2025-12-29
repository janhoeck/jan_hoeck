import { Card, CardDescription, CardHeader, CardTitle } from '@jan_hoeck/ui'
import React from 'react'

export type InfoCardProps = {
  title: string | number
  description: string
}

export const InfoCard = (props: InfoCardProps) => {
  const { title, description } = props
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
