import { useState } from 'react';
import { ExternalLink, Bell, Phone, Link as LinkIcon, Download } from 'lucide-react';
import { useSchoolData, Notice } from '../lib/store';
import Modal from './Modal';

export default function Sidebar() {
  const { notices } = useSchoolData();
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const importantLinks = [
    { title: 'শিক্ষা মন্ত্রণালয়', url: 'https://moedu.gov.bd' },
    { title: 'শিক্ষা বোর্ড বরিশাল', url: 'https://barisalboard.gov.bd' },
    { title: 'ব্যানবেইস', url: 'https://banbeis.gov.bd' },
    { title: 'মুক্তপাঠ', url: 'https://muktopaath.gov.bd' },
    { title: 'ডিজিটাল কন্টেন্ট', url: 'https://teachers.gov.bd' },
  ];

  return (
    <aside className="space-y-8">
      {/* Notice Board Widget */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-blue-600 px-6 py-4 flex items-center justify-between text-white">
          <h3 className="font-bold flex items-center"><Bell size={18} className="mr-2" /> নোটিশ বোর্ড</h3>
        </div>
        <div className="p-4 bg-blue-50/30">
          <ul className="space-y-4">
            {notices.slice(0, 5).map((notice) => (
              <li key={notice.id} className="border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                <button 
                  onClick={() => setSelectedNotice(notice)}
                  className="group text-left w-full"
                >
                  <p className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {notice.title}
                  </p>
                  <span className="text-[10px] text-blue-400 font-bold">{notice.date}</span>
                </button>
              </li>
            ))}
            {notices.length === 0 && (
              <li className="text-gray-400 text-xs italic text-center py-4">বর্তমানে কোনো নোটিশ নেই</li>
            )}
          </ul>
        </div>
      </div>

      {/* Notice Details Modal */}
      <Modal 
        isOpen={!!selectedNotice} 
        onClose={() => setSelectedNotice(null)}
        title="নোটিশের বিস্তারিত"
      >
        {selectedNotice && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">তারিখ: {selectedNotice.date}</span>
              {selectedNotice.isImportant && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">জরুরী</span>
              )}
            </div>
            <h4 className="text-2xl font-black text-gray-900 leading-tight">{selectedNotice.title}</h4>
            <div className="bg-gray-50 p-6 rounded-2xl text-gray-600 leading-relaxed">
              উপরে উল্লেখিত বিষয়টি সংশ্লিষ্ট সকলকে অবগত করা যাচ্ছে যে, বিস্তারিত তথ্য প্রতিষ্ঠানের তথ্য কেন্দ্রে অথবা সংশ্লিষ্ট নোটিশে সংযু্ক্ত আছে। নিয়মিত আমাদের পোর্টাল ভিজিট করুন।
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center">
              <Download size={18} className="mr-2" /> পিডিএফ ডাউনলোড করুন
            </button>
          </div>
        )}
      </Modal>

      {/* Important Links Widget */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-emerald-600 px-6 py-4 text-white">
          <h3 className="font-bold flex items-center"><LinkIcon size={18} className="mr-2" /> গুরুত্বপূর্ণ লিংক</h3>
        </div>
        <div className="p-2">
          {importantLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 text-gray-700 text-sm group transition-all"
            >
              <span>{link.title}</span>
              <ExternalLink size={14} className="text-gray-300 group-hover:text-emerald-500" />
            </a>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-br from-red-600 to-orange-600 p-6 rounded-3xl text-white shadow-lg shadow-red-100">
        <h3 className="font-bold mb-4 flex items-center uppercase tracking-widest text-xs opacity-80 underline decoration-white/30 underline-offset-4">জরুরী যোগাযোগ</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
               <Phone size={18} />
             </div>
             <div>
               <p className="text-[10px] opacity-70 uppercase font-black">অফিস</p>
               <p className="font-bold">+৮৮০১৭১২-৩৪৫৬৭৮</p>
             </div>
          </div>
          <button className="w-full bg-white text-red-600 font-black py-3 rounded-xl shadow-inner text-sm hover:scale-105 transition-transform">
             এখনই কল করুন
          </button>
        </div>
      </div>

      {/* Downloads */}
      <div className="bg-gray-900 p-6 rounded-3xl text-white">
        <h3 className="font-bold mb-4 flex items-center text-sm"><Download size={18} className="mr-2 text-blue-400" /> ডাউনলোড কর্নার</h3>
        <div className="space-y-2">
           <button className="w-full text-left p-3 rounded-xl hover:bg-gray-800 text-xs flex items-center justify-between group">
              <span>ভর্তি ফরম ২০২৪</span>
              <Download size={14} className="opacity-0 group-hover:opacity-100" />
           </button>
           <button className="w-full text-left p-3 rounded-xl hover:bg-gray-800 text-xs flex items-center justify-between group border-t border-gray-800">
              <span>অ্যাকাডেমিক ক্যালেন্ডার</span>
              <Download size={14} className="opacity-0 group-hover:opacity-100" />
           </button>
        </div>
      </div>
    </aside>
  );
}
