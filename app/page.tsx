import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { Hero } from '@/components/sections/Hero';
import { ManufacturingModules } from '@/components/sections/ManufacturingModules';
import { OfficeModules } from '@/components/sections/OfficeModules';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { FAQ } from '@/components/sections/FAQ';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { ContactForm } from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ManufacturingModules />
      <OfficeModules />
      <ComparisonTable />
      <FAQ />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}