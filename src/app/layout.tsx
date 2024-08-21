import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import ShadowLightEffect from '@/components/ShadowLightEffect';

export const metadata: Metadata = {
  title: 'Cheer Chokwittaya',
  description: 'Cheer Chokwittaya Portfolio website',
};

const openSans = Open_Sans({
  subsets: ['latin'], // Choose the subsets you need
  weight: ['400', '700'], // Specify the font weights you need
  variable: '--font-open-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${openSans.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 relative`}
      >
        <div className="relative">
          <ShadowLightEffect />
          {children}
        </div>
      </body>
    </html>
  );
}
