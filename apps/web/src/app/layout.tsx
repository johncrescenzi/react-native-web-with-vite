// import 'raf/polyfill'
import { Inter } from 'next/font/google'

import './globals.css'

import { Providers } from './providers'
import { StylesProvider } from './styles-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <StylesProvider>{children}</StylesProvider>
        </Providers>
      </body>
    </html>
  )
}