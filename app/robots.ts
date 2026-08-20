import type {MetadataRoute} from "next";
const site=process.env.NEXT_PUBLIC_SITE_URL??"https://indoethno.com";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/",disallow:["/_next/"]},sitemap:`${site}/sitemap.xml`,host:site}}
