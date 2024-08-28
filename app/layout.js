import "./globals.css";
import Header from "./header";
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: "NoxHD UI - UI Library for the Next Generation of Websites",
  description: "UI Library for the Next Generation of Websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
