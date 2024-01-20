import '~/styles/index.scss'

import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import type { Locale } from '~/i18n/i18n'

import Providers from './providers'

const font = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'EverWood',
  description: 'EverWood'
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

  return (
    <html lang={params.lang} className={font.className} data-theme="dark">
      <body className="">
        <Providers dictionary={dictionary}>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
