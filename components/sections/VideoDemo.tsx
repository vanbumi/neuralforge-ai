import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { FaPlayCircle } from 'react-icons/fa';

export const VideoDemo = () => (
  <section className="py-24 bg-white">
    <Container>
      <div className="text-center mb-12">
        <Heading level={2}>Lihat NeuralForge dalam Aksi</Heading>
        <Paragraph className="mt-2 max-w-2xl mx-auto">
          Demo singkat: dari upload gambar teknis hingga laporan otomatis
        </Paragraph>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden shadow-xl aspect-video flex items-center justify-center cursor-pointer hover:shadow-2xl transition group">
          {/* Placeholder video - nanti ganti dengan embed YouTube atau video player */}
          <div className="text-center p-8">
            <FaPlayCircle className="text-6xl text-brand-500 mx-auto mb-4 group-hover:scale-110 transition" />
            <p className="text-neutral-600 font-medium">Preview Video Demo</p>
            <p className="text-sm text-neutral-500 mt-2">Video akan segera hadir</p>
          </div>
        </div>
        <p className="text-center text-sm text-neutral-500 mt-4">
          *Demo lengkap tersedia saat jadwal konsultasi
        </p>
      </div>
    </Container>
  </section>
);