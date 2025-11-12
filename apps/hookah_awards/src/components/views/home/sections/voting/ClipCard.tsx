'use client'

import { Button, Card, CardContent } from '@jan_hoeck/ui'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

import { Clip } from '../../../../../types'

export type ClipCardProps = {
  clip: Clip
  selected?: boolean
}

export const ClipCard = ({ clip }: ClipCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const clipYouTubeId = useMemo(() => {
    const url = new URL(clip.link)
    if (url.searchParams.has('v')) {
      return url.searchParams.get('v')!
    }
    return url.pathname.substring(1, url.pathname.length)
  }, [clip])

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
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [hovered, clipImageSources.length])

  return (
    <Card className='overflow-hidden w-96 max-w-full mx-auto cursor-pointer'>
      <div
        className='aspect-video relative'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {clipImageSources.map((imgSrc, index) => (
          <Image
            key={imgSrc}
            fill
            className={`object-cover transition-opacity duration-300 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={imgSrc}
            alt={clip.title}
          />
        ))}
      </div>
      <CardContent>
        <p className='text-xl font-bold'>{clip.title}</p>
        <Button>Auswählen</Button>
      </CardContent>
    </Card>
  )
}
