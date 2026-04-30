import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, FileText, BadgeCheck, XCircle, ChevronRight, GraduationCap } from 'lucide-react';

import { useSchoolData } from '../lib/store';

export default function ResultsPage() {
  const { results, loading: dataLoading } = useSchoolData();
  const [studentId, setStudentId] = useState('');
  const [examType, setExamType] = useState('half_yearly');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (dataLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-blue-600">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const handleSearch = () => {
    if (!studentId) return;
    setLoading(true);
    setError('');
    
    // Search in store
    setTimeout(() => {
      const found = results.find(r => r.studentId === studentId);
      if (found) {
        setResult(found);
      } else {
        setResult(null);
        setError('দুঃখিত! এই আইডি নম্বরের কোনো ফলাফল পাওয়া যায়নি।');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">অনলাইন ফলাফল অনুসন্ধান</h2>
          <p className="text-gray-500">আপনার স্টুডেন্ট আইডি ও পরীক্ষার বছর নির্বাচন করে ফলাফল দেখুন।</p>
        </div>

        {/* Search Card */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">স্টুডেন্ট আইডি</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="যেমন: ১০২০৩০" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">পরীক্ষার ধরন</label>
              <select 
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-no-repeat bg-right"
              >
                <option value="half_yearly">অর্ধ-বার্ষিক পরীক্ষা - ২০২৪</option>
                <option value="yearly">বার্ষিক পরীক্ষা - ২০২৪</option>
                <option value="test">নির্বাচনী পরীক্ষা - ২০২৪</option>
              </select>
            </div>
          </div>
          <button 
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center"
          >
            {loading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'ফলাফল দেখুন'}
          </button>
        </div>

        {/* Result Table Container */}
        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="bg-blue-900 p-8 text-white">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{result.name}</h3>
                  <p className="text-blue-200 text-sm">আইডি: {result.id} | শ্রেণি: {result.class} | শাখা: {result.section}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl text-center">
                  <div className="text-blue-100 text-[10px] uppercase font-bold tracking-widest mb-1">প্রাপ্ত GPA</div>
                  <div className="text-3xl font-black">{result.gpa}</div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex items-center text-xs bg-green-500/30 px-3 py-1.5 rounded-full border border-green-400/30">
                  <BadgeCheck size={14} className="mr-1.5" /> উত্তীর্ণ
                </div>
                <div className="flex items-center text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                  <GraduationCap size={14} className="mr-1.5" /> শিক্ষাবর্ষ: ২০২৪
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-gray-900 font-bold mb-6 flex items-center">
                <FileText size={18} className="mr-2 text-blue-600" /> নম্বরপত্রের বিস্তারিত
              </h4>
              <div className="space-y-4">
                {result.marks.map((m: any, i: number) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-gray-400 text-xs mr-4">{i+1}</div>
                      <span className="font-bold text-gray-700">{m.subject}</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-sm">
                        <span className="text-gray-400 mr-2">প্রাপ্ত নম্বর:</span>
                        <span className="font-bold text-gray-900">{m.mark}</span>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs ${m.grade === 'A+' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                        {m.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button className="flex items-center text-blue-600 font-bold hover:underline">
                  মার্কশিট প্রিন্ট করুন <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
