"use client";
import { useState } from 'react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  { q: "Apakah data pabrik kami aman?", a: "100% aman. Kami support on-premise deployment, data tidak keluar server Anda. Untuk cloud, kami enkripsi penuh dan tidak pernah menyimpan data klien." },
  { q: "Bisakah integrasi dengan ERP/software existing?", a: "Ya. NeuralForge menyediakan API dan connector ke SAP, Odoo, Accurate, Excel, Google Sheets, dan database SQL." },
  { q: "Berapa lama implementasi?", a: "Rata-rata 14-21 hari untuk 1 modul, termasuk training tim. Untuk full suite 8 modul sekitar 6-8 minggu." },
  { q: "Apakah ada trial gratis?", a: "Ya! Kami memberikan demo gratis + POC dengan data riil Anda selama 14 hari. Tidak ada komitmen." }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-neutral-50">
      <Container>
        <div className="text-center mb-12">
          <Heading level={2}>❓ Pertanyaan Umum</Heading>
          <Paragraph className="mt-2">Yang sering ditanyakan klien kami</Paragraph>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-shadow hover:shadow-md">
                <button
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors duration-200"
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                >
                  <span className="font-semibold text-neutral-800">{faq.q}</span>
                  {isActive ? (
                    <FaChevronUp className="text-brand-500 transition-transform duration-200" />
                  ) : (
                    <FaChevronDown className="text-neutral-500 transition-transform duration-200" />
                  )}
                </button>
                
                {/* Animasi smooth untuk jawaban */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 text-neutral-600 border-t border-neutral-100">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};