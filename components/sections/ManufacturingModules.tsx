import { manufacturingModules } from '@/data/manufacturingModules';
import { ModuleCard } from '../cards/ModuleCard';

export const ManufacturingModules = () => (
  <section id="manufaktur" className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">🏭 4 Modul AI untuk Pabrik</h2>
        <p className="text-slate-800 max-w-2xl mx-auto">Tingkatkan OEE, kurangi defect, patroli safety otomatis</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {manufacturingModules.map((module, idx) => (
          <ModuleCard key={idx} module={module} index={idx} />
        ))}
      </div>
    </div>
  </section>
);