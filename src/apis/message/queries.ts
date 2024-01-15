import { useMutation } from '@tanstack/react-query'
import { createMessageRoom } from './apis'
import type { CreateMessageRoomReq } from './types'

export const useCreateMessageRoomMutation = () =>
  useMutation({
    mutationFn: (params: CreateMessageRoomReq) => createMessageRoom(params)
  })
