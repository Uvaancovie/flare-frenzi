// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flare Frenzi',
  description: 'Bringing magic to your events with pyrotechnics and decor!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-yellow-500`}>
        {/* Navbar included here for global display */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
