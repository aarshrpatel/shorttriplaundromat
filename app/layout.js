import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://shorttriplaundromat.com'),
  title: {
    default: 'Short Trip Laundromat | Fast, Clean Laundry Care',
    template: '%s | Short Trip Laundromat'
  },
  description:
    'Short Trip Laundromat provides fast wash-and-fold, self-service, and commercial laundry support for busy neighborhoods.',
  keywords: ['laundromat', 'wash and fold', 'commercial laundry', 'same-day laundry'],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Short Trip Laundromat',
    description:
      'Fast, clean, neighborhood-focused laundry services with transparent pricing and easy scheduling.',
    url: 'https://shorttriplaundromat.com',
    siteName: 'Short Trip Laundromat',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Short Trip Laundromat',
    description: 'Fast, clean, neighborhood-focused laundry services.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
