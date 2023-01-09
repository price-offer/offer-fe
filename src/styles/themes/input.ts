import type { ThemeOption } from '@types'

type InputKeys = keyof typeof input
type InputValues = typeof input[InputKeys]

export type Input = ThemeOption<InputKeys, InputValues>

export const input = {
  chat: {
    large: {
      inputSize: {
        height: '48px',
        width: '639px'
      },
      placeholderText:
        'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #929399;',
      typingText:
        'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
    },

    small: {
      inputSize: {
        height: '40px',
        width: '328px'
      },
      placeholderText:
        'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #929399;',
      typingText:
        'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #2F2E36;'
    }
  },
  edit: {
    large: {
      alertText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #929399;',
      inputSize: {
        height: '50px',
        width: '714px'
      },
      labelText:
        'font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: -0.1px; color: #65646A;',
      placeholderText:
        'font-size: 28px; font-weight: 500; line-height: 28px; color: #929399;',
      typingText:
        'font-size: 28px; font-weight: 500; line-height: 28px; letter-spacing: -0.05px; color: #2F2E36;'
    },

    small: {
      alertText:
        'font-size: 12px; font-weight: 500; line-height: 16px; letter-spacing: -0.05px; color: #929399;',
      inputSize: {
        height: '50px',
        width: '714px'
      },
      labelText:
        'font-size: 16px; font-weight: 500; line-height: 24px; letter-spacing: -0.1px; color: #65646A;',
      placeholderText:
        'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #929399;',
      typingText:
        'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
    }
  },
  price: {
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
  search: {
    large: {
      inputSize: {
        height: '56px',
        width: '360px'
      },
      placeholderText:
        'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #929399;',
      typingText:
        'font-size: 16px; font-weight: normal; line-height: 24px; letter-spacing: -0.1px; color: #2F2E36;'
    },

    small: {
      inputSize: {
        height: '56px',
        width: '360px'
      },
      placeholderText:
        'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #929399;',
      typingText:
        'font-size: 14px; font-weight: normal; line-height: 20px; letter-spacing: -0.1px; color: #2F2E36;'
    }
  }
} as const
