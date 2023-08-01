export type KeyOf<T> = keyof T
export type ValueOf<T> = T[keyof T]

export declare type StyledProps<T, K extends keyof T> = Required<Pick<T, K>>
