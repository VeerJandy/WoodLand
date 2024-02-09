import '~/styles/index.scss'

import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import type { Locale } from '~/i18n/i18n'
import { Auth } from '~/modules/auth'
import { Footer } from '~/modules/footer'
import { Header } from '~/modules/header'
import { Toast } from '~/modules/toast'
import { getUser } from '~/modules/user'

import Providers from './providers'

const font = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'WoodLand',
  description: 'WoodLand'
}

interface RootLayoutProps {
  children: ReactNode
  params: { lang: Locale }
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const dictionary = await fs.readFile(
    process.cwd() + `/src/i18n/dictionaries/${params.lang}.json`,
    'utf8'
  )
  const user = await getUser()

  return (
    <html lang={params.lang} className={font.className} data-theme="dark">
      <body className="scroll-bar bg-gray-0 text-black transition-colors dark:bg-black dark:text-white">
        <Providers dictionary={dictionary} user={user}>
          <Header />
          <main>{children}</main>
          <Footer />

          <Auth />
          <Toast />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
