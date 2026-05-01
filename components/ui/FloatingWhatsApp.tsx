"use client";
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp = () => {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor Anda
  const message = "Halo NeuralForge, saya tertarik demo AI pabrik";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};