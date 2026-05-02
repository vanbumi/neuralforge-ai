"use client";
import { FaCalendarCheck, FaArrowRight, FaRobot, FaIndustry } from 'react-icons/fa';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { Button } from '../ui/Button';
import Image from 'next/image';

export const Hero = () => (
  <section className="pt-20 pb-16 bg-gradient-to-br from-neutral-50 to-white">
    <Container>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Kolom Kiri - Teks (TIDAK DIUBAH) */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FaIndustry /> AI untuk Pabrik & Manufaktur
          </div>
          <Heading level={1}>
            <span className="text-brand-600">Otomasi Cerdas</span>
            <br />
            Lantai Produksi + Back Office
          </Heading>
          <Paragraph size="lg" className="mt-6 max-w-2xl mx-auto lg:mx-0">
            Prediksi kerusakan mesin, inspeksi kualitas AI, hingga otomasi invoice & laporan. 
            Hemat 70% waktu operasional.
          </Paragraph>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
            <Button href="#contact" icon={<FaCalendarCheck />}>Demo Gratis</Button>
            <Button href="#manufaktur" variant="outline" icon={<FaArrowRight />}>Lihat Modul</Button>
          </div>
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12">
            <div><span className="text-3xl font-bold text-brand-600">300+</span><br /><span className="text-neutral-600">Mesin terhubung</span></div>
            <div><span className="text-3xl font-bold text-brand-600">85%</span><br /><span className="text-neutral-600">Efisiensi admin</span></div>
            <div><span className="text-3xl font-bold text-brand-600">2.3M</span><br /><span className="text-neutral-600">Dokumen diproses</span></div>
          </div>
        </div>

        {/* Kolom Kanan - Gambar (BARU) */}
        <div className="flex-1">
          <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
            {/* Placeholder gambar - nanti ganti dengan gambar asli */}
            {/* <div className="w-full h-full bg-gradient-to-br from-brand-100 to-cyan-100 rounded-3xl flex items-center justify-center p-8">
              <div className="text-center">
                <FaRobot className="text-6xl text-brand-500 mx-auto mb-4" />
                <p className="text-brand-700 font-medium">Ilustrasi NeuralForge AI</p>
                <p className="text-sm text-brand-600 mt-2">Ganti dengan gambar asli di:<br/><code className="text-xs">/public/images/hero-illustration.png</code></p>
              </div>
            </div> */}
            
            <Image 
              src="/images/hero-illustration.png" 
              alt="NeuralForge AI Illustration" 
              fill
              className="object-contain"
              priority
            />
           
          </div>
        </div>
      </div>
    </Container>
  </section>
);