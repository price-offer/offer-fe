import { useMutation, useQuery } from '@tanstack/react-query'
import { getMessageRooms, getMessage, createMessage } from './apis'
import type { CreateMessageReq, GetMessageReq } from './types'

export const useGetMessageRooms = (page?: number) =>
  useQuery({
    queryKey: ['getMessageRooms'],
    queryFn: () => getMessageRooms({ page: page || 0 })
  })

export const useGetMessageQuery = ({ msgRoomId, ...res }: GetMessageReq) =>
  useQuery({
    queryKey: ['getMessage', msgRoomId],
    queryFn: () =>
      getMessage({
        msgRoomId,
        ...res
      }),
    enabled: Boolean(msgRoomId)
  })

export const useCreateMessageMutation = (messageRoomId: number) =>
  useMutation({
    mutationFn: (params: CreateMessageReq) =>
      createMessage(messageRoomId, params)
  })
