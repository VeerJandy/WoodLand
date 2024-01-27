import { motion } from 'framer-motion'

import { durationMedium, easeMedium } from '~/consts/Animate'

import useHeader from '../../hooks/useHeader'
import styles from '../../styles/Header.module.scss'
import Burger from './Burger'
import Logo from './Logo'
import Menu from './Menu'

const HeaderMobile = () => {
  const {
    state: { isOpen }
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

        <nav>
          <Burger />
        </nav>
      </div>

      <Menu />
    </motion.header>
  )
}

export default HeaderMobile
