import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pierwsza próba next/tailwind',
  description: 'Troszke prymitywnie ale zaczynamy dzialac',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const NavButton = () => {
    return (
      <button className='flex justify-end sm:hidden'>Nav</button>
    )
  }

  return (
    <html lang="en">
      <body className='background-image: /img/background.jpg'>
        <header className='flex w-full items-center justify-between'>
          <img src="/img/logo.png" alt="logo" className="h-[100px] px-5 justify-start" />
          <nav className='flex justify-end px-10'>
            <ul className='flex gap-5 text-[17px] text-white max-sm:hidden'>
              <li className='hover:text-[#9f9f9f]'>Home</li>
              <li className='hover:text-[#9f9f9f]'>Our offert</li>
              <li className='hover:text-[#9f9f9f]'>Why us?</li>
              <li className='hover:text-[#9f9f9f]'>Contact</li>
            </ul>
            <NavButton />
            {/* po kliknieciu tego przycisku rozsuwa sie lista z nawigacja */}
          </nav>
        </header>
        <hr className='mx-6' />

        {children}
        <div className='clear-both'></div>
        <footer className='flex lg:absolute bottom-1 w-full justify-center md:relative sm:absolute'>
          <span className='pt-6 pb-6'>Tutaj bedzie stopka</span>
        </footer>
      </body>
    </html>
  )
}
