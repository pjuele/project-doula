import './globals.css'
// import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Menu from '@/components/Menu';
import { CssBaseline } from '@mui/material';
import { auth } from '@clerk/nextjs';

const font = Maven_Pro({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();
  const signedIn = (!!userId);

  return (
    <html lang="en">
      <ClerkProvider>
        <CssBaseline />
        <body className={font.className}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  )
}
