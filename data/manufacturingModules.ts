export interface Module {
  iconName: string;
  title: string;
  desc: string;
  flow: string;
  price: string;
  color: string;
}

export const manufacturingModules: Module[] = [
  {
    iconName: "FaChartLine",
    title: "Predictive Maintenance",
    desc: "Deteksi anomali getaran & suhu, prediksi kerusakan 48 jam sebelum downtime.",
    flow: "Sensor IoT → Anomali ML → Alert WA/Email → Work order otomatis",
    price: "Rp3,2 jt/bln",
    color: "from-cyan-600 to-teal-600"
  },
  {
    iconName: "FaEye",
    title: "AI Quality Control",
    desc: "Computer vision deteksi micro-cacat produk, sortir real-time.",
    flow: "Kamera conveyor → YOLOv8 → Deteksi cacat → Dashboard reject rate",
    price: "Rp3,5 jt/bln",
    color: "from-blue-600 to-indigo-600"
  },
  {
    iconName: "FaHardHat",
    title: "AI Safety Supervisor",
    desc: "Deteksi APD & pelanggaran area berbahaya via CCTV eksisting.",
    flow: "CCTV → Pose estimation → Alert realtime ke HSE",
    price: "Rp2,8 jt/bln",
    color: "from-emerald-600 to-green-600"
  },
  {
    iconName: "FaRobot",
    title: "Operational Co-pilot",
    desc: "Analisa OEE, stop reason, rekomendasi prioritas maintenance.",
    flow: "Integrasi PLC/SCADA → Analisa downtime → Dashboard realtime",
    price: "Rp2,5 jt/bln",
    color: "from-purple-600 to-pink-600"
  }
];