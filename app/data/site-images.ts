export type SiteImage = {
  imageUrl: string;
  imageSource: "Unsplash";
  imageSourceUrl: string;
  imageAlt: string;
  imageLocation: string;
  imageLicense: "Unsplash License";
};

export const approvedSiteImages = {
  homeHero: {
    imageUrl: "https://unsplash.com/photos/rice-terraces-in-tegelalang-bali--2WlTWZLnRc/download?force=true&w=2400",
    imageSource: "Unsplash",
    imageSourceUrl: "https://unsplash.com/photos/rice-terraces-in-tegelalang-bali--2WlTWZLnRc",
    imageAlt: "Rice terraces in Tegallalang, Bali",
    imageLocation: "Tegallalang, Bali, Indonesia",
    imageLicense: "Unsplash License",
  },
  baliDestination: {
    imageUrl: "https://images.unsplash.com/photo-1557093793-d149a38a1be8?auto=format&fit=crop&w=1600&q=85",
    imageSource: "Unsplash",
    imageSourceUrl: "https://unsplash.com/photos/rice-terraces-jN9JnZ-SyVc",
    imageAlt: "Rice terraces at Tegalalang in Ubud, Bali",
    imageLocation: "Tegalalang Rice Terrace, Ubud, Bali, Indonesia",
    imageLicense: "Unsplash License",
  },
  yogyakartaDestination: {
    imageUrl: "https://images.unsplash.com/photo-1780748549579-c22a0ff53982?auto=format&fit=crop&w=1400&q=85",
    imageSource: "Unsplash",
    imageSourceUrl: "https://unsplash.com/photos/borobudur-temple-stupas-at-dawn-with-misty-mountains-hLryfyTDgGs",
    imageAlt: "Borobudur temple stupas at dawn with misty mountains",
    imageLocation: "Borobudur, Magelang Regency, Central Java, Indonesia",
    imageLicense: "Unsplash License",
  },
  lombokDestination: {
    imageUrl: "https://images.unsplash.com/photo-1722252798861-66ce441a2b4b?auto=format&fit=crop&w=1400&q=85",
    imageSource: "Unsplash",
    imageSourceUrl: "https://unsplash.com/photos/a-view-of-the-ocean-from-a-hill-jqzyHv9TWeA",
    imageAlt: "Tropical coastline viewed from a hill in Kuta, Lombok",
    imageLocation: "Kuta Lombok Beach, Central Lombok, West Nusa Tenggara, Indonesia",
    imageLicense: "Unsplash License",
  },
} as const satisfies Record<string, SiteImage>;
