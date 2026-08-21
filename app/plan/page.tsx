import type {Metadata} from "next";
import {ArrowLeft,ArrowRight,CalendarDays,MapPin,Users} from "lucide-react";
import {inventoryUrl} from "../data/travel-inventory";
import {getTravelInventory} from "../services/travel-inventory";
import "../components/public-page.css";
import "./plan.css";

export const metadata:Metadata={title:"Your Bali itinerary | IndoEthno",description:"A Bali itinerary assembled from verified IndoEthno travel inventory.",robots:{index:false,follow:true}};
type Params={destination?:string|string[];date?:string|string[];guests?:string|string[];interests?:string|string[]};
const allowedInterests=["culture","food","nature","adventure"] as const;

export default async function PlanPage({searchParams}:{searchParams:Promise<Params>}){
 const params=await searchParams;
 const destination=typeof params.destination==="string"?params.destination:"";
 const date=typeof params.date==="string"?params.date:"";
 const guestsValue=typeof params.guests==="string"?Number(params.guests):2;
 const guests=Number.isInteger(guestsValue)&&guestsValue>=1&&guestsValue<=6?guestsValue:2;
 const requested=Array.isArray(params.interests)?params.interests:params.interests?[params.interests]:[];
 const interests=requested.filter((value):value is typeof allowedInterests[number]=>allowedInterests.includes(value as typeof allowedInterests[number]));
 const validDate=/^\d{4}-\d{2}-\d{2}$/.test(date)&&!Number.isNaN(Date.parse(`${date}T00:00:00`));
 const {activities,homepageStays}=await getTravelInventory();
 const recommendations=interests.length?activities.filter(item=>item.interests.some(interest=>interests.includes(interest))):activities;
 const valid=destination==="bali"&&validDate;
 return <main className="public-page plan-page"><nav className="public-nav"><a className="logo" href="/"><span className="logo-mark">IE</span><span>IndoEthno</span></a><div><a href="/bali">Bali</a><a href="/about">About</a><a href="/contact">Contact</a></div></nav><header><a href="/#planner" className="back-link"><ArrowLeft size={15}/> EDIT PLAN</a><p className="eyebrow">YOUR JOURNEY</p><h1>{valid?"Bali, shaped around you":"Complete your trip details"}</h1><p>{valid?"A considered starting point built only from active, verified Traveloka inventory.":"Choose Bali and a valid travel date to create your journey."}</p></header>{valid?<><section className="plan-summary"><div><MapPin size={17}/><span>DESTINATION</span><b>Bali</b></div><div><CalendarDays size={17}/><span>TRAVEL DATE</span><b>{new Intl.DateTimeFormat("en-GB",{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${date}T00:00:00Z`))}</b></div><div><Users size={17}/><span>TRAVELLERS</span><b>{guests} {guests===1?"guest":"guests"}</b></div><div><span>INTERESTS</span><b>{interests.length?interests.map(value=>value[0].toUpperCase()+value.slice(1)).join(" · "):"Open to everything"}</b></div></section><section className="plan-content"><p className="eyebrow">VERIFIED EXPERIENCES</p><h2>Your itinerary starting points</h2>{recommendations.length?<div className="plan-grid">{recommendations.slice(0,6).map((item,index)=><article key={item.productName}><div className="plan-image"><img src={item.image} alt={item.editorialTitle}/><span>0{index+1}</span></div><p>{item.location}</p><h3>{item.editorialTitle}</h3><p className="plan-description">{item.description}</p><div><b>TRAVELOKA</b><span>{item.priceLabel}</span></div><a className="outline-button" href={inventoryUrl(item)} rel="sponsored" data-item-name={item.productName} data-destination="Bali" data-cta-label="Check availability">Check availability <ArrowRight size={15}/></a></article>)}</div>:<div className="plan-empty"><h3>No verified activity currently matches only those interests.</h3><p>We will not substitute an unrelated or unverified product. Edit your interests or browse the complete verified Bali guide.</p><a href="/bali#things-to-do">Browse verified Bali experiences <ArrowRight size={15}/></a></div>}</section><section className="plan-stays"><div><p className="eyebrow">WHERE TO STAY</p><h2>Browse verified Bali stays</h2><p>Live hotel names, prices, ratings, and availability are provided by Traveloka.</p></div><a href={inventoryUrl(homepageStays[0])} rel="sponsored" data-item-name={homepageStays[0].productName} data-destination="Bali" data-cta-label="View latest price">View current Bali inventory <ArrowRight size={16}/></a></section></>:<section className="plan-invalid"><a className="primary-cta dark" href="/#planner">Return to trip planner <ArrowRight size={16}/></a></section>}</main>;
}
