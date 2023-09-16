import { ReactNode } from 'react';
import { Roboto } from '@next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin-ext'], variable: '--font-inter', weight: ['100', '400', '900'] });

export const metadata = {
  title: 'Create Next App',
  description: 'TODO: Add description',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
