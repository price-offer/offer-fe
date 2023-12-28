export {}

declare global {
  type UnknownObject<T = unknown> = { [key: string]: T }

  type KeyOf<T> = keyof T
  type ValueOf<T> = T extends readonly any[] ? T[number] : T[keyof T]

  type StyledProps<T, K extends keyof T> = Required<Pick<T, K>>

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ObjectConstructor {
    entries<T, K>(o: { [s: T]: K } | ArrayLike<T>): [T, K][]
  }
}
