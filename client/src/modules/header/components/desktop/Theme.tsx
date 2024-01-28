import { useTheme } from '~/modules/theme'
import Dropdown from '~/ui/dropdown/Dropdown'
import DropdownItem from '~/ui/dropdown/DropdownItem'
import IconTheme from '~/ui/icons/IconTheme'

import ThemeList from '../../consts/ThemeList'
import HeaderButton from '../HeaderButton'

const Theme = () => {
  const {
    functions: { setTheme }
  } = useTheme()

  return (
    <Dropdown>
      <HeaderButton icon={<IconTheme />} />

      {ThemeList.map((theme, index) => (
        <DropdownItem
          key={index}
          label={theme.title}
          onClick={() => setTheme(theme.value)}
        />
      ))}
    </Dropdown>
  )
}

export default Theme
