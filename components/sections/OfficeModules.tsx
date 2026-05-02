import { officeModules } from '@/data/officeModules';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { ModuleCard } from '../cards/ModuleCard';

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
        {officeModules.map((module, idx) => (
          <ModuleCard key={idx} module={module} index={idx} />
        ))}
      </div>
    </Container>
  </section>
);