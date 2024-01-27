import { isBrowser } from '~/helpers/util'

const useHtmlAttribute = (selector: string) => {
  if (!isBrowser) return () => {}

  const htmlElement = document.querySelector(selector)

  return (attribute: string, value: string) => {
    if (htmlElement) htmlElement.setAttribute(attribute, value)
    // eslint-disable-next-line no-console
    else console.warn(`Element ${selector} not found`)
  }
}

export default useHtmlAttribute
