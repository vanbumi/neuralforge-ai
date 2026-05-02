import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';  // ← Tambahkan ini
import { Card } from '../ui/Card';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { name: "PT. Cipta Metal", role: "Plant Manager", text: "Predictive maintenance mengurangi downtime 64 jam per bulan. ROI dalam 3 bulan!" },
  { name: "FoodPack Indonesia", role: "Finance Controller", text: "Verifikasi invoice 3-way dari 2 hari jadi 15 menit. Staff finance senang." },
  { name: "Plant Cikarang", role: "Operation Director", text: "Dashboard OEE realtime membantu kami naikkan produktivitas 21%." }
];

export const Testimonials = () => (
  <section id="testimoni" className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
    <Container>
      <div className="text-center mb-12">
        <Heading level={2}>Apa Kata Klien Kami</Heading>
        <Paragraph className="mt-2">Dipercaya oleh perusahaan manufaktur terkemuka</Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testi, idx) => (
          <Card key={idx} className="flex flex-col">
            <FaQuoteLeft className="text-brand-300 text-3xl mb-4" />
            <p className="text-neutral-700 italic mb-4 flex-1">"{testi.text}"</p>
            <div>
              <h4 className="font-bold text-neutral-900">{testi.name}</h4>
              <p className="text-sm text-neutral-500">{testi.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);