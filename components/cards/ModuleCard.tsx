"use client";
import { motion } from 'framer-motion';
import { Module } from '@/data/manufacturingModules';
import { FaArrowRight } from 'react-icons/fa';
import { 
  FaChartLine, FaEye, FaHardHat, FaRobot, 
  FaFileInvoice, FaMoneyBillWave, FaBoxes, FaChartPie 
} from 'react-icons/fa';

const iconMap: Record<string, React.ElementType> = {
  FaChartLine,
  FaEye,
  FaHardHat,
  FaRobot,
  FaFileInvoice,
  FaMoneyBillWave,
  FaBoxes,
  FaChartPie,
};

interface ModuleCardProps {
  module: Module;
  index: number;
}

export const ModuleCard = ({ module, index }: ModuleCardProps) => {
  const { iconName, title, desc, flow, price, color } = module;
  const IconComponent = iconMap[iconName];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-slate-200"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
        {IconComponent && <IconComponent className="text-2xl text-white" />}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-700 mb-4">{desc}</p>
      <div className="bg-slate-100 rounded-xl p-4 text-sm font-mono text-slate-800 mb-4">
        <span className="font-semibold">📊 Alur:</span> {flow}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-teal-700">{price}</span>
        <a href="#contact" className="text-teal-700 font-semibold hover:text-teal-900 transition flex items-center gap-1">
          Pilih <FaArrowRight className="text-sm" />
        </a>
      </div>
    </motion.div>
  );
};