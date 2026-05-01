export const Testimonials = () => (
  <section id="testimoni" className="py-20 px-4 bg-amber-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Apa Kata Klien</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-slate-800">&quot;Predictive maintenance mengurangi downtime 64 jam per bulan. ROI dalam 3 bulan!"</p>
          <h4 className="font-bold text-slate-900 mt-4">— PT. Cipta Metal</h4>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-slate-800">&quot;Verifikasi invoice 3-way dari 2 hari jadi 15 menit. Staff finance senang."</p>
          <h4 className="font-bold text-slate-900 mt-4">— FoodPack Indonesia</h4>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-slate-800">&quot;Dashboard OEE realtime membantu kami naikkan produktivitas 21%."</p>
          <h4 className="font-bold text-slate-900 mt-4">— Plant Cikarang</h4>
        </div>
      </div>
    </div>
  </section>
);