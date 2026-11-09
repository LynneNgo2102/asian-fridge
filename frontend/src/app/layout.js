import { Fredoka } from 'next/font/google';
import './globals.css';
import MushroomCursor from '@/components/ui/MushroomCursor';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });

export const metadata = { title: 'Asian Fridge', description: 'Healthy Asian recipes from what you already have' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.variable}>
       <body className="font-sans antialiased">
          <a href="#main" className="sr-only rounded-full bg-cream px-4 py-2 focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50">
            Skip to content
          </a>
          <MushroomCursor />
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}