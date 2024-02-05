import { AnimatePresence } from 'framer-motion'

import RouterEnum from '~/enums/RouterEnum'
import { useUser } from '~/modules/user'
import AppLink from '~/ui/app-link/AppLink'
import Divider from '~/ui/divider/Divider'
import User from '~/ui/user/User'

import MenuList from '../../consts/MenuList'
import ContentEnum from '../../enums/ContentEnum'
import useHeader from '../../hooks/useHeader'
import HeaderList from '../HeaderList'

const Menu = () => {
  const {
    state: { isOpen, content },
    functions: { setContent }
  } = useHeader()
  const { user, signOut } = useUser()

  const onSignOut = async () => {
    setContent(null)
    await signOut()
  }

  return (
    <AnimatePresence mode="popLayout">
      {isOpen && content === ContentEnum.Menu && (
        <HeaderList>
          {MenuList.map(menuItem => (
            <AppLink
              href={menuItem.link}
              key={menuItem.link}
              label={menuItem.title}
              className="flex px-8 py-2"
              onClick={() => setContent(null)}
            />
          ))}
          {user && (
            <>
              <Divider className="mx-8" />
              <AppLink
                href={RouterEnum.Profile}
                className="px-8 py-2"
                onClick={() => setContent(null)}
              >
                <User
                  avatarProps={{
                    src: user.avatar,
                    alt: 'My avatar'
                  }}
                  name={user.name.firstName}
                  nameSize="h4"
                />
              </AppLink>
            </>
          )}
          {user && (
            <AppLink
              href={RouterEnum.ProfileSettings}
              label="common.settings"
              className="flex px-8 py-2"
              onClick={() => setContent(null)}
            />
          )}
          {user && (
            <AppLink
              href={RouterEnum.Home}
              label="header.sign_out"
              className="flex px-8 py-2"
              onClick={onSignOut}
            />
          )}
        </HeaderList>
      )}
    </AnimatePresence>
  )
}

export default Menu
