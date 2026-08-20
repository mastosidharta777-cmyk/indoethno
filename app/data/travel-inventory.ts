export type TravelInventoryItem = {
  productName: string;
  editorialTitle: string;
  location: string;
  description: string;
  image: string;
  priceLabel: "Check latest price";
  sourceUrl: string;
  affiliateUrl: string | null;
};

export const inventoryUrl = (item:{sourceUrl:string;affiliateUrl:string|null}) => item.affiliateUrl ?? item.sourceUrl;

export const baliActivities:TravelInventoryItem[] = [
  {productName:"One Day Tour Ubud with Suci Tiara Wisata",editorialTitle:"Discover Ubud’s temples, forest, and terraces",location:"Ubud",description:"A full-day cultural route through Tirta Empul, Monkey Forest, and Tegalalang Rice Terrace.",image:"/images/bali-activity-tirta-empul.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/id-id/activities/indonesia/product/one-day-tour-ubud-with-suci-tiara-wisata-8253116247923",affiliateUrl:null},
  {productName:"Mount Batur Sunrise Trekking Tour",editorialTitle:"Watch sunrise from Mount Batur",location:"Kintamani",description:"Trek to Mount Batur’s summit before dawn and see the caldera in the morning light.",image:"/images/bali-activity-batur.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/id-id/activities/indonesia/product/mount-batur-sunrise-trekking-tour-3506117550416",affiliateUrl:null},
  {productName:"Garuda Wisnu Kencana (GWK) Cultural Park Tickets",editorialTitle:"Explore Bali’s monumental cultural park",location:"Ungasan",description:"Visit the landmark Garuda Wisnu Kencana statue and scheduled cultural performances.",image:"/images/bali-activity-gwk.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/en-id/activities/indonesia/product/garuda-wisnu-kencana-gwk-cultural-park-tickets-2000996301220",affiliateUrl:null},
  {productName:"Uluwatu Bali Sunset Kecak Fire Dance Tour",editorialTitle:"See kecak at the edge of the island",location:"Uluwatu",description:"Watch the Kecak Fire Dance at Uluwatu Temple in one of two evening sessions.",image:"/images/bali-activity-kecak.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/en-id/activities/indonesia/product/uluwatu-bali-sunset-kecak-fire-dance-tour-4156299294273",affiliateUrl:null},
  {productName:"Monkey Forest Ubud Tickets",editorialTitle:"Walk through Ubud’s sacred forest",location:"Ubud",description:"Explore the forest sanctuary, its historic temples, and resident long-tailed macaques.",image:"/images/bali-activity-monkey-forest.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/en-id/activities/indonesia/product/monkey-forest-ubud-tickets-5434637470362",affiliateUrl:null},
  {productName:"Ayung River Rafting by Royal Bali Adventure",editorialTitle:"Raft the forested Ayung gorge",location:"Abiansemal",description:"Follow the Ayung through tropical forest and small waterfalls on a guided rafting experience.",image:"/images/bali-activity-rafting.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/id-id/activities/indonesia/product/ayung-river-rafting-by-royal-bali-adventure-9032078903036",affiliateUrl:null},
  {productName:"East & West Nusa Penida Tour",editorialTitle:"See both sides of Nusa Penida",location:"Nusa Penida",description:"A full-day tour of eastern and western coastal highlights; Traveloka describes swimming and snorkeling among the available activities.",image:"/images/bali-activity-snorkeling.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/en-id/activities/indonesia/product/east-west-nusa-penida-tour-5722534063991",affiliateUrl:null},
  {productName:"Bali Zoo Tickets",editorialTitle:"Spend a day at Bali Zoo",location:"Singapadu",description:"Visit Bali Zoo’s animal habitats, scheduled presentations, and family facilities.",image:"/images/bali-activity-zoo.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/en-id/activities/indonesia/product/bali-zoo-tickets-2000068312783",affiliateUrl:null},
];

export const baliStayAreas=[
 {productName:"Bali hotels — Ubud",place:"Ubud",note:"Culture, river valleys & slow mornings",description:"Browse current Traveloka hotel inventory for Ubud and central Bali.",image:"/images/bali-stay-ubud.png",sourceUrl:"https://www.traveloka.com/id-id/hotel/indonesia/area/ubud-102771",affiliateUrl:null},
 {productName:"Bali hotels — Seminyak",place:"Seminyak",note:"Design, dining & sunset",description:"Browse current Traveloka hotel inventory for Seminyak and Bali’s west coast.",image:"/images/bali-stay-seminyak.png",sourceUrl:"https://www.traveloka.com/id-id/hotel/indonesia/area/seminyak-107716",affiliateUrl:null},
 {productName:"Bali hotels — Canggu",place:"Canggu",note:"Creative energy & rice fields",description:"Browse current Traveloka hotel inventory for Canggu and the southwest coast.",image:"/images/bali-stay-canggu.png",sourceUrl:"https://www.traveloka.com/id-id/hotel/indonesia/area/canggu-107721",affiliateUrl:null},
 {productName:"Bali hotels — Uluwatu",place:"Uluwatu",note:"Cliffs, coves & open horizons",description:"Browse current Traveloka hotel inventory around Uluwatu and the Bukit Peninsula.",image:"/images/bali-stay-uluwatu.png",sourceUrl:"https://www.traveloka.com/id-id/hotel/indonesia/area/uluwatu-30005193",affiliateUrl:null},
];

export const baliTransport=[
 {productName:"Airport Transfer in Bali",title:"Bali airport transfer",description:"Compare available transfers between I Gusti Ngurah Rai Airport and Bali’s main stay areas.",sourceUrl:"https://www.traveloka.com/en-id/airport-transfer/to/bali",affiliateUrl:null},
 {productName:"Bali Car Rental with Driver",title:"Private driver",description:"Browse Traveloka’s current Bali car-rental inventory, including vehicles available with drivers.",sourceUrl:"https://www.traveloka.com/id-id/car-rental/region/bali",affiliateUrl:null},
 {productName:"Tours in Bali",title:"Curated day tour",description:"Compare currently available Bali tours and day trips on Traveloka.",sourceUrl:"https://www.traveloka.com/id-id/activities/indonesia/region/bali-102746/tours/site-tour",affiliateUrl:null},
];

export const homepageExperiences:TravelInventoryItem[]=[
  {...baliActivities[3],editorialTitle:"Kecak and sunset at Uluwatu Temple"},
  {...baliActivities[2],editorialTitle:"Art, performance, and the scale of GWK"},
  {productName:"Airport Transfer in Bali",editorialTitle:"Arrive in Bali with your transfer arranged",location:"BALI · AIRPORT TRANSFER",description:"Compare current airport transfer options to Ubud, Kuta, Seminyak, and beyond.",image:"/images/bali-airport-transfer.png",priceLabel:"Check latest price",sourceUrl:"https://www.traveloka.com/en-id/airport-transfer/to/bali",affiliateUrl:null},
];
