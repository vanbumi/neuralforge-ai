import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { Card } from '../ui/Card';
import { FaRocket, FaShieldAlt, FaChartLine, FaPlug } from 'react-icons/fa';

const reasons = [
  {
    icon: FaRocket,
    title: "Insights in Minutes",
    desc: "Dari data mentah ke keputusan bisnis dalam hitungan menit, bukan minggu. Tanpa ribuan baris Excel.",
    color: "text-brand-500"
  },
  {
    icon: FaShieldAlt,
    title: "Data Tetap Aman",
    desc: "100% on-premise atau hybrid cloud. Data pabrik Anda tidak pernah keluar dari infrastruktur Anda.",
    color: "text-brand-500"
  },
  {
    icon: FaChartLine,
    title: "Zero Training Required",
    desc: "Dashboard intuitif, cukup upload file atau tanya bahasa Indonesia. Tim Anda langsung produktif.",
    color: "text-brand-500"
  },
  {
    icon: FaPlug,
    title: "Integrasi Mudah",
    desc: "API dan connector ke SAP, Odoo, Excel, dan sistem existing. Tidak perlu ganti software.",
    color: "text-brand-500"
  }
];

export const WhyNeuralForge = () => (
  <section className="py-24 bg-white">
    <Container>
      <div className="text-center mb-12">
        <Heading level={2}>Mengapa NeuralForge?</Heading>
        <Paragraph className="mt-2 max-w-2xl mx-auto">
          Dirancang khusus untuk ekosistem industri Indonesia
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((reason, idx) => (
          <Card key={idx} className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <reason.icon className={`text-3xl ${reason.color}`} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{reason.title}</h3>
              <p className="text-neutral-600">{reason.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);