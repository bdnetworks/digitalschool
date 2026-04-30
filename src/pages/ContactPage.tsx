import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">যোগাযোগ করুন</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">আমাদের সাথে যেকোনো প্রয়োজনে যোগাযোগ করতে পারেন। নিচের তথ্যগুলো ব্যবহার করুন অথবা আমাদের মেসেজ দিন।</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 flex items-start space-x-6 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">আমাদের ঠিকানা</h4>
              <p className="text-gray-500 text-sm">ডিজিটাল স্কুল ক্যাম্পাস, মফস্বল রোড, বরিশাল সদর, বরিশাল।</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 flex items-start space-x-6 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">ফোন নাম্বার</h4>
              <p className="text-gray-500 text-sm">০১৮০০-০০০০০০, ০১৯০০-০০০০০০</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 flex items-start space-x-6 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">ইমেইল ঠিকানা</h4>
              <p className="text-gray-500 text-sm">info@digitalschool.edu.bd</p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-2 bg-blue-900 p-8 md:p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 opacity-50"></div>
          <h3 className="text-3xl font-bold mb-8">আমাদের মেসেজ পাঠান</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-blue-300">আপনার নাম</label>
              <input type="text" className="w-full bg-blue-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-blue-400" placeholder="সম্পূর্ণ নাম লিখুন" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-blue-300">ফোন নাম্বার</label>
              <input type="text" className="w-full bg-blue-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-blue-400" placeholder="মোবাইল নাম্বার" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-blue-300">মেসেজ</label>
              <textarea rows={4} className="w-full bg-blue-800 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-400 outline-none text-white placeholder-blue-400" placeholder="আপনার কথাগুলো এখানে লিখুন..."></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="bg-white text-blue-900 font-black px-10 py-5 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center space-x-3 w-full md:w-auto mt-4">
                <Send size={20} />
                <span>মেসেজ পাঠান</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
