import type { TRANSACTION_TYPE } from '@constants'

export type TransactionType = keyof typeof TRANSACTION_TYPE
