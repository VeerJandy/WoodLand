import { isBrowser } from '~/helpers/util'

const setBodyLock = (isLock: boolean) => {
  if (!isBrowser) return

  const classNameForLock = 'lock'
  const { body } = document
  const header = document.querySelector('header')!

  if (isLock) {
    body.classList.add(classNameForLock)
    header.style.paddingRight = '0.375rem'
    body.style.paddingRight = '0.375rem'
    return
  }
  if (isLock === false) {
    body.classList.remove(classNameForLock)
    header.style.paddingRight = ''
    body.style.paddingRight = ''
    return
  }
  body.classList.toggle(classNameForLock)
}

export default setBodyLock
