import { Poppins } from 'next/font/google'
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


const poppins = Poppins({ subsets: ["latin"],weight:'400',display:'swap', preload:false });

export const metadata = {
  metadataBase: new URL('https://udonswap.org/'),
  title: "UdonSwap",
  description: "A DEX Where Your Assets Flow As Smoothly As Music",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <SpeedInsights/>
        </body>
    </html>
  );
}
