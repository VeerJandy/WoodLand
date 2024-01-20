import ToastVariantEnum from '../enum/ToastVariantEnum'

export const getColor = (variant: ToastVariantEnum): string => {
  switch (variant) {
    case ToastVariantEnum.Success:
      return 'green-4'
    case ToastVariantEnum.Error:
      return 'red-4'
    case ToastVariantEnum.Warning:
      return 'yellow-2'
    case ToastVariantEnum.Info:
      return 'blue-4'
    default:
      return ''
  }
}
