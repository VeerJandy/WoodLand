'use server'

import { headers } from 'next/headers'
import { userAgent } from 'next/server'

/**
 * Hook return isMobile
 *
 * Work only server side
 */
const useDeviceDetect = (): boolean => {
  const { device } = userAgent({ headers: headers() })
  return device.type === 'mobile'
}

export default useDeviceDetect
