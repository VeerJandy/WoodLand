import classNames from 'classnames'

import RouterEnum from '~/enums/RouterEnum'
import { MotionAppLink } from '~/ui/app-link/AppLink'
import IconLogo from '~/ui/icons/IconLogo'

import useHeader from '../../hooks/useHeader'

const Logo = () => {
  const {
    state: { isOpen }
  } = useHeader()
  return (
    <MotionAppLink
      animate={{ opacity: isOpen ? 0 : 1 }}
      href={RouterEnum.Home}
      className={classNames(
        'flex h-12 items-center gap-2 pl-2',
        isOpen && 'pointer-events-none'
      )}
    >
      <IconLogo size="20" />
      <span>WoodLand</span>
    </MotionAppLink>
  )
}

export default Logo
