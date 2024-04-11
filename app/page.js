import Homepage from "./homepage/home";
import mainpage from "@/app/main.module.css"


export default function Home() {
  
  return (
    <main >
      <Homepage/>
    </main>
  );
}


export const metadata = {
  // metadataBase: new URL('https://localhost:3000'),
  metadataBase: new URL('https://udonswap.org/'),
  title: "UdonSwap",
  description: "A DEX Where Your Assets Flow As Smoothly As Music",
    openGraph: {
      title: "UdonSwap",
      description: "A DEX Where Your Assets Flow As Smoothly As Music",
      url: "https://beatswap-eta.vercel.app/",
      siteName: "UdonSwap",
      images: [
        {
          url:"https://gateway.lighthouse.storage/ipfs/QmQgtmCNXCgAywPcqofYKWAqU5Tb1YWYKtCYjLuio6uLgT", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
              url: "https://gateway.lighthouse.storage/ipfs/QmQgtmCNXCgAywPcqofYKWAqU5Tb1YWYKtCYjLuio6uLgT", // Must be an absolute URL
              width: 1800,
              height: 1600,
              alt: "My custom alt",
            },
        
      ],
      locale: "en_US",
      type: "website",
    },
};
