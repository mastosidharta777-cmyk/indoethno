import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import {Analytics} from "./components/analytics";
import "./globals.css";

const display = Cormorant_Garamond({subsets:["latin"], variable:"--font-display", weight:["500","600","700"]});
const sans = DM_Sans({subsets:["latin"], variable:"--font-sans"});
const siteUrl=process.env.NEXT_PUBLIC_SITE_URL??"https://indoethno.com";
export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  title:{default:"IndoEthno — Discover the Real Indonesia",template:"%s | IndoEthno"},
  description:"AI-powered cultural travel, shaped around the Indonesia you want to know.",
  alternates:{canonical:"/"},
  verification:{google:process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION},
  openGraph:{type:"website",siteName:"IndoEthno",title:"IndoEthno — Discover the Real Indonesia",description:"Culture, food, nature, and authentic experiences across Indonesia.",url:"/"},
  twitter:{card:"summary_large_image",title:"IndoEthno — Discover the Real Indonesia",description:"Culture, food, nature, and authentic experiences across Indonesia."},
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}<Analytics/></body></html>;
}
