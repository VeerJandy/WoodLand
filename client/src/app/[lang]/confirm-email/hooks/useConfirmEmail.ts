import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import RouterEnum from '~/enums/RouterEnum'
import { request } from '~/helpers/request'
import { useToast } from '~/modules/toast'
import { useUser } from '~/modules/user'

const useConfirmEmail = (email: string) => {
  const router = useRouter()
  const { addSuccessToast, addErrorToast } = useToast()
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      router.replace(RouterEnum.Home)
      return
    }

    const confirmEmail = async () => {
      const { result } = await request('/auth/confirm-email', {
        data: { email }
      })
      result
        ? addSuccessToast({ content: 'auth.email_confirmed_success' })
        : addErrorToast({ content: 'auth.email_confirmed_error' })

      router.replace(RouterEnum.Home)
    }

    confirmEmail()
  }, [])
}

export default useConfirmEmail
