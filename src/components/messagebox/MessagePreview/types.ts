import type { MessageRoomInfo } from '@types'

export type MessagePreviewProps = MessageRoomInfo & {
  isSelected?: boolean
  onClick?(id: number): void
}
