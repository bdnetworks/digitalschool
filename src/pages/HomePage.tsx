import { motion } from 'motion/react';
import { 
  Bell, 
  ArrowRight, 
  Users, 
  Monitor, 
  BookOpen, 
  GraduationCap,
  Quote
} from 'lucide-react';

import { useSchoolData } from '../lib/store';

export default function HomePage() {
  const { notices, teachers, loading } = useSchoolData();

  return (
    <div className="space-y-12">
      {/* Scroll Notice Marquee */}
      {notices.length > 0 && (
        <div className="bg-white border-y border-blue-100 py-3 overflow-hidden flex items-center relative z-20 shadow-sm mb-8">
          <div className="bg-blue-600 text-white px-6 py-1 font-black text-xs absolute left-0 z-10 shadow-lg skew-x-12 -ml-2 rounded-r-lg">নোটিশ:</div>
          <div className="whitespace-nowrap animate-marquee flex items-center space-x-24 ml-32">
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className="text-sm font-bold text-blue-900 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></span>
                {n.title} ({n.date})
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Modern Hero Section */}
      <section className="relative h-[400px] md:h-[500px] rounded-[48px] overflow-hidden group shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1523050335392-9bef86f27c51?q=80&w=2070" 
          alt="School" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent flex items-center p-8 md:p-12 lg:p-20">
          <div className="max-w-2xl text-white space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block bg-blue-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
            >
              স্বাগতম আমাদের শিক্ষা প্রতিষ্ঠানে
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter"
            >
              আগামীর স্মার্ট <br /> নাগরিক গড়তে আমরা বদ্ধপরিকর
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden md:block text-lg text-blue-100/80 leading-relaxed font-medium"
            >
              আধুনিক প্রযুক্তি ও নৈতিক শিক্ষার সমন্বয়ে আমরা ছাত্র-ছাত্রীদের উজ্জ্বল ভবিষ্যৎ নির্মাণে কাজ করে যাচ্ছি।
            </motion.p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-blue-900 px-6 py-3 md:px-8 md:py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-transform text-sm md:text-base">ভর্তি তথ্য</button>
              <button className="bg-blue-600/30 backdrop-blur-md border border-white/20 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl font-black hover:bg-blue-600 transition-all text-sm md:text-base">আমাদের সম্পর্কে</button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "অভিজ্ঞ শিক্ষক মন্ডলী", desc: "উচ্চতর ডিগ্রিধারী দক্ষ ও অভিজ্ঞ শিক্ষকদের নিবিড় তত্ত্বাবধান।", icon: Users, color: "bg-blue-50 text-blue-600" },
          { title: "আধুনিক কম্পিউটার ল্যাব", desc: "উন্নত প্রযুক্তি ও হাই-স্পিড ইন্টারনেট সমৃদ্ধ ডিজিটাল ল্যাব সুবিধা।", icon: Monitor, color: "bg-purple-50 text-purple-600" },
          { title: "বিজ্ঞানাগার ও লাইব্রেরি", desc: "আধুনিক বৈজ্ঞানিক সরঞ্জাম ও বিশাল বইয়ের সংগ্রহশালা।", icon: BookOpen, color: "bg-emerald-50 text-emerald-600" },
        ].map((feat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className={`w-14 h-14 ${feat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
              <feat.icon size={28} />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">{feat.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* Principal's Message Section */}
      <section className="bg-blue-900 rounded-[48px] p-8 md:p-12 lg:p-20 text-white overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full -mr-48 -mt-48 opacity-30 blur-3xl"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1 space-y-8">
            <Quote size={64} className="text-blue-500 opacity-50 hidden md:block" />
            <h2 className="text-3xl md:text-4xl font-black leading-tight italic">"শিক্ষা হলো এমন এক শক্তিশালী হাতিয়ার যা বিশ্ব বদলাতে ব্যবহৃত হয়।"</h2>
            <div className="space-y-4">
              <p className="text-blue-100/70 leading-relaxed md:text-lg">
                সুপ্রিয় অভিভাবক ও শিক্ষার্থীবৃন্দ, ডিজিটাল স্কুল ও কলেজের পক্ষ থেকে আপনাদের জানাই উষ্ণ অভিনন্দন। আমাদের লক্ষ্য শুধু পাঠ্যপুস্তকীয় শিক্ষা নয়, বরং শিক্ষার্থীদের নৈতিক চরিত্র ও নেতৃত্বের গুণাবলী বিকশিত করা।
              </p>
              <div className="pt-6">
                <p className="text-2xl font-black italic">মো: আব্দুল করিম</p>
                <p className="text-blue-400 font-bold uppercase tracking-widest text-xs">অধ্যক্ষ, ডিজিটাল স্কুল ও কলেজ</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[40px] bg-blue-800 absolute -rotate-6 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070" 
                alt="Principal" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[40px] relative z-10 shadow-2xl border-8 border-blue-800"
              />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 md:w-24 md:h-24 bg-white rounded-3xl flex items-center justify-center text-blue-900 shadow-xl z-20">
                <GraduationCap size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Highlights */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-blue-900 mb-2">আমাদের গর্বিত শিক্ষকবৃন্দ</h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">যাদের হাত ধরে তৈরি হচ্ছে আগামীর কারিগর</p>
          </div>
          <button className="text-blue-600 font-black text-sm flex items-center hover:underline">সকল শিক্ষক <ArrowRight size={16} className="ml-2" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachers.slice(0, 2).map((teacher) => (
            <div key={teacher.id} className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm flex items-center space-x-6 hover:shadow-xl transition-all">
              <img src={teacher.img} className="w-24 h-24 rounded-2xl object-cover shadow-inner" alt={teacher.name} />
              <div>
                <h4 className="font-black text-gray-900 text-lg leading-tight mb-1">{teacher.name}</h4>
                <p className="text-blue-600 text-xs font-bold uppercase mb-2 tracking-tighter">{teacher.designation}</p>
                <div className="flex items-center text-[10px] bg-blue-50 text-blue-700 px-3 py-1 rounded-full w-fit">
                   <Users size={12} className="mr-1" /> {teacher.subject}
                </div>
              </div>
            </div>
          ))}
          {(!teachers || teachers.length === 0) && !loading && (
             <p className="text-gray-400 italic">কোনো তথ্য পাওয়া যায়নি।</p>
          )}
        </div>
      </section>
    </div>
  );
}
