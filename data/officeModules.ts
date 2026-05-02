import { FaFileInvoice, FaMoneyBillWave, FaBoxes, FaChartPie } from 'react-icons/fa';
import { Module } from './manufacturingModules';

export const officeModules: Module[] = [
  {
    iconName: "FaFileInvoice",
    title: "AI Document Processor",
    desc: "OCR + 3-way matching PO, Invoice, Packing Slip.",
    flow: "Upload PDF → Ekstraksi data → Match → Auto-posting ERP",
    price: "Rp1,9 jt/bln",
    color: "from-orange-600 to-red-600"
  },
  {
    iconName: "FaMoneyBillWave",
    title: "AI AP Automation",
    desc: "Approval invoice via WhatsApp, deteksi duplikasi.",
    flow: "Email invoice → Klasifikasi GL → Approval via WA",
    price: "Rp2,2 jt/bln",
    color: "from-green-600 to-emerald-600"
  },
  {
    iconName: "FaBoxes",
    title: "AI Inventory Assistant",
    desc: "Prediksi stok & auto-reorder PO.",
    flow: "Historis konsumsi → Prediksi kebutuhan → Generate PO otomatis",
    price: "Rp2,7 jt/bln",
    color: "from-yellow-600 to-amber-600"
  },
  {
    iconName: "FaChartPie",
    title: "AI Reporting & Analytics",
    desc: "Query bahasa Indonesia: 'tampilkan OEE per shift'",
    flow: "Chat BI → Generate insight → Kirim ke email",
    price: "Rp2,3 jt/bln",
    color: "from-indigo-600 to-purple-600"
  }
];