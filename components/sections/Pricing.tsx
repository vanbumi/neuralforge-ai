import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Paragraph } from '../ui/Paragraph';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const pricingPlans = [
  { name: "Starter", price: "Rp4,9 jt/bln", desc: "1 modul (pilih produksi atau back office), 5 user, dashboard standar", featured: false },
  { name: "Industrial", price: "Rp11,5 jt/bln", desc: "3 modul hybrid, 15 user, API, whitelabel report", featured: true },
  { name: "Enterprise", price: "Custom", desc: "8+ modul, on-premise, dedicated AI engineer, SLA 99,9%", featured: false }
];

export const Pricing = () => (
  <section id="price" className="py-20 bg-white">
    <Container>
      <div className="text-center mb-12">
        <Heading level={2}>Pilih Paket yang Sesuai</Heading>
        <Paragraph className="mt-2">Sesuaikan dengan skala dan kebutuhan pabrik Anda</Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, idx) => (
          <Card key={idx} className={`flex flex-col text-center ${plan.featured ? 'ring-2 ring-brand-500 shadow-xl' : ''}`}>
            {plan.featured && (
              <span className="bg-brand-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block w-fit mx-auto -mt-8 mb-4">
                Paling Populer
              </span>
            )}
            <Heading level={3} className="mb-2">{plan.name}</Heading>
            <div className="text-3xl font-bold text-brand-600 my-4">{plan.price}</div>
            <Paragraph className="flex-1 mb-6">{plan.desc}</Paragraph>
            <Button href="#contact" variant={plan.featured ? 'primary' : 'outline'}>Pilih Paket</Button>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);