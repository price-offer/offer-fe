import { colors } from './colors'
import { fonts } from './fonts'
export type Input = typeof input

export const input = {
  chat: {
    large: `
        &>input: {
            height: 48px;
            width: 639px;
            padding: 12px 60px 12px 20px;

            &::placeholder{
               ${fonts.body01R};
                color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.body01R};
                color: ${colors.grayScale90};
            }
            &:focus{
                ${fonts.body01R};
                color: ${colors.grayScale90};
            }
        }
    }`,

    small: `
        &>input: {
            height: 40px;
            width: 328px;
            padding: 10px 52px 10px 12px;

            &::placeholder{
                ${fonts.body02R};
                 color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.body02R};
                 color: ${colors.grayScale90};
            }
            $:focus{
                ${fonts.body02R};
                color: ${colors.grayScale90};
            }
        },
    `
  },
  default: {
    large: {
      default: `
        &>input: {
            margin: 8px 0;
            width: 328px;
            height: 54px;
            border: none;
            padding: 16px 12px 16px 12px;
            &::placeholder{
                ${fonts.subtitle01M};
                color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.subtitle01M};
                color:${colors.grayScale90};
            }
            $:focus{
                ${fonts.subtitle01M};
                color:${colors.grayScale90};
            }
        }`,
      isPrice: `
        &>input: {
            margin: 8px 0;
            width: 328px;
            height: 54px;
            border: none;
            padding: 16px 35px 16px 12px;
            &::placeholder{
                ${fonts.subtitle01M};
                color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.subtitle01M};
                color:${colors.grayScale90};
            }
            $:focus{
                ${fonts.subtitle01M};
                color:${colors.grayScale90};
            }
        }`
    },

    small: {
      default: `
        &>input: {
            margin: 8px 0;
            width: 328px;
            height: 40px;
            border: none;
            padding: 10px 12px 10px 12px;
            &::placeholder{
                ${fonts.body02M};
                color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.body02M};
                color:${colors.grayScale90};
            }
            $:focus{
                ${fonts.caption01M};
                color:${colors.actSuccess};
            }
        }`,
      isPrice: `
        &>input: {
            margin: 8px 0;
            width: 328px;
            height: 54px;
            border: none;
            padding: 10px 35px 10px 12px;
            &::placeholder{
                ${fonts.body02M};
                color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.body02M};
                color:${colors.grayScale90};
            }
            $:focus{
                ${fonts.body02M};
                color:${colors.grayScale90};
            }
        }`
    }
  },
  edit: {
    large: {
      input: `
        &>input: {
            width: 714px;
            height: 36px;

            &::placeholder{
                ${fonts.display02M};
                color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.display02M};
                color:${colors.grayScale90};
            }
            $:focus{
                ${fonts.display02M};
                color:${colors.grayScale90};
            }
        },`
    },

    small: {
      input: `
        &>input: {
            width: 360px;
            height: 36px;

            &::placeholder{
                ${fonts.body01R};
                color: ${colors.grayScale50};
            }
            $:hover{
                ${fonts.body01R};
                color:${colors.grayScale90};
            }
            $:focus{
                ${fonts.body01R};
                color:${colors.grayScale90};
            }
        },`
    }
  },
  search: {
    large: `
        &>input:{
            padding: 18px 12px 18px 43px;
            width: 360px;
            height: 56px;

            &::placeholder{
                ${fonts.body01R};
                color: ${colors.grayScale50};
            }

            $:hover{
                ${fonts.body01R};
                color:${colors.grayScale90};
            }

            $:focus{
                ${fonts.body01R};
                color:${colors.grayScale90};
            }
        }
    `,
    small: `
        &>input:{
            padding: 10px 12px 10px 43px;
            width: 328px;
            height: 40px;

            &::placeholder{
                ${fonts.body02R};
                color: ${colors.grayScale50};
            }

            $:hover{
                ${fonts.body02R};
                color:${colors.grayScale90};
            }

            $:focus{
                ${fonts.body02R};
                color:${colors.grayScale90};
            }
        }
    `
  }
} as const
