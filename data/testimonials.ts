export interface Testimonial {
  name: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  { name: "PT. Cipta Metal", text: "Predictive maintenance mengurangi downtime 64 jam per bulan. ROI dalam 3 bulan!" },
  { name: "FoodPack Indonesia", text: "Verifikasi invoice 3-way dari 2 hari jadi 15 menit. Staff finance senang." },
  { name: "Plant Cikarang", text: "Dashboard OEE realtime membantu kami naikkan produktivitas 21%." }
];