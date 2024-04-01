const Router = {
  Home: '/',
  Forbidden: '/forbidden',
  Terms: '/terms',
  Catalog: '/catalog',

  ForgotPassword: '/forgot-password',
  Profile: '/profile',
  ProfileSettings: '/profile/settings',
  Admin: '/admin',
  AdminUsers: '/admin/users',
  AdminProducts: '/admin/products',
  AdminOrders: '/admin/orders',
  SuperAdmin: '/super-admin'
} as const

export type RouterType = (typeof Router)[keyof typeof Router]

export default Router
