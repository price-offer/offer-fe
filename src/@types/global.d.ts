export {}

declare global {
  type UnknownObject<T = unknown> = { [key: string]: T }

  type KeyOf<T> = keyof T
  type ValueOf<T> = T extends readonly any[] ? T[number] : T[keyof T]

  type StyledProps<T, K extends keyof T> = Required<Pick<T, K>>
}
