import type { DefaultError } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
  checkValidNickname,
  getMemberProfile,
  getMyProfile,
  updateMyProfile
} from './apis'
import { initialMemberProfile, initialMyProfile } from './data'
import type {
  CheckValidNicknameReq,
  CheckValidNicknameRes,
  UpdateMyProfileReq,
  UpdateMyProfileRes
} from './types'

export const useGetProfileQuery = (memberId: null | number) =>
  useQuery({
    queryKey: ['profile', memberId],
    queryFn: () => {
      if (!memberId) {
        return getMyProfile()
      }

      return getMemberProfile(memberId)
    },
    initialData: memberId ? initialMemberProfile : initialMyProfile
  })

export const useGetMyProfileQuery = (accessToken?: string) =>
  useQuery({
    queryKey: ['myProfile', accessToken],
    queryFn: getMyProfile,
    enabled: Boolean(accessToken),
    initialData: initialMyProfile
  })

export const useUpdateMyProfileMutation = () =>
  useMutation<UpdateMyProfileRes, DefaultError, UpdateMyProfileReq>({
    mutationFn: payload => updateMyProfile(payload)
  })

export const useCheckValidNicknameMutation = () =>
  useMutation<
    CheckValidNicknameRes,
    DefaultError,
    CheckValidNicknameReq['nickname']
  >({
    mutationFn: nickname => checkValidNickname({ nickname })
  })
