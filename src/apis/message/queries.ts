import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getMessageRooms,
  getMessage,
  createMessage,
  deleteMessageRoom
} from './apis'
import type {
  CreateMessageReq,
  GetMessageReq,
  GetMessageRoomsReq
} from './types'

export const useGetMessageRoomsQuery = (params: GetMessageRoomsReq) =>
  useQuery({
    queryKey: ['getMessageRooms'],
    queryFn: () => getMessageRooms(params)
  })

export const useGetMessageQuery = ({ msgRoomId, ...res }: GetMessageReq) =>
  useQuery({
    queryKey: ['getMessage', msgRoomId],
    queryFn: () =>
      getMessage({
        msgRoomId,
        ...res
      }),
    enabled: typeof msgRoomId === 'number'
  })

export const useCreateMessageMutation = () =>
  useMutation({
    mutationFn: (params: CreateMessageReq) => createMessage(params)
  })

export const useDeleteMessageRoomMutation = (messageRoomId: number) =>
  useMutation({
    mutationFn: () => deleteMessageRoom(messageRoomId)
  })
