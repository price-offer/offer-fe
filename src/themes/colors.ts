import type { ThemeItem } from '@types'

type BackgroundColorKeys = keyof typeof colors.background
type BackgroundColorValues = typeof colors.background[BackgroundColorKeys]
type BrandColorKeys = keyof typeof colors.brand
type BrandColorValues = typeof colors.brand[BrandColorKeys]
type ActionColorKeys = keyof typeof colors.action
type ActionColorValues = typeof colors.action[ActionColorKeys]
type GreyScaleColorKeys = keyof typeof colors.greyScale
type GreyScaleColorValues = typeof colors.greyScale[GreyScaleColorKeys]
type DimColorKeys = keyof typeof colors.dim
type DimColorValues = typeof colors.dim[DimColorKeys]

export interface Colors {
  background: ThemeItem<BackgroundColorKeys, BackgroundColorValues>
  brand: ThemeItem<BrandColorKeys, BrandColorValues>
  action: ThemeItem<ActionColorKeys, ActionColorValues>
  greyScale: ThemeItem<GreyScaleColorKeys, GreyScaleColorValues>
  dim: ThemeItem<DimColorKeys, DimColorValues>
}

export const colors = {
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
} as const
