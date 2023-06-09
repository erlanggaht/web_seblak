import Navigation from '@/app/Components/molecules/navigation'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'List Menu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation/>
        {children}
        </>
  )
}
