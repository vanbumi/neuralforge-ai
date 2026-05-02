"use client";
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Button } from '../ui/Button';
import { FaCalendarCheck } from 'react-icons/fa';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Terima kasih! Tim NeuralForge akan menghubungi Anda dalam 1x24 jam untuk demo interaktif.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-brand-700">
      <Container>
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <Heading level={2} className="text-brand-800">🚀 Demo Gratis + POC Data Anda</Heading>
            <p className="text-neutral-600 mt-2">Isi form, kami akan hubungi dan jalankan proof-of-concept dengan data pabrik Anda</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Nama lengkap" required className="w-full p-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-800" />
            <input type="email" placeholder="Email kantor" required className="w-full p-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-800" />
            <input type="text" placeholder="Nama Perusahaan" className="w-full p-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-800" />
            <select className="w-full p-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-800">
              <option>Pilih modul yang diminati</option>
              <option>Predictive Maintenance</option>
              <option>AI Quality Control</option>
              <option>AI Safety Supervisor</option>
              <option>AI Document Processor + AP</option>
              <option>Bundle (produksi + back office)</option>
            </select>
            <textarea rows={3} placeholder="Ceritakan tantangan Anda..." className="w-full p-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 text-neutral-800"></textarea>
            <Button type="submit" variant="primary" className="w-full justify-center" icon={<FaCalendarCheck />}>
              Kirim & Jadwalkan Demo
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};