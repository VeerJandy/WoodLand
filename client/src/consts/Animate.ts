interface AnimateVariant {
  variants: Record<string, object>
  initial: string
  animate: string
  exit: string
}

export const variants: Record<string, AnimateVariant> = {
  opacity: {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
  },
  xAndOpacity: {
    variants: {
      hidden: { opacity: 0, x: 25 },
      visible: { opacity: 1, x: 0 }
    },
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden'
  }
}
