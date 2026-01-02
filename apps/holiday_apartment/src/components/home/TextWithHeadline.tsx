import { twMerge } from 'tailwind-merge'

export type TextWithHeadlineProps = {
  title: string
  subtitle: string
}

export const TextWithHeadline = (props: TextWithHeadlineProps) => {
  const { title, subtitle } = props
  return (
    <div className={twMerge(['animate-fade-in mx-auto mb-12 max-w-3xl text-center', 'md:mb-16'])}>
      <h2 className={twMerge(['text-foreground mb-4 font-serif text-3xl font-bold', 'md:text-4xl lg:text-5xl'])}>
        {title}
      </h2>
      <div className='bg-primary mx-auto mb-6 h-1 w-20' />
      <p className={twMerge(['text-muted-foreground text-lg leading-relaxed', 'md:text-xl'])}>{subtitle}</p>
    </div>
  )
}
