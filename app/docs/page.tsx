import { DownloadPDFButton } from '@/components/ui/DownloadPDFButton';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div id="docs-content" className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-6 mb-8">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Dokumentasi Teknis</h1>
            <p className="text-neutral-600 mt-2">NeuralForge AI - Otomasi Cerdas untuk Industri</p>
          </div>
          <DownloadPDFButton />
        </div>
        <p className="text-sm text-neutral-500 mt-4">Versi 1.0 | Terakhir diperbarui: Mei 2025</p>
      </div>

      {/* Daftar Isi */}
      <div className="mb-8 p-4 bg-neutral-50 rounded-xl">
        <h2 className="font-semibold text-neutral-800 mb-3">📑 Daftar Isi</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <a href="#overview" className="text-brand-600 hover:underline">1. Overview</a>
          <a href="#pabrik" className="text-brand-600 hover:underline">2. Modul Pabrik</a>
          <a href="#backoffice" className="text-brand-600 hover:underline">3. Modul Back Office</a>
          <a href="#teknologi" className="text-brand-600 hover:underline">4. Teknologi</a>
          <a href="#integrasi" className="text-brand-600 hover:underline">5. Integrasi</a>
          <a href="#keamanan" className="text-brand-600 hover:underline">6. Keamanan</a>
          <a href="#implementasi" className="text-brand-600 hover:underline">7. Implementasi</a>
          <a href="#harga" className="text-brand-600 hover:underline">8. Harga</a>
          <a href="#faq" className="text-brand-600 hover:underline">9. FAQ Teknis</a>
        </div>
      </div>

      {/* Section 1: Overview */}
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Ringkasan (Overview)</h2>
        <p className="text-neutral-700 mb-4">NeuralForge AI adalah platform otomasi berbasis kecerdasan buatan yang dirancang khusus untuk industri manufaktur dan pabrik di Indonesia. Platform ini menggabungkan <strong>Computer Vision</strong>, <strong>Time-Series Forecasting</strong>, dan <strong>Large Language Model (LLM)</strong> untuk mengotomatisasi proses operasional dan administrasi.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-brand-50 p-4 rounded-xl"><strong>🎯 Target Pengguna:</strong><br/>Kontraktor skala menengah & besar, pabrik manufaktur, fasilitas produksi.</div>
          <div className="bg-brand-50 p-4 rounded-xl"><strong>🏭 Industri:</strong><br/>Manufaktur, konstruksi, logistik, F&B, otomotif, tekstil.</div>
        </div>
      </section>

      {/* Section 2: Modul Pabrik */}
      <section id="pabrik" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Modul AI untuk Lantai Pabrik</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-brand-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">2.1 Predictive Maintenance</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Mendeteksi anomali pada mesin sebelum terjadi kerusakan fatal.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> Data sensor (getaran, suhu, arus listrik) dari IoT devices.</div>
            <div className="text-sm"><strong>Proses AI:</strong> Long Short-Term Memory (LSTM) neural network for time-series anomaly detection.</div>
            <div className="text-sm"><strong>Output:</strong> Alert via WhatsApp/Email, work order otomatis, dashboard prediksi kerusakan.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: TensorFlow, Python, MQTT, Node-RED</div>
          </div>

          <div className="border-l-4 border-brand-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">2.2 AI Quality Control</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Inspeksi visual otomatis untuk mendeteksi cacat produk.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> Gambar real-time dari kamera/CCTV di jalur produksi.</div>
            <div className="text-sm"><strong>Proses AI:</strong> YOLOv8 (You Only Look Once) object detection model, trained on defect datasets.</div>
            <div className="text-sm"><strong>Output:</strong> Bounding box cacat, dashboard reject rate per shift, sorting reject/accept.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: PyTorch, OpenCV, NVIDIA CUDA, FastAPI</div>
          </div>

          <div className="border-l-4 border-brand-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">2.3 AI Safety Supervisor</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Monitoring keselamatan kerja berbasis visi komputer.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> Live feed dari CCTV existing di area pabrik.</div>
            <div className="text-sm"><strong>Proses AI:</strong> Pose estimation (MediaPipe) + object detection for PPE (helm, rompi, sepatu safety).</div>
            <div className="text-sm"><strong>Output:</strong> Real-time alert ke HSE, laporan pelanggaran mingguan, virtual fencing.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: MediaPipe, OpenCV, WebRTC, PostgreSQL</div>
          </div>

          <div className="border-l-4 border-brand-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">2.4 Operational Co-pilot</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Analisis OEE (Overall Equipment Effectiveness) dan root cause downtime.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> Data from PLC/SCADA systems (production counters, stop reasons).</div>
            <div className="text-sm"><strong>Proses AI:</strong> Time-series clustering and pattern recognition untuk identifikasi loss.</div>
            <div className="text-sm"><strong>Output:</strong> Dashboard OEE, rekomendasi prioritas maintenance, stop reason analysis.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: Apache Kafka, InfluxDB, Grafana, scikit-learn</div>
          </div>
        </div>
      </section>

      {/* Section 3: Modul Back Office */}
      <section id="backoffice" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Modul AI untuk Back Office</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">3.1 AI Document Processor (3-Way Matching)</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Otomasi verifikasi PO, Invoice, dan Packing Slip.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> PDF/scan/image dari dokumen PO, Invoice, Packing Slip.</div>
            <div className="text-sm"><strong>Proses AI:</strong> OCR (Tesseract/Google Vision) + LLM-based entity extraction + rule-based matching.</div>
            <div className="text-sm"><strong>Output:</strong> Flag mismatch, auto-posting ke ERP/Excel, status verifikasi.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: Tesseract OCR, LangChain, Pandas, OpenPyXL</div>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">3.2 AI AP Automation</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Automasi approval invoice dan deteksi duplikasi.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> Invoice via email atau upload manual.</div>
            <div className="text-sm"><strong>Proses AI:</strong> NLP classification (GL account mapping) + duplicate detection (cosine similarity).</div>
            <div className="text-sm"><strong>Output:</strong> Approval request via WhatsApp, early payment discount recommendation.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: WhatsApp Business API, Sentence-BERT, Redis</div>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">3.3 AI Inventory Assistant</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Prediksi kebutuhan stok dan auto-reorder.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> Historical consumption data, production schedule, lead time supplier.</div>
            <div className="text-sm"><strong>Proses AI:</strong> Time-series forecasting (Prophet/ARIMA) + rule-based reorder point.</div>
            <div className="text-sm"><strong>Output:</strong> Generate PO otomatis, alert stok menipis, tracking pengiriman.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: Prophet (Facebook), SQLite, APScheduler</div>
          </div>

          <div className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-xl font-semibold text-neutral-800">3.4 AI Reporting & Analytics</h3>
            <p className="text-neutral-700 mt-1"><strong>Fungsi:</strong> Natural language query untuk data bisnis.</p>
            <div className="mt-2 text-sm"><strong>Input:</strong> Database/Excel/ERP data (sales, production, finance).</div>
            <div className="text-sm"><strong>Proses AI:</strong> Text-to-SQL using LLM (GPT/LLaMA) + data visualization.</div>
            <div className="text-sm"><strong>Output:</strong> Chart, table, natural language insight, scheduled report via email.</div>
            <div className="mt-2 p-2 bg-neutral-100 rounded text-xs font-mono">Tools: LangChain, Chart.js, Nodemailer, PostgreSQL</div>
          </div>
        </div>
      </section>

      {/* Section 4: Teknologi */}
      <section id="teknologi" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Teknologi yang Digunakan</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div><strong>🤖 Computer Vision</strong><br/>YOLOv8, MediaPipe, OpenCV, PyTorch</div>
          <div><strong>📊 Time-Series</strong><br/>LSTM, Prophet, ARIMA, scikit-learn</div>
          <div><strong>🧠 Large Language Model</strong><br/>Llama 3 (on-premise), GPT (optional), LangChain</div>
          <div><strong>📄 Document Processing</strong><br/>Tesseract OCR, EasyOCR, Unstructured.io</div>
          <div><strong>🔌 Integration</strong><br/>REST API, Webhook, MQTT, OPC-UA, ODBC</div>
          <div><strong>📦 Deployment</strong><br/>Docker, Kubernetes (optional), On-premise server</div>
        </div>
      </section>

      {/* Section 5: Integrasi */}
      <section id="integrasi" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Integrasi dengan Sistem Existing</h2>
        <p className="text-neutral-700 mb-4">NeuralForge AI dapat diintegrasikan dengan:</p>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 ml-4">
          <li><strong>ERP:</strong> SAP, Odoo, Accurate, Oracle NetSuite</li>
          <li><strong>Database:</strong> PostgreSQL, MySQL, SQL Server, MongoDB</li>
          <li><strong>File:</strong> Excel (.xlsx), CSV, PDF, gambar (JPG/PNG)</li>
          <li><strong>IoT/SCADA:</strong> MQTT broker, OPC-UA server, Modbus TCP</li>
          <li><strong>Communication:</strong> WhatsApp Business API, Email (SMTP), Slack, Telegram</li>
        </ul>
        <div className="mt-4 p-3 bg-neutral-100 rounded-lg">
          <p className="text-sm font-mono text-neutral-800">API Endpoint: <code className="bg-neutral-200 px-2 py-1 rounded">https://api.neuralforge.ai/v1</code></p>
          <p className="text-sm font-mono text-neutral-800 mt-1">Authentication: Bearer token / API key</p>
        </div>
      </section>

      {/* Section 6: Keamanan */}
      <section id="keamanan" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Keamanan Data</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl"><strong>🔒 On-Premise Deployment</strong><br/>Data tetap berada di server klien. Tidak ada data yang keluar.</div>
          <div className="bg-green-50 p-4 rounded-xl"><strong>🔐 Enkripsi</strong><br/>AES-256 untuk data at-rest, TLS 1.3 untuk data in-transit.</div>
          <div className="bg-green-50 p-4 rounded-xl"><strong>👥 Access Control</strong><br/>Role-based access control (RBAC) per pengguna dan modul.</div>
          <div className="bg-green-50 p-4 rounded-xl"><strong>📋 Audit Log</strong><br/>Semua aksi terekam untuk keperluan audit dan compliance.</div>
        </div>
        <p className="text-neutral-700 mt-4">Sertifikasi: ISO 27001 (in progress), sesuai dengan UU PDP Indonesia.</p>
      </section>

      {/* Section 7: Implementasi */}
      <section id="implementasi" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Timeline Implementasi</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3"><div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">1</div><div><strong>Minggu 1:</strong> Assessment infrastruktur & instalasi server on-premise</div></div>
          <div className="flex items-start gap-3"><div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">2</div><div><strong>Minggu 2:</strong> Integrasi data source (sensor, CCTV, ERP) & training model awal</div></div>
          <div className="flex items-start gap-3"><div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">3</div><div><strong>Minggu 3:</strong> UAT (User Acceptance Testing) dengan data riil & fine-tuning</div></div>
          <div className="flex items-start gap-3"><div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm">4</div><div><strong>Minggu 4:</strong> Go-live & training tim (2 hari)</div></div>
        </div>
        <p className="text-neutral-700 mt-4"><strong>Support setelah implementasi:</strong> 24/7 technical support via WhatsApp & email, update model setiap bulan.</p>
      </section>

      {/* Section 8: Harga */}
      <section id="harga" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Detail Harga</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead><tr className="bg-neutral-100"><th className="p-3 text-left">Modul</th><th className="p-3 text-left">Harga (per bulan)</th><th className="p-3 text-left">Catatan</th></tr></thead>
            <tbody>
              <tr className="border-b"><td className="p-3">Predictive Maintenance</td><td className="p-3">Rp3.200.000</td><td className="p-3">termasuk 50 sensor points</td></tr>
              <tr className="border-b"><td className="p-3">AI Quality Control</td><td className="p-3">Rp3.500.000</td><td className="p-3">termasuk 4 kamera</td></tr>
              <tr className="border-b"><td className="p-3">AI Safety Supervisor</td><td className="p-3">Rp2.800.000</td><td className="p-3">integrasi sampai 16 CCTV</td></tr>
              <tr className="border-b"><td className="p-3">Operational Co-pilot</td><td className="p-3">Rp2.500.000</td><td className="p-3">integrasi PLC/SCADA</td></tr>
              <tr className="border-b"><td className="p-3">AI Document Processor</td><td className="p-3">Rp1.900.000</td><td className="p-3">up to 500 dokumen/bulan</td></tr>
              <tr className="border-b"><td className="p-3">AI AP Automation</td><td className="p-3">Rp2.200.000</td><td className="p-3">up to 200 invoice/bulan</td></tr>
              <tr className="border-b"><td className="p-3">AI Inventory Assistant</td><td className="p-3">Rp2.700.000</td><td className="p-3">untuk 5000 SKU</td></tr>
              <tr className="border-b"><td className="p-3">AI Reporting & Analytics</td><td className="p-3">Rp2.300.000</td><td className="p-3">unlimited query</td></tr>
              <tr className="bg-brand-50"><td className="p-3 font-bold">Bundle 8 Modul</td><td className="p-3 font-bold text-brand-700">Rp18.500.000</td><td className="p-3 font-bold">hemat 25%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-600 text-sm mt-4">*Harga belum termasuk PPN. Minimum kontrak 6 bulan untuk modul pabrik, 3 bulan untuk modul back office.</p>
      </section>

      {/* Section 9: FAQ Teknis */}
      <section id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <div><strong>Q: Apakah perlu mengganti hardware existing?</strong><br/>A: Tidak. NeuralForge AI dirancang untuk bekerja dengan infrastruktur existing (CCTV, sensor, server).</div>
          <div><strong>Q: Berapa akurasi model AI?</strong><br/>A: Untuk Computer Vision (QC, Safety) akurasi 95-99%. Untuk Predictive Maintenance, akurasi prediksi 85-90% dengan data training yang cukup.</div>
          <div><strong>Q: Bahasa apa yang didukung?</strong><br/>A: Indonesia (untuk dashboard dan report), Inggris (untuk API dan dokumentasi teknis).</div>
          <div><strong>Q: Data training berasal dari mana?</strong><br/>A: Model dasar dari dataset publik, kemudian fine-tuning dengan data anonim dari client (dengan izin).</div>
          <div><strong>Q: Apakah bisa custom model untuk kebutuhan spesifik?</strong><br/>A: Ya. NeuralForge menyediakan layanan model custom dengan biaya pengembangan terpisah.</div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-neutral-200 pt-6 text-center text-neutral-500 text-sm">
        <p>© 2025 NeuralForge AI. All rights reserved.</p>
        <p>Dokumentasi ini bersifat rahasia dan hanya untuk keperluan evaluasi klien.</p>
      </div>
    </div>
  );
}