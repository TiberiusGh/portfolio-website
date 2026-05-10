import { describe, expect, it, vi } from 'vitest'
import { createThemeController, type Theme } from './theme'

function fakeStorage(initial?: string) {
  let value = initial
  return {
    getItem: () => value ?? null,
    setItem: (_: string, v: string) => {
      value = v
    },
    removeItem: () => {
      value = undefined
    },
  }
}

function fakeMedia(matches: boolean) {
  const listeners = new Set<(event?: unknown) => void>()
  return {
    matches,
    addEventListener: (_: string, listener: (event?: unknown) => void) => {
      listeners.add(listener)
    },
    removeEventListener: (_: string, listener: (event?: unknown) => void) => {
      listeners.delete(listener)
    },
    fire: () => listeners.forEach((l) => l()),
  }
}

describe('theme controller', () => {
  it('uses light when system prefers light and there is no persisted choice', () => {
    const controller = createThemeController({
      storage: fakeStorage(),
      prefersDark: fakeMedia(false),
      apply: () => {},
    })

    expect(controller.getResolved()).toBe('light')
  })

  it('uses dark when system prefers dark and there is no persisted choice', () => {
    const controller = createThemeController({
      storage: fakeStorage(),
      prefersDark: fakeMedia(true),
      apply: () => {},
    })

    expect(controller.getResolved()).toBe('dark')
  })

  it('persists user choice across re-initialization', () => {
    const storage = fakeStorage()

    const first = createThemeController({
      storage,
      prefersDark: fakeMedia(false),
      apply: () => {},
    })
    first.setChoice('dark')

    const second = createThemeController({
      storage,
      prefersDark: fakeMedia(false),
      apply: () => {},
    })

    expect(second.getResolved()).toBe('dark')
  })

  it('keeps the user choice when system preference later changes', () => {
    const media = fakeMedia(false)
    const apply = vi.fn<(theme: Theme) => void>()

    const controller = createThemeController({
      storage: fakeStorage(),
      prefersDark: media,
      apply,
    })
    controller.setChoice('light')

    media.matches = true
    media.fire()

    expect(controller.getResolved()).toBe('light')
    expect(apply).toHaveBeenLastCalledWith('light')
  })
})
