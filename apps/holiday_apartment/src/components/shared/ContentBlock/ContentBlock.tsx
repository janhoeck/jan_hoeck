import { ContentBlock as ContentBlockType } from '../../../types/ContentBlock'

export type ContentBlockProps = {
  items: ContentBlockType
}

export const ContentBlock = (props: ContentBlockProps) => {
  const { items } = props
  return (
    <div className='flex flex-col gap-4 prose max-w-none'>
      {items.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <p
              key={index}
              className='text-muted-foreground'
              dangerouslySetInnerHTML={{ __html: item }}
            />
          )
        }

        const { bulletpoints, text } = item
        return (
          <div key={index}>
            {text && (
              <p
                key={index}
                className='text-muted-foreground'
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
            <ul className='list-disc pl-6'>
              {bulletpoints.map((bulletpoint, index) => {
                return (
                  <li
                    key={index}
                    className='text-muted-foreground'
                  >
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: bulletpoint }}
                    />
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
