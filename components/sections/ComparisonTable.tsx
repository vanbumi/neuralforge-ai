import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';

const comparisonData = [
  { proses: "Estimasi RAB / BoQ", manual: "3-5 hari", ai: "15 menit" },
  { proses: "Verifikasi Invoice (3-way)", manual: "2 hari", ai: "15 menit" },
  { proses: "Inspeksi kualitas produk", manual: "Akurasi ~75%", ai: "Akurasi 95%+" },
  { proses: "Laporan harian produksi", manual: "1-2 jam", ai: "Otomatis 5 menit" }
];

export const ComparisonTable = () => (
  <section className="py-20 bg-white">
    <Container>
      <div className="text-center mb-12">
        <Heading level={2}>Sebelum vs Sesudah NeuralForge</Heading>
        <Paragraph className="mt-2">Efisiensi yang terukur</Paragraph>
      </div>
      <div className="overflow-x-auto rounded-xl border border-neutral-200">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-neutral-100">
              <th className="p-4 text-left text-neutral-800 font-semibold">Proses</th>
              <th className="p-4 text-left text-neutral-800 font-semibold">Manual</th>
              <th className="p-4 text-left text-brand-600 font-semibold">Dengan AI</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="border-t border-neutral-200">
                <td className="p-4 text-neutral-800">{row.proses}</td>
                <td className="p-4 text-neutral-600">{row.manual}</td>
                <td className="p-4 text-brand-600 font-semibold">{row.ai}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  </section>
);