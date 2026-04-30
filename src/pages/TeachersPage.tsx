import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, BookOpen, GraduationCap, Award, Info } from 'lucide-react';
import { useSchoolData, Teacher } from '../lib/store';
import Modal from '../components/Modal';

export default function TeachersPage() {
  const { teachers, loading } = useSchoolData();
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-blue-600">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">আমাদের দক্ষ শিক্ষক মন্ডলী</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">আমাদের প্রতিষ্ঠানে কর্মরত রয়েছেন একঝাঁক অভিজ্ঞ ও মেধাবী শিক্ষক, যারা প্রতিটি শিক্ষার্থীর সুপ্ত মেধা বিকাশে নিরলস কাজ করে যাচ্ছেন।</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher, i) => (
          <motion.div 
            key={teacher.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
            onClick={() => setSelectedTeacher(teacher)}
          >
            <div className="relative h-64 overflow-hidden">
              <img src={teacher.img} alt={teacher.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                <p className="text-blue-200 text-sm">{teacher.designation}</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <BookOpen size={16} className="mr-3 text-blue-600" />
                <span className="font-medium">বিষয়:</span>
                <span className="ml-2 font-bold">{teacher.subject}</span>
              </div>
              
              <div className="pt-4 flex border-t border-gray-50 space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-xs font-black shadow-lg shadow-blue-100 flex items-center justify-center">
                  <Info size={14} className="mr-2" /> বিস্তারিত প্রোফাইল
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Teacher Detail Modal */}
      <Modal 
        isOpen={!!selectedTeacher} 
        onClose={() => setSelectedTeacher(null)}
        title="শিক্ষক পরিচিতি"
      >
        {selectedTeacher && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img src={selectedTeacher.img} className="w-40 h-40 rounded-3xl object-cover shadow-2xl border-4 border-gray-50" alt={selectedTeacher.name} />
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-3xl font-black text-gray-900">{selectedTeacher.name}</h4>
                <p className="text-blue-600 font-bold uppercase tracking-widest">{selectedTeacher.designation}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-500">বিষয়: {selectedTeacher.subject}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-500">অভিজ্ঞতা: {selectedTeacher.experience}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-4 bg-blue-50 rounded-2xl">
                 <p className="text-[10px] uppercase font-black text-blue-400 mb-1">শিক্ষাগত যোগ্যতা</p>
                 <p className="font-bold text-blue-900">{selectedTeacher.education || 'শিক্ষাগত যোগ্যতা যুক্ত নেই'}</p>
               </div>
               <div className="p-4 bg-green-50 rounded-2xl">
                 <p className="text-[10px] uppercase font-black text-green-400 mb-1">ফোন নাম্বার</p>
                 <p className="font-bold text-green-900">{selectedTeacher.phone || 'গোপনীয়'}</p>
               </div>
            </div>

            <div className="space-y-2">
              <h5 className="font-black text-gray-900 uppercase text-xs tracking-widest underline decoration-blue-200 underline-offset-4">শিক্ষক সম্পর্কে</h5>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                {selectedTeacher.bio || "আমাদের এই দক্ষ শিক্ষক নিরলসভাবে শিক্ষার্থীদের মেধা বিকাশে কাজ করে যাচ্ছেন। তার একাডেমিক দক্ষতা ও অভিজ্ঞতা আমাদের প্রতিষ্ঠানের জন্য এক বড় সম্পদ।"}
              </p>
            </div>

            <div className="pt-6 flex gap-4">
               <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center space-x-2">
                 <Mail size={18} /> <span>ইমেইল পাঠান</span>
               </button>
               <button className="flex-1 border-2 border-gray-100 py-4 rounded-2xl font-black text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                 যোগাযোগ
               </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
