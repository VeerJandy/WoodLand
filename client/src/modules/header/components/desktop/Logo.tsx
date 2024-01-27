import RouterEnum from '~/enums/RouterEnum'
import AppLink from '~/ui/app-link/AppLink'
import IconLogo from '~/ui/icons/IconLogo'

const Logo = () => (
  <AppLink href={RouterEnum.Home} className="flex h-12 items-center gap-2">
    <IconLogo size="20" />
    <span>EverWood</span>
  </AppLink>
)

export default Logo
