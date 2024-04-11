import { Poppins } from 'next/font/google'
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Poppins({ subsets: ["latin"],weight:['400'] });

export const metadata = {
  metadataBase: new URL('https://udonswap.org/'),
  title: "UdonSwap",
  description: "A DEX Where Your Assets Flow As Smoothly As Music",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights/>
        </body>
    </html>
  );
}
