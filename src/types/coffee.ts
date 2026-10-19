export interface CoffeeProduct {
  id: string;
  name: string;
  notes: string[];
  roast: string;
  weight: string;
  price: number;
  image: string;
  tag: string;
  tagVariant: "citron" | "lichen" | "gold";
}

export interface SubscriptionPlan {
  title: string;
  description: string;
  price: number;
  period: string;
  packageDetails: string;
  freeDelivery: boolean;
}

export interface RoasteryData {
  name: string;
  city: string;
  address: string;
  batchSizeKg: number;
  foundedYear: number;
  founders: string;
  roastDay: string;
  deliveryDay: string;
  freshnessWindow: string;
  workingHours: { weekdays: string; weekends: string };
  deliveryTerms: { freeFromBYN: number; description: string };
  contacts: { phone: string; address: string; telegram: string; instagram: string };
}
