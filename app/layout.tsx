import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fine Medicine Company - Leading Pharmaceutical Supplier in Pakistan',
  description: 'Fine Medicine Company is a trusted pharmaceutical supplier in Pakistan, providing high-quality medicines and healthcare products to medical institutions and healthcare professionals.',
  keywords: 'pharmaceutical supplier, medicine company, healthcare products, Pakistan, medical supplies, pharmaceutical distributor',
  authors: [{ name: 'Fine Medicine Company' }],
  creator: 'Fine Medicine Company',
  publisher: 'Fine Medicine Company',
  openGraph: {
    title: 'Fine Medicine Company - Leading Pharmaceutical Supplier',
    description: 'Trusted pharmaceutical supplier providing quality medicines and healthcare products in Pakistan.',
    url: 'https://finemedicine.com',
    siteName: 'Fine Medicine Company',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fine Medicine Company - Leading Pharmaceutical Supplier',
    description: 'Trusted pharmaceutical supplier providing quality medicines and healthcare products in Pakistan.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}