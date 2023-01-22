import { fonts } from './fonts'
export type SelectBox = typeof selectBox

export const selectBox = {
  medium: {
    default: `
      div:nth-of-type(1){ //triggerWrapper
        border-radius: 6px;
        ${fonts.body02M};
      }
      div:nth-of-type(2){ //StyledOptionsWrapper
        border-radius: 6px;
        top: 48px;
    }`,
    isEmpty: `
        div:nth-of-type(1){ //triggerWrapper
          border-radius: 6px;
          ${fonts.body02M};
          color: #929399;
        }
        div:nth-of-type(2){ //StyledOptionsWrapper
          border-radius: 6px;
          ${fonts.body02M};
          top: 48px;
      }`
  },
  small: {
    default: `
      div:nth-of-type(1){ //triggerWrapper
        border-radius: 4px;
        ${fonts.body02B};
      }
      div:nth-of-type(2){ //StyledOptionsWrapper
        border-radius: 4px;
        ${fonts.body02B};
        top: 40px;
    }`,
    isEmpty: `
        div:nth-of-type(1){ //triggerWrapper
          border-radius: 4px;
          ${fonts.body02B};
          color: #929399;
        }
        div:nth-of-type(2){ //StyledOptionsWrapper
          border-radius: 4px;
          ${fonts.body02B};
          top: 40px;
      }`
  }
} as const
