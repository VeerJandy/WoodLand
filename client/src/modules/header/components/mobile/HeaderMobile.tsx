import { motion } from 'framer-motion'

import { durationMedium, easeMedium } from '~/consts/Animate'
import IconLanguage from '~/ui/icons/IconLanguage'
import IconTheme from '~/ui/icons/IconTheme'

import ContentEnum from '../../enums/ContentEnum'
import useHeader from '../../hooks/useHeader'
import styles from '../../styles/Header.module.scss'
import HeaderButton from '../HeaderButton'
import Burger from './Burger'
import Language from './Language'
import Logo from './Logo'
import Menu from './Menu'
import Theme from './Theme'

const HeaderMobile = () => {
  const {
    state: { isOpen },
    functions: { setContent }
  } = useHeader()

  return (
    <motion.header
      initial={false}
      animate={{ height: isOpen ? '100vh' : '3rem' }}
      transition={{
        duration: durationMedium,
        ease: easeMedium
      }}
      className={styles.header}
    >
      <div className="flex h-12 justify-between">
        <Logo />

        <nav className="flex">
          <HeaderButton
            icon={<IconTheme />}
            onClick={() => setContent(ContentEnum.Theme)}
          />
          <HeaderButton
            icon={<IconLanguage />}
            onClick={() => setContent(ContentEnum.Language)}
          />
          <Burger />
        </nav>
      </div>

      <Theme />
      <Language />
      <Menu />
    </motion.header>
  )
}

export default HeaderMobile
