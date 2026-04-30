import { useState } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, Maximize2, X } from 'lucide-react';
import Modal from '../components/Modal';

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState<{url: string, title: string} | null>(null);
  const images = [
    { url: "https://images.unsplash.com/photo-1523050335392-9bef86f27c51?q=80&w=2070", title: "স্কুল ক্যাম্পাস" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104", title: "ক্লাসরুম অ্যাক্টিভিটি" },
    { url: "https://images.unsplash.com/photo-1516534775068-ba3e84529519?q=80&w=2070", title: "লাইব্রেরি" },
    { url: "https://images.unsplash.com/photo-1544717305-27a734ef1974?q=80&w=2070", title: "কম্পিউটার ল্যাব" },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022", title: "খেলাধুলা" },
    { url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070", title: "পুরস্কার বিতরণী" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* List Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">ফটো গ্যালারি</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">আমাদের প্রতিষ্ঠানের বিভিন্ন মুহূর্ত ও ইভেন্টের স্থিরচিত্র নিচে দেওয়া হলো। বিস্তারিত দেখতে ছবিতে ক্লিক করুন।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedImg(img)}
            className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg border-4 border-white"
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
              <h4 className="text-xl font-bold mb-1">{img.title}</h4>
              <p className="text-xs text-blue-200">বিস্তারিত দেখুন <Maximize2 size={12} className="inline ml-1" /></p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery Lightbox Modal */}
      <Modal 
        isOpen={!!selectedImg} 
        onClose={() => setSelectedImg(null)}
        title={selectedImg?.title || "গ্যালারি"}
      >
        {selectedImg && (
          <div className="space-y-4">
            <img 
              src={selectedImg.url} 
              className="w-full h-auto rounded-2xl shadow-2xl" 
              alt={selectedImg.title} 
            />
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 italic text-gray-500 text-sm">
              ইভেন্টের বর্ণনা: আমাদের প্রতিষ্ঠানে আয়োজিত একটি আনন্দঘন মুহূর্তের চিত্র।
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
