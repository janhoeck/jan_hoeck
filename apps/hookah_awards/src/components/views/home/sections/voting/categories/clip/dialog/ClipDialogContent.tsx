import { NextClipButton } from '@/components/views/home/sections/voting/categories/clip/dialog/buttons/NextClipButton'
import { Card, CardContent, DesktopOnly, MobileOnly } from '@jan_hoeck/ui'
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { GoInfo, GoX } from 'react-icons/go'

import { Category, Clip } from '../../../../../../../../types'
import { ResponsiveYouTubeVideo } from './ResponsiveYouTubeVideo'
import { PreviousClipButton } from './buttons/PreviousClipButton'

export type ClipDialogContentProps = {
  clip: Clip
  category: Category
  onPrevClick?: () => void
  onNextClick?: () => void
}

export const ClipDialogContent = (props: ClipDialogContentProps) => {
  const { clip, category, onNextClick, onPrevClick } = props

  return (
    <DialogContent className='fixed top-0 left-0 w-full h-full text-foreground p-10 flex flex-col items-center space-y-10 overflow-auto'>
      <DialogTitle className='text-4xl md:text-6xl font-bebas-neue tracking-wider uppercase text-center text-primary'>
        {category.title}
      </DialogTitle>
      <h3 className='text-xl font-bold h-15 line-clamp-2'>{clip.title}</h3>
      <DialogClose
        asChild
        className='absolute top-6 right-6'
      >
        <button className='cursor-pointer'>
          <GoX size={24} />
        </button>
      </DialogClose>
      <div className='grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-4 w-full max-w-5xl'>
        <DesktopOnly>
          <PreviousClipButton onClick={onPrevClick} />
        </DesktopOnly>
        <ResponsiveYouTubeVideo clip={clip} />
        <DesktopOnly>
          <NextClipButton onClick={onNextClick} />
        </DesktopOnly>
        <MobileOnly>
          <div className='flex justify-between'>
            <PreviousClipButton onClick={onPrevClick} />
            <NextClipButton onClick={onNextClick} />
          </div>
        </MobileOnly>
      </div>
      {clip.description && (
        <Card className='max-w-3xl glass-card'>
          <CardContent className='inline-flex flex-row space-x-4'>
            <div className='flex-shrink-0 mt-0.5'>
              <GoInfo size={20} />
            </div>
            <DialogDescription>{clip.description}</DialogDescription>
          </CardContent>
        </Card>
      )}
    </DialogContent>
  )
}
