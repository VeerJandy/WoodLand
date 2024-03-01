import type { ReactNode } from 'react'

import ProfileHead from '~/components/profile-head/ProfileHead'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ProfileHead bgImage="https://images.pexels.com/photos/20153222/pexels-photo-20153222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    {children}
  </>
)

export default Layout
