import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Heart, MapPin, Send } from 'lucide-react';

// --- ANIMASI PARTIKEL EMAS MENGAMBANG ---
const GoldParticles = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-amber-400/40 rounded-full blur-[1px]"
          initial={{ y: '100vh', x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
          animate={{ y: '-10vh', x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
        />
      ))}
    </div>
  );
};

// --- SAMPUL UNDANGAN ---
const CoverApp = ({ onOpen }) => (
  <motion.div 
    initial={{ y: 0 }} exit={{ y: '-100vh', opacity: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
  >
    {/* Background Bertekstur */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507676184212-d0330a151f96?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
    
    <GoldParticles />

    {/* Bingkai Emas */}
    <div className="relative z-10 w-[90%] max-w-md h-[85vh] border border-amber-500/30 rounded-t-[10rem] p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.05)] bg-[#0a0a0a]/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mb-4"
      >
        <p className="font-serif text-3xl md:text-4xl italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 drop-shadow-sm">
          Happy Wedding
        </p>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-2"></div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1, duration: 1 }} 
        className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 mb-8 text-center drop-shadow-xl leading-tight"
      >
        Faisal <br/><span className="text-3xl font-light text-amber-500/50">&</span><br/> Zahida
      </motion.h1>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mb-12 text-center">
        <p className="font-light text-zinc-500 text-[10px] tracking-widest mb-2 uppercase">Kepada Yth.</p>
        <p className="font-serif text-lg text-amber-50 bg-[#111] px-8 py-2 rounded-full border border-white/10 shadow-lg">
          Bapak/Ibu/Saudara/i
        </p>
      </motion.div>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}
        onClick={onOpen}
        className="group relative px-10 py-4 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded-full overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all duration-500"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        <span className="relative text-xs tracking-[0.3em] text-white font-semibold">BUKA UNDANGAN</span>
      </motion.button>
    </div>
  </motion.div>
);

// --- HALAMAN UTAMA ---
const HomeView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-start pt-20 pb-10 text-center p-6 relative">
    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-amber-900/10 to-transparent pointer-events-none"></div>
    
    <div className="relative z-10 w-full max-w-md mx-auto">
      <p className="tracking-[0.4em] text-amber-500/60 text-xs mb-8 uppercase font-medium">The Wedding Of</p>
      
      <div className="border-y border-amber-500/20 py-8 px-12 backdrop-blur-sm bg-white/[0.02] mb-8 shadow-[0_0_30px_rgba(245,158,11,0.03)]">
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-2 leading-tight">Faisal</h2>
        <span className="font-serif italic text-4xl text-amber-500 my-4 block">&</span>
        <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">Zahida</h2>
      </div>
      
      <p className="text-zinc-400 font-light tracking-[0.3em] text-sm mb-14 uppercase">07 Juni 2026</p>

      {/* --- Bagian Ayat Al-Qur'an --- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="px-4 relative"
      >
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-500/50"></div>
          <Heart size={14} className="text-amber-500/50" fill="currentColor" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-500/50"></div>
        </div>

        <h3 className="font-serif text-amber-400 text-xl mb-6">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h3>
        
        <p className="font-serif text-white/90 text-[15px] leading-loose mb-6 text-center mx-auto" dir="rtl">
          وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ
        </p>
        
        <p className="text-zinc-400 font-light text-[11px] md:text-xs leading-relaxed mb-6 italic">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </p>
        
        <p className="text-amber-500/80 text-[10px] font-medium tracking-[0.2em] uppercase">QS. Ar-Rum: 21</p>
      </motion.div>
    </div>
  </motion.div>
);

// --- HALAMAN PROFIL ---
const CoupleView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-10 px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 mb-2">Sang Mempelai</h2>
      <div className="w-12 h-0.5 bg-amber-500/50 mx-auto"></div>
    </div>
    
    <div className="space-y-12 max-w-md mx-auto">
      {/* Pria */}
      <div className="relative p-1 rounded-t-full rounded-b-3xl bg-gradient-to-b from-amber-500/30 to-transparent">
        <div className="bg-[#0a0a0a] rounded-t-full rounded-b-[22px] p-6 flex flex-col items-center text-center">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-amber-500/40 p-1">
            <img src="/pria.jpeg" alt="Faisal" className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="font-serif text-2xl text-white mb-2">Faisal Muhammad Irfan</h3>
          <p className="text-sm text-zinc-400 font-light">Putra dari<br/><span className="text-amber-100">Bpk. Ismail & Ibu Ismatul Ulya</span></p>
        </div>
      </div>

      {/* Wanita */}
      <div className="relative p-1 rounded-t-full rounded-b-3xl bg-gradient-to-b from-amber-500/30 to-transparent">
        <div className="bg-[#0a0a0a] rounded-t-full rounded-b-[22px] p-6 flex flex-col items-center text-center">
          <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-amber-500/40 p-1">
            <img src="/wanita.jpeg" alt="Zahida" className="w-full h-full object-cover rounded-full" />
          </div>
          <h3 className="font-serif text-2xl text-white mb-2">Zahida Maharani</h3>
          <p className="text-sm text-zinc-400 font-light">Putri dari<br/><span className="text-amber-100">Bpk. Zaedun & Ibu Umi Imroh</span></p>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- HALAMAN LOKASI ---
const LocationView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-10 px-6 flex flex-col items-center">
    <div className="text-center mb-12">
      <h2 className="font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 mb-2">Tempat Acara</h2>
      <div className="w-12 h-0.5 bg-amber-500/50 mx-auto"></div>
    </div>
    
    <div className="w-full max-w-md bg-gradient-to-b from-amber-900/20 to-[#0a0a0a] p-1 rounded-3xl mb-8">
      <div className="bg-[#0a0a0a] p-8 rounded-[22px] text-center border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
          <MapPin size={28} className="text-amber-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-white font-serif text-3xl mb-2">Akad</h3>
        <p className="text-amber-500 text-sm mb-6 font-medium tracking-widest uppercase">07.00 - Selesai (WIB)</p>
        <p className="text-zinc-200 text-base mb-2 font-medium">Minggu, 07 Juni 2026</p>
        <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
          Jl. Ngadirejo, Desa Kliris <br/>Kec. Boja, Kabupaten Kendal <br/> 51372
        </p>
        <a href="https://maps.app.goo.gl/1szvRf2hzUhRhPTXA" target="_blank" rel="noreferrer" className="inline-block w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-4 rounded-xl text-sm transition-colors shadow-[0_0_20px_rgba(217,119,6,0.3)]">
          Lihat Google Maps
        </a>
      </div>
    </div>

    <div className="w-full max-w-md bg-gradient-to-b from-amber-900/20 to-[#0a0a0a] p-1 rounded-3xl">
      <div className="bg-[#0a0a0a] p-8 rounded-[22px] text-center border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
          <MapPin size={28} className="text-amber-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-white font-serif text-3xl mb-2">Resepsi</h3>
        <p className="text-amber-500 text-sm mb-6 font-medium tracking-widest uppercase">13.00 - Selesai (WIB)</p>
        <p className="text-zinc-200 text-base mb-2 font-medium">Minggu, 07 Juni 2026</p>
        <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
          Jl. Ngadirejo, Desa Kliris <br/>Kec. Boja, Kabupaten Kendal <br/> 51372
        </p>
        <a href="https://maps.app.goo.gl/1szvRf2hzUhRhPTXA" target="_blank" rel="noreferrer" className="inline-block w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-4 rounded-xl text-sm transition-colors shadow-[0_0_20px_rgba(217,119,6,0.3)]">
          Lihat Google Maps
        </a>
      </div>
    </div>
  </motion.div>
);

// --- HALAMAN RSVP & UCAPAN ---
const RSVPView = () => {
  const [formData, setFormData] = useState({ nama: '', kehadiran: 'Hadir', keterangan: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyAOj9pd8ZWdEUyxEYWZXdvLXOfKUADjNNS5gP_vpR0j0j5aUs454m2HvodOClIoUd3/exec'; 
    
    const data = new FormData();
    data.append('nama', formData.nama);
    data.append('kehadiran', formData.kehadiran);
    data.append('keterangan', formData.keterangan);
    data.append('waktu', new Date().toLocaleString('id-ID'));

    fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors' })
      .then(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        setIsLoading(false);
        alert('Maaf, koneksi terputus. Silakan coba lagi.');
      });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-10 px-6 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 mb-2">RSVP & Ucapan</h2>
        <div className="w-12 h-0.5 bg-amber-500/50 mx-auto"></div>
      </div>
      
      <div className="w-full max-w-md bg-gradient-to-b from-amber-900/20 to-[#0a0a0a] p-1 rounded-3xl">
        <div className="bg-[#0a0a0a] p-8 rounded-[22px] border border-white/5 shadow-2xl relative">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <Send size={28} className="text-green-400" />
              </div>
              <h3 className="font-serif text-2xl text-amber-400 mb-2">Terima Kasih!</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Konfirmasi kehadiran dan ucapan manis Anda telah kami terima. Sampai jumpa di hari bahagia kami!
              </p>
            </motion.div>
          ) : (
            <>
              <p className="text-zinc-400 text-sm text-center mb-8 font-light">Mohon konfirmasi kehadiran Anda untuk kelancaran acara kami.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Nama Lengkap Anda" 
                    value={formData.nama}
                    onChange={(e) => setFormData({...formData, nama: e.target.value})}
                    className="w-full bg-[#111] border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-zinc-600" 
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <select 
                    value={formData.kehadiran}
                    onChange={(e) => setFormData({...formData, kehadiran: e.target.value})}
                    className="w-full bg-[#111] border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
                    disabled={isLoading}
                  >
                    <option value="Hadir">Ya, Saya akan hadir</option>
                    <option value="Tidak Hadir">Maaf, Saya tidak bisa hadir</option>
                  </select>
                </div>

                <div>
                  <textarea 
                    placeholder="Tuliskan ucapan atau doa restu..." 
                    rows="3" 
                    value={formData.keterangan}
                    onChange={(e) => setFormData({...formData, keterangan: e.target.value})}
                    className="w-full bg-[#111] border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-zinc-600 resize-none"
                    disabled={isLoading}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full mt-2 bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 text-white font-medium tracking-widest text-xs py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all uppercase"
                >
                  {isLoading ? 'Mengirim...' : 'Kirim Konfirmasi'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- KOMPONEN COPYRIGHT (FOOTER) ---
const Copyright = () => (
  <div className="w-full flex flex-col items-center justify-center pt-8 pb-32 opacity-80 relative z-10">
    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-4"></div>
    <p className="text-zinc-400 font-light text-[10px] tracking-[0.3em] uppercase mb-1.5">
      © 2026 Faisal & Zahida
    </p>
    <p className="text-zinc-500 font-light text-[9px] tracking-widest">
      Digital Invitation by <span className="text-amber-500/80">weeding_faisal_zahida</span>
    </p>
  </div>
);

// --- KOMPONEN UTAMA (APP) ---
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const renderView = () => {
    switch(activeTab) {
      case 'home': return <HomeView key="home" />;
      case 'couple': return <CoupleView key="couple" />;
      case 'location': return <LocationView key="location" />;
      case 'rsvp': return <RSVPView key="rsvp" />;
      default: return <HomeView key="home" />;
    }
  };

  return (
    <div className="font-sans bg-[#050505] min-h-screen text-white overflow-x-hidden selection:bg-amber-600/30 relative">
      <AnimatePresence>
        {!isOpened && <CoverApp onOpen={() => setIsOpened(true)} />}
      </AnimatePresence>

      {isOpened && (
        <div className="relative h-screen overflow-y-auto custom-scrollbar">
          <GoldParticles />
          
          <AnimatePresence mode="wait">
            {renderView()}
          </AnimatePresence>
          
          {/* Copyright sekarang dirender dengan benar di semua halaman! */}
          <Copyright />

          {/* Bottom Navigation Mewah */}
          <div className="fixed bottom-6 left-0 right-0 z-40 px-4 pointer-events-none">
            <div className="max-w-md mx-auto pointer-events-auto">
              <div className="bg-[#111]/80 backdrop-blur-2xl border border-white/10 rounded-2xl flex justify-around items-center p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <NavButton icon={<Home size={22} strokeWidth={1.5} />} label="Beranda" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
                <NavButton icon={<Heart size={22} strokeWidth={1.5} />} label="Profil" isActive={activeTab === 'couple'} onClick={() => setActiveTab('couple')} />
                <NavButton icon={<MapPin size={22} strokeWidth={1.5} />} label="Lokasi" isActive={activeTab === 'location'} onClick={() => setActiveTab('location')} />
                <NavButton icon={<Send size={22} strokeWidth={1.5} />} label="RSVP" isActive={activeTab === 'rsvp'} onClick={() => setActiveTab('rsvp')} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Tombol Navigasi
const NavButton = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`relative flex flex-col items-center gap-1.5 w-16 py-2 transition-all duration-300 ${isActive ? 'text-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}
  >
    {icon}
    <span className="text-[10px] tracking-widest font-medium uppercase">{label}</span>
    {isActive && (
      <motion.div layoutId="activeNav" className="absolute -top-2 w-8 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />
    )}
  </button>
);