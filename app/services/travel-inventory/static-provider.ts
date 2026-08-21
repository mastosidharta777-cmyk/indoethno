import {baliActivities,baliStayAreas,baliTransport,homepageExperiences,homepageStays} from "../../data/travel-inventory";
import type {TravelInventoryProvider} from "./provider";

export class StaticTravelokaProvider implements TravelInventoryProvider {
  readonly id="traveloka-static";

  async getInventory(){
    return {activities:baliActivities,stays:baliStayAreas,transport:baliTransport,homepageExperiences,homepageStays};
  }
}
