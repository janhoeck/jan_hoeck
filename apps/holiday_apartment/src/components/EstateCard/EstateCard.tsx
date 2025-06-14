import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { EstateCardContent } from './EstateCardContent'

export type EstateCardProps = {
  imageAlignment?: 'left' | 'right'
  headline: string
  description: string
  imageSrc: string
  to: string
}

export const EstateCard = (props: EstateCardProps) => {
  const { imageAlignment = 'right', headline, description, imageSrc = 'left', to } = props
  return (
    <div
      className={twMerge([
        'border-1 flex flex-col gap-6 rounded-md border-neutral-300 bg-white px-8 py-4',
        // responsive
        'sm:grid sm:grid-cols-[1fr_minmax(100px,_450px)]',
        imageAlignment === 'left' && 'sm:grid-cols-[minmax(100px,_250px)_1fr] sm:justify-start',
      ])}
    >
      <EstateCardContent
        imageAlignment={imageAlignment}
        headline={headline}
        description={description}
        to={to}
        imageSrc={imageSrc}
      />
    </div>
  )
}
