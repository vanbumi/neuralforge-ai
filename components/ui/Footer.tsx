import { FaMicrochip } from 'react-icons/fa';
import { Container } from './Container';

export const Footer = () => (
  <footer className="bg-neutral-900 text-neutral-400 py-12">
    <Container>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaMicrochip className="text-brand-400 text-2xl" />
          <span className="text-xl font-bold text-white">NeuralForge AI</span>
        </div>
        <p>Otomasi Cerdas untuk Pabrik Indonesia</p>
        <p className="mt-4">📍 Jakarta | Surabaya | Bandung</p>
        <div className="mt-6 pt-6 border-t border-neutral-800">
          <p>© 2025 NeuralForge AI. All rights reserved.</p>
        </div>
      </div>
    </Container>
  </footer>
);