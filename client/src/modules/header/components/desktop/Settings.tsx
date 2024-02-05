import AuthInfo from './AuthInfo'
import Language from './Language'
import Theme from './Theme'

const Settings = () => (
  <nav className="flex items-center justify-end">
    <Language />
    <Theme />
    <AuthInfo />
  </nav>
)

export default Settings
