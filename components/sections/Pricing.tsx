export const Pricing = () => (
  <section id="price" className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Pilih Paket</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Starter</h3>
          <div className="text-2xl font-bold text-teal-700 my-4">Rp4,9 jt/bln</div>
          <p className="text-slate-700">1 modul, 5 user, dashboard standar</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Industrial</h3>
          <div className="text-2xl font-bold text-teal-700 my-4">Rp11,5 jt/bln</div>
          <p className="text-slate-700">3 modul, 15 user, API, whitelabel</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl shadow-md border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
          <div className="text-2xl font-bold text-teal-700 my-4">Custom</div>
          <p className="text-slate-700">Full suite, on-premise, dedicated engineer</p>
        </div>
      </div>
    </div>
  </section>
);