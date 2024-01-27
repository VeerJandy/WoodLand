import { AnimatePresence } from 'framer-motion'

import AppLink from '~/ui/app-link/AppLink'

import MenuList from '../../consts/MenuList'
import ContentEnum from '../../enums/ContentEnum'
import useHeader from '../../hooks/useHeader'
import HeaderList from '../HeaderList'

const Menu = () => {
  const {
    state: { isOpen, content },
    functions: { onSetContent }
  } = useHeader()

  return (
    <AnimatePresence mode="popLayout">
      {isOpen && content && ContentEnum.Menu && (
        <HeaderList>
          {MenuList.map(menuItem => (
            <AppLink
              href={menuItem.link}
              key={menuItem.link}
              label={menuItem.title}
              className="flex px-8 py-2"
              onClick={() => onSetContent(null)}
            />
          ))}
        </HeaderList>
      )}
    </AnimatePresence>
  )
}

export default Menu
