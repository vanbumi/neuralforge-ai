import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dokumentasi Teknis - NeuralForge AI',
  description: 'Dokumentasi lengkap modul AI untuk pabrik dan back office. Spesifikasi teknis, API, integrasi, dan keamanan data.',
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} min-h-screen bg-neutral-50`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}