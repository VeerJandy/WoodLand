import ToastVariantEnum from '../enum/ToastVariantEnum'
import { AddToast } from '../models/ToastModel'
import useToastStore from '../store/toastStore'

const DEFAULT_TIMEOUT = 5000

const useToast = () => {
  const addToast = useToastStore(state => state.addToast)

  return {
    addInfoToast: (toast: AddToast) =>
      addToast({
        timeout: DEFAULT_TIMEOUT,
        ...toast,
        title: 'common.info',
        id: Date.now().toString(),
        variant: ToastVariantEnum.Info
      }),
    addSuccessToast: (toast: AddToast) =>
      addToast({
        timeout: DEFAULT_TIMEOUT,
        ...toast,
        title: 'common.success',
        id: Date.now().toString(),
        variant: ToastVariantEnum.Success
      }),
    addErrorToast: (toast: AddToast) =>
      addToast({
        timeout: DEFAULT_TIMEOUT,
        ...toast,
        title: 'common.error',
        id: Date.now().toString(),
        variant: ToastVariantEnum.Error
      }),
    addWarningToast: (toast: AddToast) =>
      addToast({
        timeout: DEFAULT_TIMEOUT,
        ...toast,
        title: 'common.warning',
        id: Date.now().toString(),
        variant: ToastVariantEnum.Warning
      })
  }
}

export default useToast
