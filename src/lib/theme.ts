export type Theme = 'light' | 'dark'
export type ThemeChoice = Theme | 'system'

const STORAGE_KEY = 'theme-choice'
const DOM_ATTRIBUTE = 'data-theme'

type Storage = Pick<globalThis.Storage, 'getItem' | 'setItem' | 'removeItem'>
type MediaQuery = Pick<MediaQueryList, 'matches' | 'addEventListener' | 'removeEventListener'>

export type ThemeControllerOptions = {
  storage?: Storage
  prefersDark?: MediaQuery
  apply?: (theme: Theme) => void
}

export type ThemeController = {
  getChoice(): ThemeChoice
  getResolved(): Theme
  setChoice(choice: ThemeChoice): void
  subscribe(listener: (theme: Theme) => void): () => void
}

export function createThemeController(options: ThemeControllerOptions = {}): ThemeController {
  const storage = options.storage ?? safeStorage()
  const prefersDark = options.prefersDark ?? safeMediaQuery()
  const apply = options.apply ?? defaultApply

  const listeners = new Set<(theme: Theme) => void>()

  const readChoice = (): ThemeChoice => {
    const stored = storage?.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return 'system'
  }

  const resolve = (choice: ThemeChoice): Theme => {
    if (choice === 'light' || choice === 'dark') return choice
    return prefersDark?.matches ? 'dark' : 'light'
  }

  const emit = () => {
    const theme = resolve(readChoice())
    apply(theme)
    listeners.forEach((listener) => listener(theme))
  }

  prefersDark?.addEventListener('change', emit)

  apply(resolve(readChoice()))

  return {
    getChoice: readChoice,
    getResolved: () => resolve(readChoice()),
    setChoice(choice) {
      if (choice === 'system') {
        storage?.removeItem(STORAGE_KEY)
      } else {
        storage?.setItem(STORAGE_KEY, choice)
      }
      emit()
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

function safeStorage(): Storage | undefined {
  try {
    return globalThis.localStorage
  } catch {
    return undefined
  }
}

function safeMediaQuery(): MediaQuery | undefined {
  if (typeof globalThis.matchMedia !== 'function') return undefined
  return globalThis.matchMedia('(prefers-color-scheme: dark)')
}

function defaultApply(theme: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute(DOM_ATTRIBUTE, theme)
}
