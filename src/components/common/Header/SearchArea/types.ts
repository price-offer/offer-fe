export type SearchAreaProps = {
  isOpen: boolean
  onClose(): void
  onSubmitValue(value: string): void
}
