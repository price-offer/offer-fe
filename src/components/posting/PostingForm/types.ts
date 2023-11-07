import type { ReactNode } from 'react'

export type PostingFormProps = {
  label: string
  children: ReactNode
}

export type FormAlign = 'start' | 'center'
export type StyledPostingFormProps = {
  formAlign: FormAlign
}
