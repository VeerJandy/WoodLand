import { useTheme } from '~/modules/theme'
import Dropdown from '~/ui/dropdown/Dropdown'
import DropdownItem from '~/ui/dropdown/DropdownItem'
import IconTheme from '~/ui/icons/IconTheme'

import HeaderButton from '../HeaderButton'

const Theme = () => {
  const {
    functions: { onSetTheme }
  } = useTheme()

  return (
    <Dropdown>
      <HeaderButton icon={<IconTheme />} />

      <DropdownItem
        label="header.light_theme"
        onClick={() => onSetTheme('light')}
      />
      <DropdownItem
        label="header.dark_theme"
        onClick={() => onSetTheme('dark')}
      />
      <DropdownItem
        label="header.system_theme"
        onClick={() => onSetTheme(null)}
      />
    </Dropdown>
  )
}

export default Theme
