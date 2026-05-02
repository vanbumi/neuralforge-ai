import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { FaUpload, FaBrain, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    number: "01",
    icon: FaUpload,
    title: "Upload Data Anda",
    desc: "Gambar teknis, kontrak PDF, invoice, atau CCTV. Semua bisa diproses.",
    details: "Support format: PDF, CAD, JPG, MP4, Excel"
  },
  {
    number: "02",
    icon: FaBrain,
    title: "AI Memproses",
    desc: "Computer vision & LLM Agent bekerja: ekstrak volume material, deteksi cacat, analisa kontrak.",
    details: "Kecepatan: 15 menit vs 3 hari manual"
  },
  {
    number: "03",
    icon: FaChartLine,
    title: "Dapatkan Insights & Aksi",
    desc: "Laporan otomatis, alert real-time ke WhatsApp, dan rekomendasi tindakan.",
    details: "Integrasi langsung ke ERP/Excel Anda"
  }
];

export const HowItWorks = () => (
  <section className="py-24 bg-neutral-50">
    <Container>
      <div className="text-center mb-16">
        <Heading level={2}>Bagaimana Cara Kerjanya?</Heading>
        <Paragraph className="mt-2 max-w-2xl mx-auto">
          3 langkah mudah, dari data mentah hingga keputusan bisnis
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Garis penghubung antar step (desktop only) */}
        <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-brand-200 -z-10" />
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 bg-white rounded-2xl p-8 shadow-md border border-neutral-200 hover:shadow-lg transition">
            <div className="text-5xl font-bold text-brand-200 mb-4">{step.number}</div>
            <step.icon className="text-3xl text-brand-500 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
            <p className="text-neutral-600 mb-3">{step.desc}</p>
            <p className="text-sm text-brand-600 font-medium">{step.details}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);