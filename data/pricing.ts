export interface PricingPlan {
  name: string;
  price: string;
  desc: string;
}

export const pricingPlans: PricingPlan[] = [
  { name: "Starter", price: "Rp4,9 jt/bln", desc: "1 modul (pilih produksi atau back office), 5 user, dashboard standar" },
  { name: "Industrial", price: "Rp11,5 jt/bln", desc: "3 modul hybrid, 15 user, API, whitelabel report" },
  { name: "Enterprise", price: "Custom", desc: "8+ modul, on-premise, dedicated AI engineer, SLA 99,9%" }
];