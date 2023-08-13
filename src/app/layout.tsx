import './globals.css'
import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'
import Menu from '@/components/Menu';

const font = Maven_Pro({ weight: '400', subsets: ['latin'] })

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
      <body className={font.className + " bg-hero bg-no-repeat bg-cover"}>
        <Menu/>
        {children}
      </body>
    </html>
  )
}
