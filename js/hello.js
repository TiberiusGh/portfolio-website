export function hello() {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const color = isDarkMode ? ' #ffffff' : '#293241'

  console.log(`%cHi!`, `font-size: 16px; font-weight: bold; color: ${color};`)
  console.log(
    '%cDoes this page need fixing or improvement? Please let me know https://github.com/TiberiusGh/portfolio-website.',
    `font-size: 12px; font-weight: bold; color: ${color};`
  )
  console.log(
    '%c/Tiberius https://linkedin.com/in/tiberius-gh/',
    `font-size: 12px; font-weight: bold; color: ${color};`
  )
}

hello()
