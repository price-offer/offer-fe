export type CtaButton = typeof ctaButton

export const ctaButton = {
  large: `{
    height: 64px;
    width: 370px;
    padding: 20px;
  }`,
  medium: `{
    height: 48px;
    width: 370px;
    padding: 12px;
  }`,
  small: `{
    height: 64px;
    width: 72px;
    padding: 4px 8px 4px 8px;
  }`
} as const
