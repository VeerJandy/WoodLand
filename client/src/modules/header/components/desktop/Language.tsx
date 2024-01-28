import Dropdown from '~/ui/dropdown/Dropdown'
import DropdownItem from '~/ui/dropdown/DropdownItem'
import IconLanguage from '~/ui/icons/IconLanguage'

import LanguageList from '../../consts/LanguageList'
import useLanguage from '../../hooks/useLanguage'
import HeaderButton from '../HeaderButton'

const Language = () => {
  const {
    functions: { setLanguage }
  } = useLanguage()

  return (
    <Dropdown>
      <HeaderButton icon={<IconLanguage />} />

      {LanguageList.map((language, index) => (
        <DropdownItem
          key={index}
          label={language.title}
          onClick={() => setLanguage(language.value)}
        />
      ))}
    </Dropdown>
  )
}

export default Language
