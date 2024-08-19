import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ShadowLightEffect from '@/components/ShadowLightEffect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cheer Chokwittaya',
  description: 'Cheer Chokwittaya Portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative`}
      >
        <div className="relative">
          <ShadowLightEffect />
          {children}
        </div>
      </body>
    </html>
  );
}
