import { useMutation, useQuery } from '@tanstack/react-query'
import {
  getMessageRooms,
  getMessage,
  createMessage,
  deleteMessageRoom,
  createMessageRoom
} from './apis'
import type {
  CreateMessageReq,
  GetMessageReq,
  GetMessageRoomsReq,
  CreateMessageRoomReq
} from './types'

export const useGetMessageRoomsQuery = (params: GetMessageRoomsReq) =>
  useQuery({
    queryKey: ['getMessageRooms', params],
    queryFn: () => getMessageRooms(params)
  })

export const useGetMessageQuery = (params: GetMessageReq) =>
  useQuery({
    queryKey: ['getMessage', params],
    queryFn: () => getMessage(params),
    enabled: typeof params.msgRoomId === 'number'
  })

export const useCreateMessageMutation = () =>
  useMutation({
    mutationFn: (params: CreateMessageReq) => createMessage(params)
  })

export const useDeleteMessageRoomMutation = (messageRoomId: number) =>
  useMutation({
    mutationFn: () => deleteMessageRoom(messageRoomId)
  })

export const useCreateMessageRoomMutation = () =>
  useMutation({
    mutationFn: (params: CreateMessageRoomReq) => createMessageRoom(params)
  })
