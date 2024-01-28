import RouterEnum from '~/enums/RouterEnum'
import { useAuthModal } from '~/modules/auth'
import { useUser } from '~/modules/user'
import Button from '~/ui/button/Button'
import Dropdown from '~/ui/dropdown/Dropdown'
import DropdownItem from '~/ui/dropdown/DropdownItem'
import IconArrowGoBack from '~/ui/icons/IconArrowGoBack'
import IconSettings from '~/ui/icons/IconSettings'
import User from '~/ui/user/User'

const AuthInfo = () => {
  const { user, signOut } = useUser()
  const { open: openAuthModal } = useAuthModal()

  return (
    <div className="ml-2">
      {user ? (
        <Dropdown>
          <div className="flex h-12 items-center">
            <User
              avatarProps={{
                src: user.avatar,
                alt: 'My avatar',
                size: 'sm'
              }}
              name={user.name.firstName}
            />
          </div>

          <DropdownItem
            label="common.settings"
            iconStart={<IconSettings size="14" />}
            href={RouterEnum.Settings}
          />
          <DropdownItem
            label="header.sign_out"
            iconStart={<IconArrowGoBack size="14" />}
            background="red"
            href={RouterEnum.Home}
            onClick={signOut}
          />
        </Dropdown>
      ) : (
        <Button
          size="small"
          background="white"
          label="common.sign_in"
          onClick={openAuthModal}
        />
      )}
    </div>
  )
}

export default AuthInfo
