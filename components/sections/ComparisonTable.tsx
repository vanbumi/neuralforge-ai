export const ComparisonTable = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sebelum vs Sesudah NeuralForge</h2>
      <p className="text-slate-700 mb-8">Efisiensi yang terukur</p>
      <div className="overflow-x-auto shadow rounded-xl">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 text-left text-slate-800 font-semibold">Proses</th>
              <th className="p-4 text-left text-slate-800 font-semibold">Manual</th>
              <th className="p-4 text-left text-teal-800 font-semibold">Dengan AI</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200">
              <td className="p-4 text-slate-800">Estimasi RAB</td>
              <td className="p-4 text-slate-700">3-5 hari</td>
              <td className="p-4 text-teal-700 font-semibold">15 menit</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="p-4 text-slate-800">Verifikasi Invoice</td>
              <td className="p-4 text-slate-700">2 hari</td>
              <td className="p-4 text-teal-700 font-semibold">15 menit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);