import { Typography } from '@jan_hoeck/ui'

export type TextDescriptionProps = {
  texts: Array<string | { text?: string; bulletpoints: string[] }>
}

export const TextDescription = (props: TextDescriptionProps) => {
  const { texts } = props
  return (
    <div className='flex flex-col gap-2'>
      {texts.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <Typography
              key={index}
              variant='paragraph'
            >
              {item}
            </Typography>
          )
        }

        const { bulletpoints, text } = item
        return (
          <div key={index}>
            {text && (
              <Typography
                key={index}
                variant='paragraph'
              >
                {text}
              </Typography>
            )}
            <ul className='list-disc pl-6'>
              {bulletpoints.map((bulletpoint, index) => {
                return (
                  <li key={index}>
                    <Typography variant='paragraph'>{bulletpoint}</Typography>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
