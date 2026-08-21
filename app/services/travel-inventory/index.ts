import type {TravelInventoryLink} from "../../data/travel-inventory";
import type {InventoryCollection,TravelInventoryProvider} from "./provider";
import {StaticTravelokaProvider} from "./static-provider";

const provider:TravelInventoryProvider=new StaticTravelokaProvider();
const active=<T extends {active:boolean}>(items:T[])=>items.filter(item=>item.active);

export async function getTravelInventory():Promise<InventoryCollection>{
  const inventory=await provider.getInventory();
  return {
    activities:active(inventory.activities),
    stays:active(inventory.stays),
    transport:active(inventory.transport),
    homepageExperiences:active(inventory.homepageExperiences),
    homepageStays:active(inventory.homepageStays),
  };
}

export async function getInventoryLinks():Promise<TravelInventoryLink[]>{
  const inventory=await provider.getInventory();
  const all=[...inventory.activities,...inventory.stays,...inventory.transport,...inventory.homepageExperiences,...inventory.homepageStays];
  return [...new Map(all.map(item=>[item.sourceUrl,item])).values()];
}

export type {InventoryCollection,TravelInventoryProvider} from "./provider";
