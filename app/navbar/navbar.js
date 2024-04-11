import Image from "next/image";
import logo from "@/public/UdonSwapLogo.png";
import navStyle from "../navbar/navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={navStyle.divtoflexlogoconnectwallet}>
      <div className={navStyle.logoimg}>
        <Link href="/">
          <Image
            className={navStyle.smartlogportal}
            src={logo}
            alt="not foundd"
          />
        </Link>
      </div>

      <div className={navStyle.connectwalletbuttondiv}>
        <Link href="https://app.udonswap.org/#/swap" target="_blank">
          <button
            className={`${navStyle["navBtn"]} ${navStyle["effect"]} ${navStyle["effect-5"]}`}
          >
            LAUNCH APP
          </button>
        </Link>
      </div>
    </div>
  );
}
