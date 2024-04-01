import useAuthStore from '../store/authStore'

const useAuth = () => {
  const { isShowAuthModal, setIsShowAuthModal } = useAuthStore(state => state)

  return { isShowAuthModal, setIsShowAuthModal }
}

export default useAuth
