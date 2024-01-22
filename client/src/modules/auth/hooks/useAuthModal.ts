import useAuthStore from '../store/authStore'

const useAuthModal = () => {
  const { isOpen, setIsOpen } = useAuthStore(state => ({
    isOpen: state.isOpen,
    setIsOpen: state.setIsOpen
  }))

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }
}

export default useAuthModal
