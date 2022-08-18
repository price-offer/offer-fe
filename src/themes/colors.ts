import type { ThemeItem } from '@types'

type BackgroundColorKeys =
  | 'grey01'
  | 'grey02'
  | 'grey03'
  | 'grey04'
  | 'primary'
  | 'primaryWeak'
  | 'white'
type BrandColorKeys = 'primary' | 'primaryWeak' | 'sub' | 'subWeak'
type ActionColorKeys = 'success' | 'error'
type GreyScaleColorKeys =
  | 'white'
  | 'grey05'
  | 'grey10'
  | 'grey20'
  | 'grey30'
  | 'grey50'
  | 'grey70'
  | 'grey90'
  | 'black'
type DimColorKeys = 'opacity50' | 'opacity70'

export interface Colors {
  background: ThemeItem<BackgroundColorKeys, string>
  brand: ThemeItem<BrandColorKeys, string>
  action: ThemeItem<ActionColorKeys, string>
  greyScale: ThemeItem<GreyScaleColorKeys, string>
  dim: ThemeItem<DimColorKeys, string>
}

export const colors: Colors = {
  action: {
    error: '#F36140',
    success: '#4AB783'
  },
  background: {
    grey01: '#FAFAFA',
    grey02: '#F6F6F7',
    grey03: '#F3F3F3',
    grey04: '#EDEEEF',
    primary: '#FF6E59',
    primaryWeak: '#FFF0EE',
    white: '#FFFFFF'
  },
  brand: {
    primary: '#FF6E59',
    primaryWeak: '#FFECE9',
    sub: '#673CE6',
    subWeak: '#E1D8FA'
  },
  dim: {
    opacity50: '#00000080',
    opacity70: '#000000B2'
  },
  greyScale: {
    black: '#000000',
    grey05: '#F6F6F7',
    grey10: '#E8E8EA',
    grey20: '#D1D3D6',
    grey30: '#C6C8CC',
    grey50: '#929399',
    grey70: '#65646A',
    grey90: '#2F2E36',
    white: '#FFFFFF'
  }
}
