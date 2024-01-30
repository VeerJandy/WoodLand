import { motion } from 'framer-motion'

import { durationMedium, easeMedium } from '~/consts/Animate'

import useHeader from '../../hooks/useHeader'
import styles from '../../styles/Header.module.scss'
import Logo from './Logo'
import Menu from './Menu'
import Settings from './Settings'

const HeaderDesktop = () => {
  const {
    state: { isOpen }
  } = useHeader()

  return (
    <motion.header
      initial={false}
      animate={{ height: isOpen ? 'fit-content' : '3rem' }}
      transition={{
        duration: durationMedium,
        ease: easeMedium
      }}
      className={styles.header}
    >
      <div className="container grid h-12 grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)] gap-4">
        <Logo />
        <Menu />
        <Settings />
      </div>
    </motion.header>
  )
}

export default HeaderDesktop
