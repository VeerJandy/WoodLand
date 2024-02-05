import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import type { UrlObject } from 'url'

import RouterEnum from '~/enums/RouterEnum'

export interface UseAppList {
  href: RouterEnum | UrlObject | string
}

const useAppList = ({ href }: UseAppList) => {
  const pathname = usePathname()

  const newHref = useMemo(() => {
    const locale = pathname.slice(0, 3)

    if (typeof href === 'string')
      return href[0] === '/' ? `${locale}${href}` : `${locale}/${href}`

    return {
      ...href,
      pathname:
        href.pathname && href.pathname[0] === '/'
          ? `${locale}${href.pathname}`
          : `${locale}/${href.pathname}`
    }
  }, [href])

  return { state: { newHref } }
}

export default useAppList
