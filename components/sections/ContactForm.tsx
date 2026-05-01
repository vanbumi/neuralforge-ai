"use client";
import { FaCalendarCheck } from 'react-icons/fa';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Terima kasih! Tim NeuralForge akan menghubungi Anda dalam 1x24 jam untuk demo interaktif.");
  };
  return (
    <section id="contact" className="py-20 px-4 bg-teal-700">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-2">🚀 Demo Gratis + POC Data Anda</h2>
        <p className="text-center text-slate-700 mb-8">
          Isi form, kami akan hubungi dan jalankan proof-of-concept dengan data pabrik Anda
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Nama lengkap" className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900" required />
          <input type="email" placeholder="Email kantor" className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900" required />
          <input type="text" placeholder="Nama Perusahaan" className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900" />
          <select className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900">
            <option>Pilih modul yang diminati</option>
            <option>Predictive Maintenance</option>
            <option>AI Quality Control</option>
            <option>AI Document Processor + AP</option>
            <option>Bundle (produksi + back office)</option>
          </select>
          <textarea rows={3} placeholder="Ceritakan tantangan Anda..." className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900"></textarea>
          <button type="submit" className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
            <FaCalendarCheck /> Kirim & Jadwalkan Demo
          </button>
        </form>
      </div>
    </section>
  );
};