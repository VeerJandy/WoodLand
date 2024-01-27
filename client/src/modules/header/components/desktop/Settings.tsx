import AuthInfo from './AuthInfo'
import Theme from './Theme'

const Settings = () => {
  return (
    <nav className="flex items-center justify-center gap-4">
      <Theme />
      <AuthInfo />
    </nav>
  )
}

export default Settings
