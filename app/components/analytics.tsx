"use client";

import Script from "next/script";
import {useEffect} from "react";

declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args:unknown[])=>void }
}

export function Analytics(){
  const measurementId=process.env.NEXT_PUBLIC_GA_ID;
  useEffect(()=>{
    const track=(event:MouseEvent)=>{
      const target=event.target as Element|null;
      const anchor=target?.closest<HTMLAnchorElement>('a[href*="traveloka.com"]');
      if(!anchor)return;
      window.gtag?.("event","traveloka_outbound_click",{
        page:window.location.pathname,
        item_name:anchor.dataset.itemName||anchor.textContent?.trim()||"Traveloka inventory",
        destination:anchor.dataset.destination||"Indonesia",
        cta_label:anchor.dataset.ctaLabel||anchor.textContent?.trim()||"Outbound link",
        outbound_url:anchor.href,
        transport_type:"beacon",
      });
    };
    document.addEventListener("click",track,true);
    return()=>document.removeEventListener("click",track,true);
  },[]);
  if(!measurementId)return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive"/><Script id="indoethno-ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}');`}</Script></>;
}
