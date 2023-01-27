import { useCallback, useEffect, useState } from 'react'
import type { Device, MatchMediaQuery } from '@styles'
import { matchMediaQuery as defaultMatchMediaQuery } from '@styles'

interface ResponsiveCase<T, K extends keyof T> {
  desktop: T[K]
  mobile?: T[K]
  tablet?: T[K]
}
type MatchMediaQueryParams = MatchMediaQuery | undefined

/**
 *
 * @example
 * const avatarSize = useResponsive<AvatarProps, 'size'>({
 *   desktop: 'medium',
 *   tablet: 'small',
 *   mobile: 'xsmall'
 * });
 */
export const useResponsive = <T, K extends keyof T>(
  responsiveCase: ResponsiveCase<T, K>,
  matchMediaQuery: MatchMediaQueryParams = defaultMatchMediaQuery
): T[K] => {
  const [responsiveValue, setResponsiveValue] = useState<T[K]>()

  const getDevice = useCallback(
    (queries: MatchMediaQuery): Device => {
      const defaultDevice: Device = 'desktop'

      if (typeof window === 'undefined') {
        return defaultDevice
      }

      const device = (Object.keys(queries) as Device[]).reduce(
        (prev, device) => {
          const query = queries[device]

          return window.matchMedia(query).matches ? device : prev
        },
        defaultDevice
      )
      const isTablet = device === 'tablet'

      return responsiveCase[device] ? device : isTablet ? 'desktop' : 'tablet'
    },
    [responsiveCase]
  )

  useEffect(() => {
    const matchMedia = (Object.keys(matchMediaQuery) as Device[]).map(
      device => {
        const query = matchMediaQuery[device]
        return window.matchMedia(query)
      }
    )

    const handleChange = (): void => {
      setResponsiveValue(responsiveCase[getDevice(matchMediaQuery)])
    }

    handleChange()

    matchMedia.forEach(media => {
      media.addEventListener('change', handleChange)
    })

    return () => {
      matchMedia.forEach(media => {
        media.removeEventListener('change', handleChange)
      })
    }
  }, [getDevice, responsiveCase, matchMediaQuery])

  return (responsiveValue as T[K]) || responsiveCase.desktop
}
