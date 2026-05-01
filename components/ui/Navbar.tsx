"use client";
import { useState } from 'react';
import { FaMicrochip, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: "Manufaktur", href: "#manufaktur" },
  { name: "Back Office", href: "#backoffice" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Harga", href: "#price" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <FaMicrochip className="text-3xl text-teal-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">
              NeuralForge AI
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-slate-700 hover:text-teal-600 transition">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition shadow-md">
              Demo Gratis
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-slate-700 hover:text-teal-600 transition" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-teal-600 text-white px-5 py-2 rounded-full text-center" onClick={() => setIsOpen(false)}>
              Demo Gratis
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};