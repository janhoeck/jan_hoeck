import { Dialog, DialogOverlay, DialogPortal } from '@radix-ui/react-dialog'

import { Category, Clip } from '../../../../../../../../types'
import { ClipDialogContent } from './ClipDialogContent'

export type ClipDialogProps = {
  selectedClip?: Clip
  category: Category
  onOpenChange: (open: boolean) => void
  onPrevClick?: () => void
  onNextClick?: () => void
}

export const ClipDialog = (props: ClipDialogProps) => {
  const { selectedClip, category, onOpenChange, onNextClick, onPrevClick } = props

  if (!selectedClip) {
    return null
  }

  return (
    <Dialog
      open={Boolean(selectedClip)}
      onOpenChange={onOpenChange}
    >
      <DialogPortal>
        <DialogOverlay className='bg-dialog-backdrop backdrop-blur-sm fixed inset-0' />
        <ClipDialogContent
          clip={selectedClip}
          category={category}
          onNextClick={onNextClick}
          onPrevClick={onPrevClick}
        />
      </DialogPortal>
    </Dialog>
  )
}
