"use client";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaDownload } from 'react-icons/fa';

export const DownloadPDFButton = () => {
  const handleDownload = async () => {
    const element = document.getElementById('docs-content');
    if (!element) return;

    // Show loading indicator
    const btn = document.querySelector('#download-btn');
    if (btn) btn.innerHTML = 'Memproses...';

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('neuralforge-ai-documentation.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Gagal generate PDF. Silakan coba lagi.');
    }
    
    if (btn) btn.innerHTML = 'Download PDF';
  };

  return (
    <button
      id="download-btn"
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-2 rounded-full hover:bg-brand-700 transition shadow-md"
    >
      <FaDownload /> Download PDF
    </button>
  );
};