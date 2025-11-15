import { GoInfo } from 'react-icons/go'

export const ErrorBanner = () => {
  return (
    <div
      className='bg-red-400/30 border-l-4 border-red-400 text-foreground px-6 py-4 rounded-md shadow-md flex items-center'
      role='alert'
    >
      <GoInfo
        size={20}
        className='flex-shrink-0 mr-3'
      />
      <span className='font-arimo font-semibold'>Fehler:</span>
      <span className='ml-2'>Etwas ist schief gelaufen.</span>
    </div>
  )
}
