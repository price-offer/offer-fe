import type { ReactNode } from 'react'

export type PostFormProps = {
  label: string
  children: ReactNode
}

export type FormAlign = 'start' | 'center'
export type StyledPostFormProps = {
  formAlign: FormAlign
}
