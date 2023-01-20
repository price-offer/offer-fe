import { useEffect, useState } from 'react'
import { matchMediaQuery as defaultMatchMediaQuery } from '@styles'

type Device = 'desktop' | 'tablet' | 'mobile'
type MaxWidth = number

type ResponsiveCase<T, K extends keyof T> = {
  [key in Device]: T[K]
}
type MatchMediaQuery = {
  [key in Device]: `(max-width: ${MaxWidth}px)`
}
type MatchMediaQueryParams = MatchMediaQuery | undefined

/**
 *
 * @example
 * const avatarSize = useResponsive<AvatarProps, 'size'>({
 *   desktop: 'medium',
 *   tablet: 'small',
 *   mobile: 'small'
 * });
 */
export const useResponsive = <T, K extends keyof T>(
  responsiveCase: ResponsiveCase<T, K>,
  matchMediaQuery: MatchMediaQueryParams = defaultMatchMediaQuery as MatchMediaQuery
): T[K] => {
  const getDevice = (queries: MatchMediaQuery): Device => {
    const defaultDevice: Device = 'desktop'

    if (typeof window === 'undefined') {
      return defaultDevice
    }

    return Object.keys(queries).reduce<Device>((prev, cur) => {
      const device = cur as Device
      const query = queries[device] as string

      return window.matchMedia(query).matches ? device : prev
    }, defaultDevice)
  }

  const [currentDevice, setCurrentDevice] = useState<Device>(
    getDevice(matchMediaQuery)
  )

  useEffect(() => {
    const matchMedia = Object.keys(matchMediaQuery).map(device => {
      const query = matchMediaQuery[device as Device] as string
      return window.matchMedia(query)
    })

    const handleChange = (): void => {
      setCurrentDevice(getDevice(matchMediaQuery))
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
  }, [matchMediaQuery])

  return responsiveCase[currentDevice] as T[K]
}
