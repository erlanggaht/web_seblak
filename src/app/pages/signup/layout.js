import Navigation from '@/app/Components/molecules/navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Signup',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <body className={inter.className}>
      <Navigation/>
        {children}
      </body>
  )
}
