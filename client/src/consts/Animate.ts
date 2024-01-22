interface AnimateVariant {
  variants: Record<string, object>
  initial: string
  animate: string
  exit: string
}

export const variants: Record<'opacity' | 'xAndOpacity', AnimateVariant> = {
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

export const durationSmall = 0.24
export const durationMedium = 0.422

export const easeMedium = [0.4, 0, 0.6, 1]
