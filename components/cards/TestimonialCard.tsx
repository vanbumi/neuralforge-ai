import { FaQuoteLeft } from 'react-icons/fa';
import { Testimonial } from '@/data/testimonials';

export const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <FaQuoteLeft className="text-teal-400 text-2xl mb-3" />
    <p className="text-slate-600 mb-4">&quot;{testimonial.text}&quot;</p>
    <h4 className="font-bold">— {testimonial.name}</h4>
  </div>
);