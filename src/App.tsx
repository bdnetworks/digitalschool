/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  FileText, 
  Users, 
  Phone, 
  Info, 
  Menu, 
  X, 
  Bell,
  GraduationCap,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Settings,
  Image as ImageIcon
} from 'lucide-react';
import HomePage from './pages/HomePage';
import RoutinePage from './pages/RoutinePage';
import ResultsPage from './pages/ResultsPage';
import StudentInfoPage from './pages/StudentInfoPage';
import TeachersPage from './pages/TeachersPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Sidebar from './components/Sidebar';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'routine': return <RoutinePage />;
      case 'results': return <ResultsPage />;
      case 'students': return <StudentInfoPage />;
      case 'teachers': return <TeachersPage />;
      case 'gallery': return <GalleryPage />;
      case 'contact': return <ContactPage />;
      case 'admin': return <AdminPage />;
      default: return <HomePage />;
    }
  };

  const navItems = [
    { id: 'home', label: 'হোম', icon: Home },
    { id: 'about', label: 'আমাদের সম্পর্কে', icon: Info },
    { id: 'teachers', label: 'শিক্ষক তালিকা', icon: Users },
    { id: 'routine', label: 'রুটিন', icon: Calendar },
    { id: 'results', label: 'ফলাফল', icon: FileText },
    { id: 'gallery', label: 'গ্যালারি', icon: ImageIcon },
    { id: 'contact', label: 'যোগাযোগ', icon: Phone },
    { id: 'admin', label: 'এডমিন', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-blue-900 text-white py-2.5 font-bold tracking-wider">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[11px] uppercase">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Phone size={14} className="mr-2 text-blue-400" /> মোবাইল: +৮৮০১৭১২-৩৪৫৬৭৮</span>
            <span className="flex items-center"><Mail size={14} className="mr-2 text-blue-400" /> ইমেইল: info@digitalsschool.edu.bd</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 mr-4">
              <Facebook size={14} className="hover:text-blue-400 cursor-pointer" />
              <Twitter size={14} className="hover:text-blue-400 cursor-pointer" />
              <Youtube size={14} className="hover:text-red-500 cursor-pointer" />
            </div>
            <span className="text-blue-300">EIIN: ১২৩৪৫৬</span>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <header className="bg-white border-b border-gray-100 shadow-sm relative z-30">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="w-24 h-24 bg-blue-600 rounded-[35%] flex items-center justify-center text-white shadow-2xl shadow-blue-200 group-hover:scale-105 transition-transform">
              <GraduationCap size={56} strokeWidth={1} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight mb-1">ডিজিটাল স্কুল ও কলেজ</h1>
              <p className="text-sm font-bold text-blue-500 uppercase tracking-[.3em] opacity-80">চাঁদপুর মহকুমা, বরিশাল</p>
            </div>
          </div>
          <div className="hidden xl:flex items-center bg-gray-50 p-2 rounded-2xl border border-gray-100">
             <div className="px-4 border-r border-gray-200 text-center">
                <p className="text-2xl font-black text-blue-600">১০০০+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">শিক্ষার্থী</p>
             </div>
             <div className="px-4 text-center">
                <p className="text-2xl font-black text-emerald-600">৫০+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">শিক্ষক</p>
             </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block border-t border-gray-50 py-3">
          <nav className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-1">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                    : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <item.icon size={18} className="mr-2" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile sticky header toggle */}
        <div className="lg:hidden sticky top-0 bg-white border-b border-gray-100 py-4 px-4 flex justify-between items-center z-50">
           <div className="flex items-center space-x-2">
             <GraduationCap size={24} className="text-blue-600" />
             <span className="font-bold text-blue-900">ডিজিটাল স্কুল</span>
           </div>
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-gray-100 rounded-lg">
             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="py-12 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`${['home', 'about', 'contact'].includes(activeTab) ? 'grid grid-cols-1 lg:grid-cols-12 gap-10' : ''}`}>
             <div className={`${['home', 'about', 'contact'].includes(activeTab) ? 'lg:col-span-8' : ''}`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
             </div>
             
             {['home', 'about', 'contact'].includes(activeTab) && (
               <div className="lg:col-span-4 mt-12 lg:mt-0">
                 <Sidebar />
               </div>
             )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-gray-400">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <GraduationCap size={24} className="text-blue-500" />
              <span className="text-xl font-bold">ডিজিটাল স্কুল</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              আমাদের লক্ষ্য হলো মানসম্মত শিক্ষা প্রদানের মাধ্যমে সৎ, দক্ষ ও দেশপ্রেমিক সুনাগরিক গড়ে তোলা।
            </p>
            <div className="flex space-x-3">
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"><Facebook size={18} /></div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors cursor-pointer"><Twitter size={18} /></div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"><Youtube size={18} /></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">ভর্তি তথ্য</li>
              <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('results')}>পরীক্ষার ফলাফল</li>
              <li className="hover:text-blue-400 cursor-pointer" onClick={() => setActiveTab('routine')}>ক্লাস রুটিন</li>
              <li className="hover:text-blue-400 cursor-pointer">শিক্ষক তালিকা</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">শিক্ষা মন্ত্রণালয়</li>
              <li className="hover:text-blue-400 cursor-pointer">ঢাকা বোর্ড</li>
              <li className="hover:text-blue-400 cursor-pointer">মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">যোগাযোগ</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <span>মিরপুর-১০, ঢাকা-১২১৬, বাংলাদেশ</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-500 flex-shrink-0" />
                <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-500 flex-shrink-0" />
                <span>info@digitalschool.edu.bd</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800 flex flex-col md:row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ডিজিটাল স্কুল পোর্টাল। সকল স্বত্ব সংরক্ষিত।</p>
          <p className="mt-2 md:mt-0">কারিগরি সহযোগিতায়: AI Coding Agent</p>
        </div>
      </footer>
    </div>
  );
}
