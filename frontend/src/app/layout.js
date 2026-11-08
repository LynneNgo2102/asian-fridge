import { Fredoka } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });

export const metadata = { title: 'Asian Fridge', description: 'Healthy Asian recipes from what you already have' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}