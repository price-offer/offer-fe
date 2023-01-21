import type { AvatarProps, ButtonProps } from '@offer-ui/react'
import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import { useResponsive } from './useResponsive'
import { matchMediaQuery } from '@styles'

describe('hooks/useResponsive()', () => {
  const setViewPort = (device: keyof typeof matchMediaQuery): void => {
    window.matchMedia = vi.fn().mockImplementation(query => ({
      addEventListener: vi.fn(),
      matches: query === matchMediaQuery[device],
      media: '',
      onchange: null,
      removeEventListener: vi.fn()
    }))
  }

  it('viewport가 desktop 미디어쿼리 값에 해당하는 경우, AvatarProps의 size 값을 medium으로 리턴해야 합니다.', () => {
    // Given, When
    setViewPort('desktop')
    const { result } = renderHook(() => {
      return useResponsive<AvatarProps, 'size'>({
        desktop: 'medium',
        mobile: 'small',
        tablet: 'small'
      })
    })

    // Then
    expect(result.current).toBe('medium')
  })

  it('viewport가 mobile 미디어쿼리 값에 해당하는 경우, AvatarProps의 size 값을 small로 리턴해야 합니다.', () => {
    // Given, When
    setViewPort('mobile')
    const { result } = renderHook(() => {
      return useResponsive<AvatarProps, 'size'>({
        desktop: 'medium',
        mobile: 'small',
        tablet: 'xsmall'
      })
    })

    // Then
    expect(result.current).toBe('small')
  })

  it('viewport가 tablet 미디어쿼리 값에 해당하는 경우, ButtonProps의 styleType 값을 outlineDisabled로 리턴해야 합니다.', () => {
    // Given, When
    setViewPort('tablet')
    const { result } = renderHook(() => {
      return useResponsive<ButtonProps, 'styleType'>({
        desktop: 'ghost',
        mobile: 'outline',
        tablet: 'outlineDisabled'
      })
    })

    // Then
    expect(result.current).toBe('outlineDisabled')
  })

  it('viewport가 tablet 미디어쿼리 값에 해당하지만 tablet이 없는 경우, ButtonProps의 styleType 값을 desktop 값인 ghost로 리턴해야 합니다.', () => {
    // Given, When
    setViewPort('tablet')
    const { result } = renderHook(() => {
      return useResponsive<ButtonProps, 'styleType'>({
        desktop: 'ghost',
        mobile: 'outline'
      })
    })

    // Then
    expect(result.current).toBe('ghost')
  })

  it('viewport가 mobile 미디어쿼리 값에 해당하지만 mobile이 없는 경우, ButtonProps의 styleType 값을 tablet 값인 ghost로 리턴해야 합니다.', () => {
    // Given, When
    setViewPort('mobile')
    const { result } = renderHook(() => {
      return useResponsive<ButtonProps, 'styleType'>({
        desktop: 'ghost',
        tablet: 'outlineDisabled'
      })
    })

    // Then
    expect(result.current).toBe('outlineDisabled')
  })
})
