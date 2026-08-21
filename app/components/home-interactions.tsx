"use client";

import {useState} from "react";
import {createPortal} from "react-dom";
import {ArrowRight,CalendarDays,Heart,Menu,Search,Users,WandSparkles} from "lucide-react";

export function MobileMenu(){
  const [open,setOpen]=useState(false);
  return <div className="mobile-menu-wrap"><button className="menu" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(value=>!value)}><Menu/></button>{open&&<div className="mobile-menu"><a href="#destinations">Destinations</a><a href="#popular">Things to Do</a><a href="#stays">Hotels</a><a href="#book">Experiences</a><a href="#planner">Trip Planner</a><a href="#discover">Discover</a></div>}</div>;
}

export function MenuIconWithOverlay(){
  const [open,setOpen]=useState(false);
  return <><Menu aria-hidden onClick={event=>{event.stopPropagation();setOpen(value=>!value)}}/>{open&&createPortal(<div className="mobile-menu" role="navigation" aria-label="Mobile navigation"><button aria-label="Close menu" onClick={()=>setOpen(false)}>×</button><a href="#destinations">Destinations</a><a href="#popular">Things to Do</a><a href="#stays">Hotels</a><a href="#book">Experiences</a><a href="#planner">Trip Planner</a><a href="#discover">Discover</a></div>,document.body)}</>;
}

export function BaliMenuIcon(){
  const [open,setOpen]=useState(false);
  return <><Menu aria-hidden onClick={event=>{event.stopPropagation();setOpen(value=>!value)}}/>{open&&createPortal(<div className="mobile-menu" role="navigation" aria-label="Bali navigation"><button aria-label="Close menu" onClick={()=>setOpen(false)}>×</button><a href="/#destinations">Destinations</a><a href="#things-to-do">Things to Do</a><a href="#stays">Hotels</a><a href="#culture">Experiences</a><a href="/#planner">Trip Planner</a><a href="#itinerary">Discover</a></div>,document.body)}</>;
}

export function SaveButton({label}:{label:string}){
  const [saved,setSaved]=useState(false);
  return <button className={saved?"is-saved":""} aria-label={`${saved?"Remove":"Save"} ${label}`} aria-pressed={saved} onClick={()=>setSaved(value=>!value)}><Heart size={18} fill={saved?"currentColor":"none"}/></button>;
}

export function InteractiveHeart({size=18}:{size?:number}){
  const [saved,setSaved]=useState(false);
  return <Heart size={size} fill={saved?"currentColor":"none"} aria-hidden onClick={event=>{event.stopPropagation();setSaved(value=>!value);const parent=event.currentTarget.parentElement;if(parent?.classList.contains("saved"))document.querySelector("#book")?.scrollIntoView({behavior:"smooth"})}}/>;
}

export function Planner(){
  return <section className="planner-wrap" id="planner"><div className="planner-intro"><WandSparkles size={20}/><div><b>Where will Indonesia take you?</b><span>Tell us what you’re drawn to. We’ll shape the rest.</span></div></div><form className="planner" action="/plan" method="get"><label><small>WHERE</small><span><Search size={18}/><select name="destination" aria-label="Choose a destination" defaultValue="bali"><option value="bali">Bali</option></select></span></label><label><small>WHEN</small><span><CalendarDays size={18}/><input name="date" aria-label="Travel date" type="date" min={new Date().toISOString().slice(0,10)} required/></span></label><label><small>TRAVELLERS</small><span><Users size={18}/><select name="guests" aria-label="Number of travellers" defaultValue="2">{[1,2,3,4,5,6].map(value=><option value={value} key={value}>{value} {value===1?"guest":"guests"}</option>)}</select></span></label><fieldset><small>INTERESTS</small><div>{[["culture","Culture"],["food","Food"],["nature","Nature"],["adventure","Adventure"]].map(([value,label])=><label key={value}><input type="checkbox" name="interests" value={value}/><span>{label}</span></label>)}</div></fieldset><button type="submit"><WandSparkles size={18}/> Create my journey</button></form></section>;
}
