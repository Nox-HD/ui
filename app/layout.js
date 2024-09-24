import "./globals.css";
import Header from "./header";
import { GeistSans } from 'geist/font/sans';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "NoxHD UI - UI Library for Next-Gen Websites",
  description: "UI Library for Next-Gen Websites",
  openGraph: {
    title: 'NoxHD UI',
    description: 'Advanced UI Library for Modern Web Applications',
    url: 'https://ui.noxhd.com',
    siteName: 'NoxHD UI',
    images: [
      {
        url: 'logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-53TDXRED5K" />
      <body className={GeistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
