import { Typography } from '@jan_hoeck/ui'
import { useLocale } from 'next-intl'
import { StarRating } from './StarRating'

const formatDate = (dateString: string, locale: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale)
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
    <div
      className='flex flex-col gap-4 rounded-xl bg-white px-8 py-4'
      id={`guestbook_entry_${id}`}
    >
      <div className='flex flex-row justify-between gap-2'>
        <StarRating rating={rating} />
        <Typography variant='smallText'>{formattedDate}</Typography>
      </div>
      <div className='flex flex-col gap-1'>
        <Typography
          variant='heading'
          size={5}
        >
          {name}
        </Typography>
        <Typography
          className='whitespace-pre-wrap'
          variant='paragraph'
        >
          {message}
        </Typography>
      </div>
    </div>
  )
}
