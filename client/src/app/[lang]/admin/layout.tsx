import type { ReactNode } from 'react'

import ProfileHead from '~/components/profile-head/ProfileHead'
import RouterEnum from '~/enums/RouterEnum'
import Tab from '~/ui/tabs/Tab'
import Tabs from '~/ui/tabs/Tabs'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <ProfileHead bgImage="https://images.pexels.com/photos/17411096/pexels-photo-17411096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    <section className="container my-4">
      <Tabs initialTabByHref>
        <Tab title="admin.tabs.main" href={RouterEnum.Admin} />
        <Tab title="admin.tabs.users" href={RouterEnum.AdminUsers} />
        <Tab title="admin.tabs.products" href={RouterEnum.AdminProducts} />
        <Tab title="admin.tabs.orders" href={RouterEnum.AdminOrders} />
      </Tabs>

      {children}
    </section>
  </>
)

export default Layout
