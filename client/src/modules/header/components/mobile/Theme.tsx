import { AnimatePresence } from 'framer-motion'

import type { ThemeModel } from '~/modules/theme'
import { useTheme } from '~/modules/theme'
import Text from '~/ui/text/Text'

import ThemeList from '../../consts/ThemeList'
import ContentEnum from '../../enums/ContentEnum'
import useHeader from '../../hooks/useHeader'
import HeaderList from '../HeaderList'

const Theme = () => {
  const {
    state: { isOpen, content },
    functions: { setContent }
  } = useHeader()
  const {
    functions: { setTheme }
  } = useTheme()

  const onSetTheme = (theme: ThemeModel) => {
    setTheme(theme)
    setContent(null)
  }

  return (
    <AnimatePresence mode="popLayout">
      {isOpen && content === ContentEnum.Theme && (
        <HeaderList>
          {ThemeList.map((theme, index) => (
            <Text
              key={index}
              label={theme.title}
              as="span"
              className="flex px-8 py-2"
              onClick={() => onSetTheme(theme.value)}
            />
          ))}
        </HeaderList>
      )}
    </AnimatePresence>
  )
}

export default Theme
