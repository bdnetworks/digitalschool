import { Users, GraduationCap, School, BookOpen, UserPlus, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function StudentInfoPage() {
  const studentsPerClass = [
    { class: '৬ষ্ঠ', boys: 120, girls: 135, total: 255 },
    { class: '৭ম', boys: 110, girls: 125, total: 235 },
    { class: '৮ম', boys: 105, girls: 115, total: 220 },
    { class: '৯ম', boys: 95, girls: 105, total: 200 },
    { class: '১০ম', boys: 85, girls: 95, total: 180 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif italic">ছাত্র-ছাত্রীর তথ্য ও পরিসংখ্যান</h2>
        <p className="text-gray-500">আমাদের স্কুলের বর্তমান ছাত্র-ছাত্রীদের সারসংক্ষেপ ও গুরত্বপূর্ণ নীতিমালা।</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-16 translate-x-16"></div>
            <h3 className="text-xl font-bold mb-8 flex items-center text-blue-900">
              <Users size={20} className="mr-2" /> শ্রেণিভিত্তিক ছাত্র-ছাত্রীর সংখ্যা
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-50">
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">শ্রেণি</th>
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">ছাত্র</th>
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">ছাত্রী</th>
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase tracking-widest">মোট</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {studentsPerClass.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-5 font-bold text-gray-800">{item.class} শ্রেণি</td>
                      <td className="py-5 text-gray-600">{item.boys} জন</td>
                      <td className="py-5 text-gray-600">{item.girls} জন</td>
                      <td className="py-5">
                        <span className="bg-blue-50 text-blue-700 font-black px-3 py-1 rounded-lg text-sm">{item.total} জন</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <UserPlus size={20} className="mr-2" /> ভর্তি সংক্রান্ত তথ্য
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              নতুন শিক্ষাবর্ষে ভর্তির আবেদন শুরু হয়েছে। অনলাইনের মাধ্যমে বা স্কুল অফিস থেকে সরাসরি ফর্ম সংগ্রহ করা যাবে।
            </p>
            <div className="space-y-3">
              <div className="flex items-center bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span className="text-xs font-medium">আবেদনের শেষ তারিখ: ৩০ জুন ২০২৪</span>
              </div>
              <div className="flex items-center bg-white/10 p-3 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span className="text-xs font-medium">আবেদন ফি: ৩০০ টাকা</span>
              </div>
            </div>
            <button className="w-full bg-white text-blue-700 font-black py-4 mt-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              এখনই আবেদন করুন
            </button>
          </div>

          <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
              <Info size={16} className="mr-2" /> গুরুত্বপূর্ণ নির্দেশনা
            </h4>
            <ul className="text-xs text-yellow-700 space-y-2 list-disc pl-4">
              <li>স্কুলে সার্বক্ষণিক স্কুল ড্রেস ও আইডি কার্ড বাধ্যতামূলক।</li>
              <li>সকাল ১০টার মধ্যে স্কুলে উপস্থিত হতে হবে।</li>
              <li>বিনা অনুমতিতে অনুপস্থিতি কঠোরভাবে নিষিদ্ধ।</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'শিক্ষক নির্দেশিকা', icon: BookOpen, color: 'bg-orange-50 text-orange-600 border-orange-100' },
          { label: 'স্কুল ইউনিফর্ম', icon: GraduationCap, color: 'bg-green-50 text-green-600 border-green-100' },
          { label: 'হোস্টেল সুবিধা', icon: School, color: 'bg-purple-50 text-purple-600 border-purple-100' },
          { label: 'লাইব্রেরি কার্ড', icon: BookOpen, color: 'bg-pink-50 text-pink-600 border-pink-100' },
        ].map((feature, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${feature.color} flex flex-col items-center justify-center space-y-3 cursor-pointer hover:scale-105 transition-transform`}>
            <feature.icon size={32} />
            <span className="font-bold text-sm tracking-tight">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
