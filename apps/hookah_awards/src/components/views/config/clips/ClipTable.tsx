'use client'

import {
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeadCell,
} from '@/components/shared/Table/Table'
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
      <Table>
        <TableHead>
          <TableHeadCell variant='default'>Title</TableHeadCell>
          <TableHeadCell variant='default'>Beschreibung</TableHeadCell>
          <TableHeadCell variant='default'>Kategorie</TableHeadCell>
          <TableHeadCell variant='default'>Link</TableHeadCell>
          <TableHeadCell variant='action' />
        </TableHead>
        <TableBody>
          {clips.map((clip) => {
            const category = categories.find((category) => category.id === clip.categoryId)

            const clipYouTubeId = extractYoutubeId(clip.link)
            const thumnailUrl = `https://i.ytimg.com/vi/${clipYouTubeId}/0.jpg`

            return (
              <TableBodyRow key={clip.id}>
                <TableBodyCell variant='default'>{clip.title}</TableBodyCell>
                <TableBodyCell variant='default'>{clip.description}</TableBodyCell>
                <TableBodyCell variant='default'>{category?.title}</TableBodyCell>
                <TableBodyCell variant='default'>
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
                </TableBodyCell>
                <TableBodyCell variant='action'>
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
                </TableBodyCell>
              </TableBodyRow>
            )
          })}
        </TableBody>
      </Table>
    </Card>
  )
}
