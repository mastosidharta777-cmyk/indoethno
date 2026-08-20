import type {MetadataRoute} from "next";
const site=process.env.NEXT_PUBLIC_SITE_URL??"https://indoethno.com";
export default function sitemap():MetadataRoute.Sitemap{return ["","/bali","/about","/contact","/privacy","/terms","/affiliate-disclosure"].map((path,i)=>({url:`${site}${path}`,lastModified:new Date(),changeFrequency:i<2?"weekly":"monthly",priority:i===0?1:i===1?0.9:0.5}))}
