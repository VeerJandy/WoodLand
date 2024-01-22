'use client'

import { AnimatePresence } from 'framer-motion'
import { memo } from 'react'

import useToggle from '~/hooks/useToggle'
import { useAuthModal } from '~/modules/auth'
import Modal from '~/ui/modal/Modal'

import SignIn from './SignIn'
import SignUp from './SignUp'
import ToggleForms from './ToggleForms'

const Auth = () => {
  const { isOpen, close } = useAuthModal()
  const [isShowSignUpForm, toggleSignUpForm] = useToggle(true) // TODO: remove "true"

  return (
    <Modal title="auth.modal_title" isOpen={isOpen} onClose={close}>
      <AnimatePresence mode="popLayout">
        {isShowSignUpForm ? <SignUp /> : <SignIn />}
      </AnimatePresence>

      <ToggleForms
        isShowSignUpForm={isShowSignUpForm}
        toggleSignUpForm={toggleSignUpForm}
      />
    </Modal>
  )
}

export default memo(Auth)
