import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WiDS Dhahran @ KFUPM',
  description:
    'Join us for the WiDS Dhahran @ KFUPM event, a global conference featuring inspiring talks and workshops in data science and AI.',
  openGraph: {
    images: [{ url: './og-image.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: './og-image.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
