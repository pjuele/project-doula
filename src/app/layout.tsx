import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'PDoula | %s',
    default: 'PDoula',
  },
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae omnis doloremque, aut reiciendis consectetur saepe ipsa magni obcaecati? Ullam, quod quia? Ut quae blanditiis, debitis nihil facilis odit porro non.',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        {children}
      </body>
    </html>
  )
}
