// 'use client';

import './globals.css'
import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Menu from '@/components/Menu';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const font = Maven_Pro({ weight: '400', subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: {
//     template: 'PDoula | %s',
//     default: 'PDoula',
//   },
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae omnis doloremque, aut reiciendis consectetur saepe ipsa magni obcaecati? Ullam, quod quia? Ut quae blanditiis, debitis nihil facilis odit porro non.',
// }

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={font.className + " bg-hero bg-no-repeat bg-cover h-screen"}>
          {/* <ThemeProvider theme={defaultTheme}> */}
          <CssBaseline />
          <Menu/>
            {children}
          {/* </ThemeProvider> */}
        </body>
      </ClerkProvider>
    </html>
  )
}
