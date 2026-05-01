export const FAQ = () => (
  <section className="py-20 px-4 bg-slate-50">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">❓ Pertanyaan Umum</h2>
      <div className="space-y-4 text-left">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <strong className="text-slate-900">Apakah data pabrik kami aman?</strong>
          <p className="mt-2 text-slate-700">100% aman. Kami support on-premise deployment, data tidak keluar server Anda.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <strong className="text-slate-900">Bisakah integrasi dengan ERP/software existing?</strong>
          <p className="mt-2 text-slate-700">Ya. NeuralForge menyediakan API dan connector ke SAP, Odoo, Accurate, Excel, Google Sheets, dan database SQL.</p>
        </div>
      </div>
    </div>
  </section>
);