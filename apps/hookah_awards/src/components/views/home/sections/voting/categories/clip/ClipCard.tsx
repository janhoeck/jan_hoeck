'use client'

import { extractYoutubeId } from '@/utils/extract-youtube-id'
import { Button, Card, CardContent } from '@jan_hoeck/ui'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

import { Clip } from '../../../../../../../types'

export type ClipCardProps = {
  clip: Clip
  selected?: boolean
  onClickAction: (clip: Clip) => void
}

export const ClipCard = (props: ClipCardProps) => {
  const { clip, onClickAction } = props
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clipYouTubeId = extractYoutubeId(clip.link)

  const clipImageSources = useMemo(() => {
    const variants = ['0', 'hq1', 'hq2', 'hq3']
    return variants.map((variant) => `https://i.ytimg.com/vi/${clipYouTubeId}/${variant}.jpg`)
  }, [clipYouTubeId])

  useEffect(() => {
    if (hovered) {
      let index = 0
      intervalRef.current = setInterval(() => {
        index = (index + 1) % clipImageSources.length
        setCurrentImageIndex(index)
      }, 400)
    } else {
      setCurrentImageIndex(0)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [hovered, clipImageSources.length])

  const handleVoteButtonClick = (event: MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <Card
      className='overflow-hidden w-96 max-w-full mx-auto cursor-pointer'
      onClick={() => onClickAction(clip)}
    >
      <div
        className='aspect-video relative'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {clipImageSources.map((imgSrc, index) => (
          <Image
            fill
            key={imgSrc}
            loading='lazy'
            className={`object-cover transition-opacity duration-300 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={imgSrc}
            alt={clip.title}
            sizes='(max-width: 768px) 100vw, 384px'
          />
        ))}
      </div>
      <CardContent className='flex flex-col space-y-4'>
        <p className='text-xl font-bold h-15 line-clamp-2'>{clip.title}</p>
        <Button
          className='mt-auto'
          onClick={handleVoteButtonClick}
        >
          Auswählen
        </Button>
      </CardContent>
    </Card>
  )
}
