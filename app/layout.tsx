import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flare Frenzi',
  description: 'Bringing magic to your events with pyrotechnics and decor!',
  openGraph: {
    title: 'Flare Frenzi',
    description: 'Bringing magic to your events with pyrotechnics and decor!',
    url: 'https://flare-frenzi.vercel.app',
    siteName: 'Flare Frenzi',
    images: [
      {
        url: '/logo2.JPG', // Logo file in the public folder
        width: 1200,
        height: 630,
        alt: 'Flare Frenzi Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Add favicon if desired */}
        <meta property="og:title" content="Flare Frenzi" />
        <meta property="og:description" content="Bringing magic to your events with pyrotechnics and decor!" />
        <meta property="og:url" content="https://flare-frenzi.vercel.app" />
        <meta property="og:image" content="/logo2.JPG" /> {/* Update to your logo */}
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.className} bg-black text-yellow-500`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
