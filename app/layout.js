import "./globals.css";
import Header from "./header";
import { GeistSans } from 'geist/font/sans';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "NoxHD UI - UI Library for the Next Generation of Websites",
  description: "UI Library for the Next Generation of Websites",
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
