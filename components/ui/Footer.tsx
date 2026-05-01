import { FaMicrochip } from 'react-icons/fa';

export const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <FaMicrochip className="text-teal-500 text-2xl" />
        <span className="text-xl font-bold text-white">NeuralForge AI</span>
      </div>
      <p>Otomasi Cerdas untuk Pabrik Indonesia</p>
      <p className="mt-4">📍 Jakarta | Surabaya | Bandung</p>
      <p className="mt-4">© 2025 NeuralForge. All rights reserved.</p>
    </div>
  </footer>
);