import { twMerge } from 'tailwind-merge'

export const Logo = () => {
  return (
    <div
      className={twMerge([
        'from-ocean-deep to-ocean-light flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r/hsl',
        'md:h-10 md:w-10',
      ])}
    >
      <span className='text-lg font-bold text-white md:text-xl'>SM</span>
    </div>
  )
}
