import { useQuery } from '@tanstack/react-query'
import { getMessageList, getMessageRoom } from './apis'
import type { GetMessageRoomReq } from './types'

export const useGetMessageListQuery = (page?: number) =>
  useQuery({
    queryKey: ['getMessageList'],
    queryFn: () => getMessageList({ page: page || 0 })
  })

export const useGetMessageRoomQuery = ({
  msgRoomId,
  ...res
}: GetMessageRoomReq) =>
  useQuery({
    queryKey: ['getMessageRoom', msgRoomId],
    queryFn: () =>
      getMessageRoom({
        msgRoomId,
        ...res
      }),
    enabled: Boolean(msgRoomId)
  })
