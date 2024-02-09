'use client'

import type { UseFormReturn } from 'react-hook-form'

import { request } from '~/helpers/request'
import setFormErrors from '~/helpers/setFormErrors'
import useLoading from '~/hooks/useLoading'
import { useConfetti } from '~/modules/confetti'
import { useToast } from '~/modules/toast'
import type { UserModel } from '~/modules/user'
import { useUser } from '~/modules/user'

import type { SignIn, SignUp } from '../models/AuthModel'
import useAuthModal from './useAuthModal'

const useAuth = (url: string, isShowConfetti: boolean = false) => {
  const { isLoading, stopLoading, startLoading } = useLoading()
  const { addErrorToast } = useToast()
  const { runOnceConfetti } = useConfetti()
  const { close } = useAuthModal()
  const { signIn } = useUser()

  const submit = async (
    formState: SignUp | SignIn,
    { setError }: UseFormReturn
  ) => {
    startLoading()
    try {
      const { result, data, message } = await request<UserModel>(url, {
        method: 'POST',
        data: formState,
        next: { revalidate: 0 }
      })

      if (!result) {
        setFormErrors(message, setError)
        stopLoading()
        return
      }

      if (data) {
        signIn(data)
        close()
        isShowConfetti && runOnceConfetti()
      }
      return data
    } catch (e) {
      addErrorToast({
        content: 'errors.something_went_wrong'
      })
      close()
    } finally {
      stopLoading()
    }
  }

  return {
    functions: { close, submit },
    state: { isLoading }
  }
}

export default useAuth
