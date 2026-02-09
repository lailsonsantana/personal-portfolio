'use client'


import { Titillium_Web } from 'next/font/google';
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-titillium',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={titillium.variable}
        style={{ fontFamily: 'var(--font-titillium), sans-serif' }}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
