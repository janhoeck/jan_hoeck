import { Card, CardContent, Typography } from '@jan_hoeck/ui'
import { useLocale } from 'next-intl'

import { StarRating } from './StarRating'

const formatDate = (dateString: string, locale: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale, {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
}

type GuestbookCardProps = {
  id: number
  name: string
  message: string
  createdAt: string
  rating: number
}

export const GuestbookCard = (props: GuestbookCardProps) => {
  const { id, name, message, createdAt, rating } = props

  const locale = useLocale()
  const formattedDate = formatDate(createdAt, locale)

  return (
    <Card id={`guestbook_entry_${id}`}>
      <CardContent>
        <div className='flex flex-row justify-between gap-2 mb-2'>
          <StarRating rating={rating} />
          <span className='text-muted-foreground text-xs'>{formattedDate}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <Typography
            variant='heading'
            size={5}
          >
            {name}
          </Typography>
          <p className='whitespace-pre-wrap text-foreground'>{message}</p>
        </div>
      </CardContent>
    </Card>
  )
}
