import { usePathname, useRouter } from 'next/navigation'
import type { ReactElement } from 'react'
import { Children, useEffect, useMemo, useState } from 'react'

import RouterEnum from '~/enums/RouterEnum'
import { checkIsPathnameHasLocale } from '~/i18n/i18n'

interface Head {
  title: string
  key: string
  href: RouterEnum
}

export interface UseTabs {
  children: ReactElement | ReactElement[]
  initialTab?: string
  initialTabByHref?: boolean
}

const useTabs = ({ children, initialTab, initialTabByHref }: UseTabs) => {
  const pathname = usePathname()
  const router = useRouter()
  const childrenArr = Children.toArray(children) as ReactElement[]
  const [activeTab, setActiveTab] = useState<string>()

  const head: Head[] = useMemo(
    () =>
      childrenArr.map(child => ({
        key: child.key!,
        title: child.props.title,
        href: child.props.href ?? ''
      })),
    []
  )

  const content = childrenArr.find(child => child.key === activeTab)

  useEffect(() => {
    if (!childrenArr.length) return

    if (initialTabByHref) {
      let path = pathname
      if (checkIsPathnameHasLocale(path)) path = path.slice(3) // Remove locale from path

      const tab = head.find(head => head.href === path)
      tab && setActiveTab(tab.key)
    } else {
      initialTab
        ? setActiveTab(initialTab)
        : setActiveTab(childrenArr[0].key ?? '')
    }
  }, [])

  const onSetActiveTab = (tabHead: Head) => {
    setActiveTab(() => tabHead.key)
    if (tabHead.href) router.push(tabHead.href)
  }

  return {
    state: { head, content, activeTab },
    functions: { onSetActiveTab }
  }
}

export default useTabs
