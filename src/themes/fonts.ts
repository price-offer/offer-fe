import type { ThemeItem } from '@types'

type FontStyleKeys = 'bold' | 'medium' | 'regular' | 'long'
type FontStyle = ThemeItem<FontStyleKeys, string>
export interface Fonts {
  body01: Omit<FontStyle, 'long'>
  body02: FontStyle
  caption: string
  display01: string
  display02: Pick<FontStyle, 'bold' | 'medium'>
  headline01: string
  headline02: string
  subtitle01: Pick<FontStyle, 'bold' | 'medium'>
}

export const fonts: Fonts = {
  body01: {
    bold: 'font: bold 16px/24px pretendard; letter-spacing: -0.6%;',
    medium: 'font: medium 16px/24px pretendard; letter-spacing: -0.6%;',
    regular: 'font: regular 16px/24px pretendard; letter-spacing: -0.6%;'
  },
  body02: {
    bold: 'font: bold 14px/24px pretendard;',
    long: 'font: regular 14px/26px pretendard; letter-spacing: -0.4%; ',
    medium: 'font: med 14px/20px pretendard;',
    regular: 'font: regular 14px/14px pretendard; letter-spacing: -0.4%; '
  },
  caption: 'font: bold 100px pretendard; letter-spacing: -0.3%;',
  display01: 'font: bold 36px/40px pretendard; letter-spacing: -0.6%;',
  display02: {
    bold: 'font: bold 28px/28px pretendard;',
    medium: 'font: medium 28px/28px pretendard;'
  },
  headline01: 'font: bold 24px/32px pretendard;',
  headline02: 'font: bold 20px/28px pretendard;',
  subtitle01: {
    bold: 'font: bold 18px/22px pretendar; letter-spacing: -0.6%',
    medium: 'font: medium 18px/22px pretendar; letter-spacing: -0.4%'
  }
}
