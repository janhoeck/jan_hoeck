'use client'

import { extractYoutubeId } from '@/utils/extract-youtube-id'
import { Button, Card } from '@jan_hoeck/ui'
import Image from 'next/image'
import { FaRegTrashAlt } from 'react-icons/fa'

import { useDataContext } from '../DataContext'
import { deleteClip } from './actions'

export const ClipTable = () => {
  const { clips, categories, removeClip } = useDataContext()

  return (
    <Card>
      <table className='w-full table-auto'>
        <thead className='bg-[#2b2b2b] border-b border-[#eaeaea]'>
          <tr>
            <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>Title</th>
            <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>Beschreibung</th>
            <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>Kategorie</th>
            <th className='px-6 py-4 text-left text-sm font-semibold text-foreground'>Link</th>
            <th className='w-32' />
          </tr>
        </thead>
        <tbody className='bg-[#1c1c1c] divide-y divide-[#ffffff20]'>
          {clips.map((clip) => {
            const category = categories.find((category) => category.id === clip.categoryId)

            const clipYouTubeId = extractYoutubeId(clip.link)
            const thumnailUrl = `https://i.ytimg.com/vi/${clipYouTubeId}/0.jpg`

            return (
              <tr
                key={clip.id}
                className='hover:bg-[#2b2b2b] transition-colors duration-150'
              >
                <td className='px-6 py-4 text-sm text-foreground'>{clip.title}</td>
                <td className='px-6 py-4 text-sm text-foreground'>{clip.description}</td>
                <td className='px-6 py-4 text-sm text-foreground'>{category?.title}</td>
                <td className='px-3 py-2 text-sm text-foreground'>
                  <div className='relative w-32 aspect-video'>
                    <Image
                      fill
                      loading='lazy'
                      className='object-cover rounded'
                      src={thumnailUrl}
                      alt={clip.title}
                      sizes='128px'
                    />
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <Button
                    variant='outline'
                    onClick={async () => {
                      await deleteClip(clip)
                      removeClip(clip.id)
                    }}
                  >
                    <FaRegTrashAlt size={16} />
                    Löschen
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}
