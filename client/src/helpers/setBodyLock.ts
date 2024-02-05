import { isBrowser } from '~/helpers/util'

interface SetBodyLock {
  isLockBody?: boolean
  isLockHeader?: boolean
}

const PADDING = '0.375rem'

const isBodyScrollHeightMoreWindow = () => {
  const { body } = document
  const match = matchMedia('(max-width: 768px)')
  if (match.matches) return false
  return body.scrollHeight > window.innerHeight
}

const bodyLock = (isLockBody?: boolean) => {
  const { body } = document
  const classNameForLock = 'lock'
  const isAddPaddingToBody = isBodyScrollHeightMoreWindow()

  if (isLockBody) {
    body.classList.add(classNameForLock)
    if (isAddPaddingToBody) body.style.paddingRight = PADDING
    return
  }
  if (isLockBody === false) {
    body.classList.remove(classNameForLock)
    if (isAddPaddingToBody) body.style.paddingRight = ''
    return
  }
  body.classList.toggle(classNameForLock)
}
const headerLock = (isLockHeader?: boolean) => {
  const header = document.querySelector('header')
  if (!header || !isBodyScrollHeightMoreWindow()) return

  if (isLockHeader) {
    header.style.paddingRight = PADDING
    return
  }
  if (isLockHeader === false) {
    header.style.paddingRight = ''
    return
  }
}

const setBodyLock = ({ isLockBody, isLockHeader }: SetBodyLock) => {
  if (!isBrowser) return

  bodyLock(isLockBody)
  headerLock(isLockHeader)
}

export default setBodyLock
