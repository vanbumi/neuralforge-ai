"use client";
import { useState } from 'react';
import { FaMicrochip, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { Container } from './Container';

const navLinks = [
  { name: "Manufaktur", href: "#manufaktur" },
  { name: "Back Office", href: "#backoffice" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Harga", href: "#price" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <FaMicrochip className="text-3xl text-brand-500" />
            <span className="text-2xl font-bold text-brand-700">
              NeuralForge AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-neutral-700 hover:text-brand-600 transition">
                {link.name}
              </a>
            ))}
            <Button href="#contact" variant="primary">Demo Gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl text-neutral-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-neutral-700 hover:text-brand-600 transition" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="justify-center">Demo Gratis</Button>
          </div>
        )}
      </Container>
    </nav>
  );
};