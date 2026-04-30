import { motion } from 'motion/react';
import { Calendar, Download, Clock, MapPin } from 'lucide-react';

import { useSchoolData } from '../lib/store';

export default function RoutinePage() {
  const { routines, loading } = useSchoolData();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-blue-600">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">পরীক্ষার সময়সূচী ও রুটিন</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">এখানে সকল শ্রেণির বার্ষিক ও সাময়িক পরীক্ষার রুটিন পাওয়া যাবে।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routines.length === 0 ? (
          <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
             <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
             <p className="text-gray-400">বর্তমানে কোনো রুটিন আপলোড করা নেই। এডমিন প্যানেল থেকে যোগ করুন।</p>
          </div>
        ) : (
          routines.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-300 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                  <Calendar size={24} />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded">প্রকাশিত: {item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{item.className}</h3>
              <p className="text-gray-500 text-sm mb-6 flex items-center">
                <Clock size={14} className="mr-1" /> শাখা: {item.section}
              </p>
              <button className="w-full bg-gray-50 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-3 rounded-xl flex items-center justify-center transition-colors group">
                <Download size={18} className="mr-2 group-hover:animate-bounce" /> পিডিএফ দেখুন
              </button>
            </motion.div>
          ))
        )}
      </div>

      {/* Class Schedule Table (Example) */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <Clock size={24} className="mr-2 text-blue-600" /> নিয়মিত ক্লাস রুটিন (নমুনা)
        </h3>
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4 font-bold border-b border-blue-800">সময় / বার</th>
                <th className="p-4 font-bold border-b border-blue-800">শনিবার</th>
                <th className="p-4 font-bold border-b border-blue-800">রবিবার</th>
                <th className="p-4 font-bold border-b border-blue-800">সোমবার</th>
                <th className="p-4 font-bold border-b border-blue-800">মঙ্গলবার</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold border-b bg-gray-50">১০:০০ - ১০:৪৫</td>
                <td className="p-4 border-b">বাংলা</td>
                <td className="p-4 border-b">ইংরেজি</td>
                <td className="p-4 border-b">গণিত</td>
                <td className="p-4 border-b">ইতিহাস</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold border-b bg-gray-50">১০:৪৫ - ১১:৩০</td>
                <td className="p-4 border-b">গণিত</td>
                <td className="p-4 border-b">বিজ্ঞান</td>
                <td className="p-4 border-b">ধর্ম</td>
                <td className="p-4 border-b">সমাজ</td>
              </tr>
              <tr className="bg-blue-50/50">
                <td className="p-2 text-center italic text-gray-400 border-b" colSpan={5}>বিরতি (১৫ মিনিট)</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-semibold border-b bg-gray-50">১১:৪৫ - ১২:৩০</td>
                <td className="p-4 border-b">ইংরেজি</td>
                <td className="p-4 border-b">বাংলা</td>
                <td className="p-4 border-b">কম্পিউটার</td>
                <td className="p-4 border-b">ড্রয়িং</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
