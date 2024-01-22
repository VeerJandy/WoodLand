'use client'

import { request } from '~/helpers/request'
import useLoading from '~/hooks/useLoading'
import { useConfetti } from '~/modules/confetti'
import { useToast } from '~/modules/toast'
import { UserModel, useUser } from '~/modules/user'

import type { SignIn, SignUp } from '../models/AuthModel'
import useAuthModal from './useAuthModal'

const useAuth = (url: string, isShowConfetti: boolean = false) => {
  const { isLoading, stopLoading, startLoading } = useLoading()
  const { addErrorToast } = useToast()
  const { runOnceConfetti } = useConfetti()
  const { close } = useAuthModal()
  const { signIn } = useUser()

  const onSubmit = async (form: SignUp | SignIn) => {
    startLoading()
    try {
      const { result, data } = await request<UserModel>(url, {
        method: 'POST',
        data: form,
        next: { revalidate: 0 }
      })

      if (result && data) {
        signIn(data)
        close()
        isShowConfetti && runOnceConfetti()
        return
      }
    } catch (e) {
      addErrorToast({
        content: 'errors.something_went_wrong'
      })
      close()
    } finally {
      stopLoading()
    }
  }

  return { functions: { close, onSubmit }, state: { isLoading } }
}

export default useAuth
