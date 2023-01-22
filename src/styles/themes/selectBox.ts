import type { ThemeOption } from '@types'

type SelectBoxKeys = keyof typeof selectBox
type SelectBoxValues = typeof selectBox[SelectBoxKeys]

export type SelectBox = ThemeOption<SelectBoxKeys, SelectBoxValues>

export const selectBox = {
  medium: {
    default: `
      div:nth-child(1){ //triggerWrapper
        height: 40px;
        padding: 12px 10px;
        border-radius: 6px;
        font-size: 14px; font-weight: 500; line-height: 20px;
      }
      div:nth-child(2){ //StyledOptionsWrapper
        height: 40px;
        padding: 12px 10px;
        border-radius: 6px;
        font-size: 14px; font-weight: 500; line-height: 20px;
        top: 48px;
    }`,
    isEmpty: `
        div:nth-child(1){ //triggerWrapper
          height: 40px;
          padding: 12px 10px;
          border-radius: 6px;
          font-size: 14px; font-weight: 500; line-height: 20px;
          color: #929399;
        }
        div:nth-child(2){ //StyledOptionsWrapper
          height: 40px;
          padding: 12px 10px;
          border-radius: 6px;
          font-size: 14px; font-weight: 500; line-height: 20px;
          top: 48px;
      }`
  },
  small: {
    default: `
      div:nth-child(1){ //triggerWrapper
        height: 32px;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 14px; font-weight: bold; line-height: 24px; letter-spacing: -0.1px;
      }
      div:nth-child(2){ //StyledOptionsWrapper
        height: 32px;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 14px; font-weight: bold; line-height: 24px; letter-spacing: -0.1px;
        top: 40px;
    }`,
    isEmpty: `
        div:nth-child(1){ //triggerWrapper
          height: 32px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px; font-weight: bold; line-height: 24px; letter-spacing: -0.1px;
          color: #929399;
        }
        div:nth-child(2){ //StyledOptionsWrapper
          height: 32px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px; font-weight: bold; line-height: 24px; letter-spacing: -0.1px;
          top: 40px;
      }`
  }
} as const
