import './globals.css'
import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'Apex Realty',
  description: 'website for home listings',
  keywords:
  'Renting, rent, realty, homeowner, amemities, mortgage, house',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <main className='min-h-screen flex'>
           {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
