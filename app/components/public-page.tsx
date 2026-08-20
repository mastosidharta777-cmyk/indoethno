import type {ReactNode} from "react";
import {ArrowLeft,ArrowRight} from "lucide-react";
import "./public-page.css";

export function PublicPage({eyebrow,title,intro,children}:{eyebrow:string;title:string;intro:string;children:ReactNode}){
 return <main className="public-page"><nav className="public-nav"><a className="logo" href="/"><span className="logo-mark">IE</span><span>IndoEthno</span></a><div><a href="/bali">Bali</a><a href="/about">About</a><a href="/contact">Contact</a></div></nav><header><a href="/" className="back-link"><ArrowLeft size={15}/> HOME</a><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></header><article className="public-content">{children}</article><footer className="public-footer"><a className="logo text-white" href="/"><span className="logo-mark">IE</span><span>IndoEthno</span></a><div><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/affiliate-disclosure">Affiliate disclosure</a></div><a href="/bali">Explore Bali <ArrowRight size={15}/></a></footer></main>
}
