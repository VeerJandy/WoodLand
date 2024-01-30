import type { ReactNode } from 'react'

import ProfileHead from '~/components/profile-head/ProfileHead'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ProfileHead />
    {children}
  </>
)

export default Layout
