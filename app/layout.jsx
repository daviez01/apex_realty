"use client"
import './globals.css'
import React from 'react';

import { Providers } from './providers';
import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box  maxWidth="full" m="auto">
            <header>
              <Navbar />
            </header>
            <main>
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </Box> 
        </Providers>
      </body>
    </html>
  )
}