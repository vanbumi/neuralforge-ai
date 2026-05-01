export interface FAQ {
  q: string;
  a: string;
}

export const faqs: FAQ[] = [
  {
    q: "Apakah data pabrik kami aman?",
    a: "100% aman. Kami support on-premise deployment, data tidak keluar server Anda. Untuk cloud, kami enkripsi penuh dan tidak pernah menyimpan data klien setelah diproses."
  },
  {
    q: "Bisakah integrasi dengan ERP/software existing?",
    a: "Ya. NeuralForge menyediakan API dan connector ke SAP, Odoo, Accurate, Excel, Google Sheets, dan database SQL."
  },
  {
    q: "Berapa lama implementasi?",
    a: "Rata-rata 14-21 hari untuk 1 modul, termasuk training tim. Untuk full suite 8 modul sekitar 6-8 minggu."
  },
  {
    q: "Apakah ada trial gratis?",
    a: "Ya! Kami memberikan demo gratis + POC dengan data riil Anda selama 14 hari. Tidak ada komitmen."
  }
];