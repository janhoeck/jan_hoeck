'use client'

import { useSession } from '@/lib/auth-client'
import { checkVote } from '@/utils/check-vote'
import { extractYoutubeId } from '@/utils/extract-youtube-id'
import { Card, CardContent, useIsMounted } from '@jan_hoeck/ui'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'

import { Clip } from '../../../../../../../types'
import { useVotesContext } from '../../context/VotesContext'
import { VoteButton } from '../VoteButton'

export type ClipCardProps = {
  clip: Clip
  onClickAction: (clip: Clip) => void
}

export const ClipCard = (props: ClipCardProps) => {
  const { clip, onClickAction } = props
  const { votes } = useVotesContext()

  const isMounted = useIsMounted()
  const { data } = useSession()

  const clipYouTubeId = extractYoutubeId(clip.link)
  const clipThumbnailUrl = `https://i.ytimg.com/vi/${clipYouTubeId}/0.jpg`

  const voted = checkVote(votes, clip.id)

  return (
    <Card
      className='overflow-hidden w-96 max-w-full mx-auto cursor-pointer glass-card group'
      onClick={() => onClickAction(clip)}
    >
      <div className='aspect-video relative overflow-hidden'>
        {voted && (
          <div className='text-center text-xs bg-primary text-primary-foreground rounded-xl px-2 py-1 absolute top-1 right-1 z-10'>
            Ausgewählt
          </div>
        )}
        <Image
          fill
          loading='lazy'
          className='object-cover group-hover:scale-110 transition-all duration-300'
          src={clipThumbnailUrl}
          alt={clip.title}
          sizes='(max-width: 768px) 100vw, 384px'
        />
      </div>
      <CardContent className='flex flex-col space-y-4'>
        <p className='text-xl font-bold h-15 line-clamp-2'>{clip.title}</p>
        <VoteButton
          className='mt-auto w-full'
          categoryId={clip.categoryId}
          referenceId={clip.id}
          type='clip'
          disabled={!isMounted || !data}
          label={(voted) =>
            voted ? (
              <>
                <FaCheck />
                Ausgewählt
              </>
            ) : (
              'Auswählen'
            )
          }
        />
      </CardContent>
    </Card>
  )
}
