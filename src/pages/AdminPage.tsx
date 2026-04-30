import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  Plus, 
  Trash2, 
  Bell, 
  Users, 
  Calendar, 
  FileText, 
  LogOut,
  Lock,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { useSchoolData } from '../lib/store';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('notices');
  const [isSaving, setIsSaving] = useState(false);
  
  const { 
    notices, addNotice, deleteNotice,
    teachers, addTeacher, deleteTeacher,
    routines, addRoutine, deleteRoutine,
    results, addResult, deleteResult,
    loading 
  } = useSchoolData();

  // Login handler
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('ভুল পাসওয়ার্ড!');
    }
  };

  const handleAddNotice = async () => {
    setIsSaving(true);
    await addNotice({ 
      title: "নতুন নোটিশের শিরোনাম", 
      date: new Date().toLocaleDateString('bn-BD'),
      isImportant: false 
    });
    setIsSaving(false);
  };

  const handleAddTeacher = async () => {
    setIsSaving(true);
    await addTeacher({ 
      name: "শিক্ষকের নাম", 
      designation: "পদবী", 
      subject: "বিষয়", 
      img: "https://images.unsplash.com/photo-1544717297-fa95b3ee91ef?q=80&w=2070",
      education: "শিক্ষাগত যোগ্যতা",
      experience: "২ বছর",
      phone: "+৮৮০১৭১২-০০০০০",
      bio: "শিক্ষকের সংক্ষিপ্ত পরিচিতি এখানে লিখুন..."
    });
    setIsSaving(false);
  };

  const handleAddRoutine = async () => {
    setIsSaving(true);
    await addRoutine({
      className: "শ্রেণি",
      section: "শাখা",
      date: new Date().toLocaleDateString('bn-BD'),
      fileName: "routine.pdf"
    });
    setIsSaving(false);
  };

  const handleAddResult = async () => {
    setIsSaving(true);
    await addResult({
      studentId: "1001",
      studentName: "নাম",
      className: "৬ষ্ঠ",
      section: "ক",
      gpa: "৫.০০"
    });
    setIsSaving(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-md w-full">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">এডমিন লগইন</h2>
          <p className="text-center text-gray-500 text-sm mb-6">আপনার ড্যাশবোর্ডে প্রবেশ করতে পাসওয়ার্ড দিন</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="পাসওয়ার্ড দিন (যেমন: admin123)" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-200 transition-all font-mono"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
              প্রবেশ করুন
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-blue-600">
        <Loader2 className="animate-spin mb-4" size={40} />
        <p className="font-bold">ডাটাবেজ লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b pb-6">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="p-3 bg-blue-600 rounded-xl text-white">
            <Settings size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">ম্যানেজমেন্ট ড্যাশবোর্ড</h1>
            <p className="text-xs text-green-600 flex items-center font-bold">
              <CheckCircle2 size={12} className="mr-1" /> ক্লাউড সার্ভারের সাথে যুক্ত
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="flex items-center px-6 py-2.5 bg-gray-100 text-gray-600 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors font-bold text-sm"
        >
          <LogOut size={18} className="mr-2" /> লগআউট
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-3">
          {[
            { id: 'notices', label: 'নোটিশ ম্যানেজমেন্ট', icon: Bell },
            { id: 'teachers', label: 'শিক্ষক তালিকা', icon: Users },
            { id: 'routines', label: 'রুটিন আপডেট', icon: Calendar },
            { id: 'results', label: 'ফলাফল এন্ট্রি', icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center p-4 rounded-2xl font-bold transition-all text-sm ${
                activeTab === tab.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 translate-x-2' : 'bg-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={20} className="mr-3" /> {tab.label}
            </button>
          ))}
        </aside>

        <main className="lg:col-span-3 bg-white rounded-[32px] p-6 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
          {isSaving && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-20 flex items-center justify-center">
              <Loader2 className="animate-spin text-blue-600" />
            </div>
          )}

          {activeTab === 'notices' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl text-gray-900 italic underline decoration-blue-200 underline-offset-8">নোটিশ বোর্ড</h3>
                <button 
                  onClick={handleAddNotice}
                  className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center hover:bg-blue-700 transition-all active:scale-95"
                >
                  <Plus size={20} className="mr-1" /> নতুন নোটিশ
                </button>
              </div>
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-blue-200 transition-all">
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg mb-1">{notice.title}</p>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{notice.date}</span>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button 
                        onClick={() => deleteNotice(notice.id)} 
                        className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                       >
                        <Trash2 size={20} />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'teachers' && (
             <div className="space-y-8">
               <div className="flex justify-between items-center">
                 <h3 className="font-bold text-2xl text-gray-900">শিক্ষক তালিকা</h3>
                 <button 
                   onClick={handleAddTeacher}
                   className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center hover:bg-blue-700 active:scale-95"
                 >
                   <Plus size={20} className="mr-1" /> নতুন শিক্ষক
                 </button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {teachers.map((teacher) => (
                   <div key={teacher.id} className="p-6 bg-gray-50 rounded-[24px] border border-gray-100 space-y-4 relative group group-hover:shadow-md transition-all">
                     <button 
                      onClick={() => deleteTeacher(teacher.id)} 
                      className="absolute top-4 right-4 text-gray-300 hover:text-red-500 p-2"
                     >
                      <Trash2 size={20} />
                     </button>
                     <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl overflow-hidden shadow-inner flex-shrink-0">
                          {teacher.img && <img src={teacher.img} className="w-full h-full object-cover" />}
                        </div>
                        <div>
                          <p className="font-black text-gray-900">{teacher.name}</p>
                          <p className="text-xs text-blue-600 font-bold">{teacher.designation}</p>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">বিষয়: {teacher.subject}</p>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">অভিজ্ঞতা: {teacher.experience}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          )}

          {activeTab === 'routines' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl text-gray-900">রুটিন ম্যানেজমেন্ট</h3>
                <button 
                  onClick={handleAddRoutine}
                  className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center hover:bg-blue-700"
                >
                  <Plus size={20} className="mr-1" /> নতুন রুটিন
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {routines.map((routine) => (
                  <div key={routine.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 font-serif">{routine.className} ({routine.section})</h4>
                      <p className="text-xs text-gray-400 font-mono">{routine.date}</p>
                    </div>
                    <button onClick={() => deleteRoutine(routine.id)} className="text-red-400 hover:text-red-500 p-2">
                       <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-8">
               <div className="flex justify-between items-center">
                 <h3 className="font-bold text-2xl text-gray-900">ফলাফল এন্ট্রি</h3>
                 <button 
                   onClick={handleAddResult}
                   className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black flex items-center hover:bg-blue-700"
                 >
                   <Plus size={20} className="mr-1" /> নতুন রেজাল্ট যোগ করুন
                 </button>
               </div>
               <div className="space-y-4">
                 {results.map((res) => (
                   <div key={res.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between group">
                     <div>
                       <h4 className="font-bold text-gray-900">{res.studentName}</h4>
                       <p className="text-xs text-gray-500">আইডি: {res.studentId} | শ্রেণি: {res.className} | GPA: <span className="text-blue-600 font-bold">{res.gpa}</span></p>
                     </div>
                     <button onClick={() => deleteResult(res.id)} className="text-gray-300 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 size={20} />
                     </button>
                   </div>
                 ))}
               </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
