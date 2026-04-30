import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, History } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero Header */}
      <section className="bg-blue-900 h-64 md:h-80 rounded-[48px] flex flex-col items-center justify-center text-white text-center px-4 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070')] opacity-20 bg-cover bg-center"></div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4 relative z-10"
        >
          আমাদের সম্পর্কে
        </motion.h2>
        <p className="text-blue-200 max-w-2xl mx-auto text-sm md:text-lg font-medium relative z-10 italic">
          ডিজিটাল শিক্ষায় আগামীর সম্ভাবনা - আমাদের যাত্রা ও লক্ষ্য।
        </p>
      </section>

      {/* Intro Section */}
      <section className="space-y-6">
        <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-2xl">
          <History size={24} />
        </div>
        <h3 className="text-3xl font-black text-blue-900 border-l-8 border-blue-600 pl-6">প্রতিষ্ঠার গৌরবময় ইতিহাস</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          ১৯৯৫ সালে এলাকার প্রথিতযশা শিক্ষাবিদ ও সমাজসেবকদের হাত ধরে এই প্রতিষ্ঠানের সূচনা হয়। বরিশাল সদরের এক মনোরম পরিবেশে ছোট এক চালা ঘরে যে যাত্রার শুরু হয়েছিল, আজ তা এক সুবিশাল আধুনিক ক্যাম্পাসে রূপ নিয়েছে। 
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 italic text-gray-500 relative">
            <span className="text-6xl absolute -top-4 -left-2 opacity-10">"</span>
            বিগত তিন দশকে আমরা কেবল শিক্ষার্থী গড়িনি, গড়েছি আধুনিক বিশ্বের জন্য যোগ্য নাগরিক। আমাদের লক্ষ্য সর্বদাই ছিল গুণগত শিক্ষা।
          </div>
          <div className="bg-blue-50 p-8 rounded-[32px] border border-blue-100 italic text-blue-600 relative">
            <span className="text-6xl absolute -top-4 -left-2 opacity-10">"</span>
            প্রতিটি শিশুর মাঝে এক অনন্য সম্ভাবনা লুকিয়ে থাকে। সেই সম্ভাবনাকে বিকশিত করাই আমাদের প্রধান ব্রত।
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 group transition-all hover:bg-blue-600 hover:text-white">
          <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white">
            <Target size={28} />
          </div>
          <h4 className="text-xl font-black mb-4">আমাদের লক্ষ্য</h4>
          <p className="text-sm opacity-70 group-hover:opacity-90 leading-relaxed">জ্ঞানভিত্তিক সমাজ নির্মাণে আধুনিক ও নৈতিক শিক্ষা প্রদানের মাধ্যমে আদর্শ সুনাগরিক গড়ে তোলা।</p>
        </div>
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 group transition-all hover:bg-emerald-600 hover:text-white">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white">
            <ShieldCheck size={28} />
          </div>
          <h4 className="text-xl font-black mb-4">আমাদের আদর্শ</h4>
          <p className="text-sm opacity-70 group-hover:opacity-90 leading-relaxed">সততা, শৃঙ্খলা ও দেশপ্রেমের আলোকে শিক্ষার্থীদের মানসগঠন করাই আমাদের প্রতিষ্ঠানের মূল স্তম্ভ।</p>
        </div>
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 group transition-all hover:bg-pink-600 hover:text-white">
          <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white">
            <Heart size={28} />
          </div>
          <h4 className="text-xl font-black mb-4">স্বকীয়তা</h4>
          <p className="text-sm opacity-70 group-hover:opacity-90 leading-relaxed">প্রতিটি শিক্ষার্থীর প্রতি ব্যক্তিগত যত্ন, সহমর্মিতা ও সৃজনশীলতা বজায় রাখা আমাদের প্রধান বৈশিষ্ট্য।</p>
        </div>
      </section>

      {/* Campus Highlight */}
      <section className="relative rounded-[48px] overflow-hidden group h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070" 
          alt="Campus" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center p-12 text-center text-white">
           <div className="max-w-xl">
             <h4 className="text-3xl font-black mb-4">আধুনিক ক্যাম্পাস সুবিধা</h4>
             <p className="text-blue-100">বিশাল খেলার মাঠ, হাই-টেক কম্পিউটার ল্যাব, এবং ৫০০০+ বই সমৃদ্ধ লাইব্রেরি নিয়ে আমাদের ক্যাম্পাস শিক্ষার্থীদের জন্য এক স্বর্গভূমিও।</p>
           </div>
        </div>
      </section>
    </div>
  );
}
