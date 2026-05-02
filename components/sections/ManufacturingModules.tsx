import { manufacturingModules } from '@/data/manufacturingModules';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { ModuleCard } from '../cards/ModuleCard';

export const ManufacturingModules = () => (
  <section id="manufaktur" className="py-20 bg-white">
    <Container>
      <div className="text-center mb-12">
        <Heading level={2}>🏭 4 Modul AI untuk Pabrik</Heading>
        <Paragraph className="max-w-2xl mx-auto mt-2">
          Tingkatkan OEE, kurangi defect, patroli safety otomatis
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {manufacturingModules.map((module, idx) => (
          <ModuleCard key={idx} module={module} index={idx} />
        ))}
      </div>
    </Container>
  </section>
);