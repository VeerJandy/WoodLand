import useAdaptiveStore from '~/store/adaptiveStore'

import ContentEnum from '../enums/ContentEnum'
import useHeaderStore from '../store/headerStore'

const useHeader = () => {
  const isMobile = useAdaptiveStore(state => state.isMobile)
  const { isOpen, setIsOpen, content, setContent } = useHeaderStore(state => ({
    isOpen: state.isOpen,
    setIsOpen: state.setIsOpen,
    content: state.content,
    setContent: state.setContent
  }))

  const onSetContent = (newContent: ContentEnum | null) => {
    if (isMobile) {
      setContent(isOpen ? null : newContent)
      setIsOpen()
      return
    }

    if (!isOpen) {
      setContent(newContent)
      setIsOpen()
    }
    if (content === newContent) {
      setContent(null)
      close()
      return
    }

    setContent(newContent)
  }

  return {
    state: { isOpen, content, isMobile },
    functions: { setIsOpen, setContent: onSetContent }
  }
}

export default useHeader
