"use client";
import { FaCalendarCheck, FaArrowRight, FaRobot, FaIndustry } from 'react-icons/fa';

export const Hero = () => (
  <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-slate-50 to-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaIndustry /> AI untuk Pabrik & Manufaktur
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            <span className="bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
              Otomasi Cerdas
            </span>
            <br />
            Lantai Produksi + Back Office
          </h1>
          <p className="text-lg text-slate-700 mt-6 max-w-2xl mx-auto lg:mx-0">
            Prediksi kerusakan mesin, inspeksi kualitas AI, hingga otomasi invoice & laporan. Hemat 70% waktu operasional.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
            <a href="#contact" className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition flex items-center gap-2 shadow-lg">
              <FaCalendarCheck /> Demo Gratis
            </a>
            <a href="#manufaktur" className="border-2 border-slate-400 text-slate-800 px-8 py-3 rounded-full font-semibold hover:border-teal-600 hover:text-teal-700 transition flex items-center gap-2">
              Lihat Modul <FaArrowRight />
            </a>
          </div>
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12">
            <div><span className="text-3xl font-bold text-teal-700">300+</span><br /><span className="text-slate-700">Mesin terhubung</span></div>
            <div><span className="text-3xl font-bold text-teal-700">85%</span><br /><span className="text-slate-700">Efisiensi admin</span></div>
            <div><span className="text-3xl font-bold text-teal-700">2.3M</span><br /><span className="text-slate-700">Dokumen diproses</span></div>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 text-center">
          <FaRobot className="text-7xl text-teal-600 mx-auto mb-4" />
          <p className="text-xl font-semibold text-teal-800">AI Vision · Predictive · LLM Agent</p>
          <p className="text-slate-700 mt-2">Terintegrasi dengan ERP, CCTV, IoT</p>
        </div>
      </div>
    </div>
  </section>
);