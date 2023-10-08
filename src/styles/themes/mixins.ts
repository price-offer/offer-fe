import { css } from '@emotion/react'

export const mixins = {
  textEllipsis: css`
    display: block;
    overflow: hidden;

    text-overflow: ellipsis;
    white-space: nowrap;
  `
}

export type Mixins = typeof mixins
