import type {TravelInventoryItem} from "../../data/travel-inventory";

export type InventoryCollection = {
  activities: TravelInventoryItem[];
  stays: typeof import("../../data/travel-inventory").baliStayAreas;
  transport: typeof import("../../data/travel-inventory").baliTransport;
  homepageExperiences: TravelInventoryItem[];
  homepageStays: typeof import("../../data/travel-inventory").homepageStays;
};

export interface TravelInventoryProvider {
  readonly id: string;
  getInventory(): Promise<InventoryCollection>;
}
