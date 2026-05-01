import { officeModules } from '@/data/officeModules';
import { ModuleCard } from '../cards/ModuleCard';

export const OfficeModules = () => (
  <section id="backoffice" className="py-20 px-4 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">📋 4 Modul AI untuk Back Office</h2>
        <p className="text-slate-800 max-w-2xl mx-auto">Otomasi invoice, stok, dan laporan eksekutif</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {officeModules.map((module, idx) => (
          <ModuleCard key={idx} module={module} index={idx} />
        ))}
      </div>
    </div>
  </section>
);