import { officeModules } from '@/data/officeModules';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { Card } from '../ui/Card';
import { FaArrowRight } from 'react-icons/fa';

export const OfficeModules = () => (
  <section id="backoffice" className="py-20 bg-neutral-50">
    <Container>
      <div className="text-center mb-12">
        <Heading level={2}>📋 4 Modul AI untuk Back Office</Heading>
        <Paragraph className="max-w-2xl mx-auto mt-2">
          Otomasi invoice, stok, dan laporan eksekutif
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {officeModules.map((module, idx) => {
          const IconComponent = module.icon;
          return (
            <Card key={idx} className="flex flex-col">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center mb-4`}>
                <IconComponent className="text-2xl text-white" />
              </div>
              <Heading level={3} className="mb-2">{module.title}</Heading>
              <Paragraph className="mb-4 flex-1">{module.desc}</Paragraph>
              <div className="bg-neutral-100 rounded-xl p-3 text-sm font-mono text-neutral-800 mb-4">
                <span className="font-semibold">📊 Alur:</span> {module.flow}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-2xl font-bold text-brand-600">{module.price}</span>
                <a href="#contact" className="text-brand-600 font-semibold hover:text-brand-700 transition flex items-center gap-1">
                  Pilih <FaArrowRight className="text-sm" />
                </a>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  </section>
);