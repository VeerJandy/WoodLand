import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import type { ToastModel } from '../models/ToastModel'

export interface ToastStore {
  toasts: ToastModel[]
  addToast: (toast: ToastModel) => void
  removeToast: (id: string) => void
}

const useToastStore = createWithEqualityFn<ToastStore>(
  set => ({
    toasts: [],

    addToast: toast => {
      set(state => ({ toasts: [...state.toasts, toast] }))

      if (toast.timeout !== null) {
        setTimeout(() => {
          set(state => ({
            toasts: state.toasts.filter(t => t.id !== toast.id)
          }))
        }, toast.timeout)
      }
    },
    removeToast: id =>
      set(state => ({ toasts: state.toasts.filter(t => t.id !== id) }))
  }),
  shallow
)

export default useToastStore
