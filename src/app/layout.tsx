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
  <html lang="pt-BR">
    <body
      className={`${titillium.variable} overflow-x-hidden`}
      style={{ fontFamily: 'var(--font-titillium), sans-serif' }}
    >
      {children}
      <Analytics />
    </body>
  </html>
);
}
