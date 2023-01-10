import type { ThemeOption } from '@types'

type InputKeys = keyof typeof input
type InputValues = typeof input[InputKeys]

export type Input = ThemeOption<InputKeys, InputValues>

export const input = {
  chat: {
    large: `
        &>input: {
            height: 48px;
            width: 639px;
            padding: 12px 60px 12px 20px;

            &::placeholder{
                font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #929399;
            }
            $:hover{
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;
            }
            &:focus{
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
            }
        }
    }`,

    small: `
        &>input: {
            height: 40px;
            width: 328px;
            padding: 10px 52px 10px 12px;

            &::placeholder{
                'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #929399;
            }
            $:hover{
                'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #2F2E36;
            }
            $:focus{
                'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #2F2E36;
            }
        },
    `
  },
  default: {
    large: {
      alertText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #929399;',
      errorText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #F36140;',
      inputSize: {
        height: '54px',
        width: '328px'
      },
      labelText:
        'font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: -0.1px; color: #65646A;',
      placeholderText:
        'font-size: 18px; font-weight: 500; line-height: 22px; letter-spacing: -0.05px; color: #929399;',
      priceText:
        'font-size: 18px; font-weight: 500; line-height: 22px; letter-spacing: -0.05px; color: #2F2E36;',
      successText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #4AB783;'
    },

    small: {
      alertText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #929399;',
      errorText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #F36140;',
      inputSize: {
        height: '40px',
        width: '328px'
      },
      labelText:
        'font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: -0.1px; color: #65646A;',
      placeholderText:
        'font-size: 14px; font-weight: 500; line-height: 20px; color: #929399;',
      priceText:
        'font-size: 14px; font-weight: 500; line-height: 20px;, color: #2F2E36;',
      successText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #4AB783;'
    }
  },
  edit: {
    large: {
      alertText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #929399;',
      input: `
        &>input: {
            width: 714px;
            height: 36px;

            &::placeholder{
                'font-size: 28px; font-weight: 500; line-height: 28px; color: #929399;',
            }
            $:hover{
                'font-size: 28px; font-weight: 500; line-height: 28px; letter-spacing: -0.05px; color: #2F2E36;'
            }
            $:focus{
                'font-size: 28px; font-weight: 500; line-height: 28px; letter-spacing: -0.05px; color: #2F2E36;'
            }
        },`
    },

    small: {
      alertText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #929399;',
      input: `&>input: {
            width: 360px;
            height: 36px;

            &::placeholder{
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #929399;',
            }
            $:hover{
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
            }
            $:focus{
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
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
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #929399;',
            }

            $:hover{
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
            }

            $:focus{
                'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
            }
        }
    `,
    small: `
        &>input:{
            padding: 10px 12px 10px 43px;
            width: 328px;
            height: 40px;

            &::placeholder{
                'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #929399;',
            }

            $:hover{
                'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #2F2E36;'
            }

            $:focus{
                'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #2F2E36;'
            }
        }
    `
  }
} as const
