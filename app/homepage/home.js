import Image from "next/image";
import main from "../homepage/home.module.scss";
import Navbar from "../navbar/navbar";
import titleImg from "@/public/Subtract.png";
import union from "@/public/Union.png";
import star from "@/public/star.png";
import React from "react";
import udonswap from '@/public/Udonswap_resized.gif'
import half from "@/public/half.png";
import full from "@/public/flowerhalf.png";
import Loader from "../components/Loader";

export default function Homepage() {
  return (
    <React.Fragment>
    {/* <Loader/>  */}
      <main className={main.homeMainDiv}>
        <Navbar />
        <div className={main.boxContainer}>
          <Image src={titleImg} alt="Box Image" className={main.imgdiv} priority/>
          <div className={main.textOverlay}>
          Crafting Seamless Trades, Bowl by Bowl
            <Image
              src={star}
              alt="star"
              className={main.starimg}
              style={{ position: 'absolute' }}
            />
          </div>
        </div>

        <div className={main.boxContainer2}>
          <div className={main.tokenBox}>
            <Image src={udonswap} priority alt="logo" className={main.tokenImg} />
          </div>

          <div className={main.secdiv}>
            <div className={main.redimg}>
              <Image src={union} priority alt="Box Image" className={main.imgdiv2} />
            </div>
            <div className={main.textOverlay2}>
           Experience Seamless Trading, Instant Liquidity, Unmatched Security,
              Experience the Future of Decentralized Finance.
              
            </div>
          </div>
        </div>
        <div className={main.sec2Img}>
          <Image src={half} alt="logo" priority className={main.flowerhalf} />
          <Image src={full} alt="logo" priority className={main.flowerfull} />
        </div>
      </main>
    
  </React.Fragment>
);
}