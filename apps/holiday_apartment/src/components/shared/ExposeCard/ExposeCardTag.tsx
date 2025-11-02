export type ExposeCardTagProps = {
  text: string
}

export const ExposeCardTag = ({ text }: ExposeCardTagProps) => {
  return (
    <div className='bg-muted inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold'>
      {text}
    </div>
  )
}
