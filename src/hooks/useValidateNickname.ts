import { useCheckValidNicknameMutation } from '@apis'
import { VALID_NICKNAME_MESSAGE } from '@constants'

export const useValidateNickname = () => {
  const checkValidNickname = useCheckValidNicknameMutation()

  const validateNickname = async (nickname: string) => {
    if (nickname.length === 0) {
      return {
        isSuccess: false,
        message: VALID_NICKNAME_MESSAGE.EMPTY_ERROR
      }
    }

    if (nickname.length < 2) {
      return {
        isSuccess: false,
        message: VALID_NICKNAME_MESSAGE.MIN_LENGTH_ERROR
      }
    }

    try {
      const { duplicate } = await checkValidNickname.mutateAsync(nickname)

      if (duplicate) {
        return {
          isSuccess: false,
          message: VALID_NICKNAME_MESSAGE.DUPLICATED_ERROR
        }
      } else {
        return {
          isSuccess: true,
          message: VALID_NICKNAME_MESSAGE.SUCCESS
        }
      }
    } catch (e) {
      return {
        isSuccess: false,
        message: 'An error occurred during nickname validation.'
      }
    }
  }

  return validateNickname
}
