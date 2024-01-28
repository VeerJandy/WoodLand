import { AnimatePresence } from 'framer-motion'

import type { Locale } from '~/i18n/i18n'
import Text from '~/ui/text/Text'

import LanguageList from '../../consts/LanguageList'
import ContentEnum from '../../enums/ContentEnum'
import useHeader from '../../hooks/useHeader'
import useLanguage from '../../hooks/useLanguage'
import HeaderList from '../HeaderList'

const Language = () => {
  const {
    state: { isOpen, content },
    functions: { setContent }
  } = useHeader()
  const {
    functions: { setLanguage }
  } = useLanguage()

  const onSetLanguage = (lang: Locale) => {
    setLanguage(lang)
    setContent(null)
  }

  return (
    <AnimatePresence mode="popLayout">
      {isOpen && content === ContentEnum.Language && (
        <HeaderList>
          {LanguageList.map((language, index) => (
            <Text
              key={index}
              label={language.title}
              as="span"
              className="flex px-8 py-2"
              onClick={() => onSetLanguage(language.value)}
            />
          ))}
        </HeaderList>
      )}
    </AnimatePresence>
  )
}

export default Language
