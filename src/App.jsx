import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Heart, MapPin, Send, Copy, Check, Music } from 'lucide-react';

// --- ANIMASI PARTIKEL EMAS MENGAMBANG ---
const GoldParticles = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-amber-500/50 rounded-full blur-[1px]" // Sedikit lebih pekat agar terlihat di background terang
          initial={{ y: '100vh', x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
          animate={{ y: '-10vh', x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
        />
      ))}
    </div>
  );
};

// --- SAMPUL UNDANGAN (TEMA CERAH) ---
const CoverApp = ({ onOpen }) => (
  <motion.div 
    initial={{ y: 0 }} exit={{ y: '-100vh', opacity: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white overflow-hidden" // BG Putih
  >
    {/* Background Bertekstur Cerah */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507676184212-d0330a151f96?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
    
    <GoldParticles />

    {/* Bingkai Emas Soft */}
    <div className="relative z-10 w-[90%] max-w-md h-[85vh] border border-amber-300 rounded-t-[10rem] p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.1)] bg-white/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="text-center mb-4"
      >
        <p className="font-serif text-3xl md:text-4xl italic text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 drop-shadow-sm">
          Happy Wedding
        </p>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2"></div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 1 }} 
        className="font-serif text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-amber-500 via-amber-700 to-amber-900 mb-8 text-center drop-shadow-lg leading-tight"
      >
        Faisal <br/><span className="text-3xl font-light text-amber-600">&</span><br/> Zahida
      </motion.h1>
      
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mb-12 text-center">
        <p className="font-light text-zinc-600 text-[10px] tracking-widest mb-2 uppercase">Kepada Yth.</p>
        <p className="font-serif text-lg text-zinc-900 bg-stone-100 px-8 py-2 rounded-full border border-stone-200 shadow-sm">
          Bapak/Ibu/Saudara/i
        </p>
      </motion.div>
      
      <motion.button 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} onClick={onOpen}
        className="group relative px-10 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-full overflow-hidden shadow-[0_10px_20px_rgba(217,119,6,0.2)] hover:shadow-[0_15px_30px_rgba(217,119,6,0.3)] transition-all duration-500"
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
    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-amber-100 to-transparent pointer-events-none"></div>
    
    <div className="relative z-10 w-full max-w-md mx-auto">
      <p className="tracking-[0.4em] text-amber-700/80 text-xs mb-8 uppercase font-medium">The Wedding Of</p>
      
      <div className="border-y border-amber-200 py-8 px-12 backdrop-blur-sm bg-white/30 mb-8 shadow-[0_0_30px_rgba(245,158,11,0.05)]">
        <h2 className="font-serif text-5xl md:text-6xl text-zinc-900 mb-2 leading-tight">Faisal</h2>
        <span className="font-serif italic text-4xl text-amber-600 my-4 block">&</span>
        <h2 className="font-serif text-5xl md:text-6xl text-zinc-900 leading-tight">Zahida</h2>
      </div>
      
      <p className="text-zinc-600 font-light tracking-[0.3em] text-sm mb-14 uppercase">07 Juni 2026</p>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="px-4 relative">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-300"></div>
          <Heart size={14} className="text-amber-400" fill="currentColor" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-300"></div>
        </div>

        <h3 className="font-serif text-amber-700 text-xl mb-6">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h3>
        
        <p className="font-serif text-zinc-800 text-[15px] leading-loose mb-6 text-center mx-auto" dir="rtl">
          وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ Lَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰLِكَ Lَـَٔايَـٰتٍۢ Lِّقَوْمٍۢ يَتَفَكَّرُونَ
        </p>
        
        <p className="text-zinc-700 font-light text-[11px] md:text-xs leading-relaxed mb-6 italic">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </p>
        <p className="text-amber-700/90 text-[10px] font-medium tracking-[0.2em] uppercase">QS. Ar-Rum: 21</p>
      </motion.div>
    </div>
  </motion.div>
);

// --- HALAMAN PROFIL ---
const CoupleView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-10 px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 mb-2">Sang Mempelai</h2>
      <div className="w-12 h-0.5 bg-amber-300 mx-auto"></div>
    </div>
    
    <div className="space-y-10 max-w-md mx-auto">
      {/* Pria */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-b from-amber-200 to-transparent shadow-sm">
        <div className="bg-white rounded-[22px] p-10 flex flex-col items-center text-center">
          <h3 className="font-serif text-3xl text-zinc-900 mb-4">Faisal Muhammad Irfan</h3>
          <p className="text-sm text-zinc-600 font-light leading-relaxed">
            Putra dari<br/>
            <span className="text-amber-800 font-medium text-base block mt-1">Bpk. Ismail & Ibu Ismatul Ulya</span>
          </p>
        </div>
      </div>

      {/* Wanita */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-b from-amber-200 to-transparent shadow-sm">
        <div className="bg-white rounded-[22px] p-10 flex flex-col items-center text-center">
          <h3 className="font-serif text-3xl text-zinc-900 mb-4">Zahida Maharani</h3>
          <p className="text-sm text-zinc-600 font-light leading-relaxed">
            Putri dari<br/>
            <span className="text-amber-800 font-medium text-base block mt-1">Bpk. Zaedun & Ibu Umi Imroh</span>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- HALAMAN LOKASI ---
const LocationView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-10 px-6 flex flex-col items-center">
    <div className="text-center mb-12">
      <h2 className="font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 mb-2">Tempat Acara</h2>
      <div className="w-12 h-0.5 bg-amber-300 mx-auto"></div>
    </div>
    
    <div className="w-full max-w-md bg-gradient-to-b from-amber-100 to-white p-1 rounded-3xl mb-8 shadow-md">
      <div className="bg-white p-8 rounded-[22px] text-center border border-stone-100 relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <MapPin size={28} className="text-amber-600" strokeWidth={1.5} />
        </div>
        <h3 className="text-zinc-900 font-serif text-3xl mb-2">Akad</h3>
        <p className="text-amber-700 text-sm mb-6 font-medium tracking-widest uppercase">13.00 - Selesai (WIB)</p>
        <p className="text-zinc-800 text-base mb-2 font-medium">Minggu, 07 Juni 2026</p>
        <p className="text-zinc-600 text-sm font-light leading-relaxed mb-8">
          Jl. Ngadirejo, Dusun Kalikidang RT 01 RW 06, Desa Kliris <br/>Kec. Boja, Kabupaten Kendal <br/> 51372
        </p>
        <a href="https://goo.gl/maps/taAwYjC6FiJsptkj6" target="_blank" rel="noreferrer" className="inline-block w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-medium py-4 rounded-xl text-sm transition-colors shadow-sm">
          Lihat Google Maps
        </a>
      </div>
    </div>

    <div className="w-full max-w-md bg-gradient-to-b from-amber-100 to-white p-1 rounded-3xl shadow-md">
      <div className="bg-white p-8 rounded-[22px] text-center border border-stone-100 relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
          <MapPin size={28} className="text-amber-600" strokeWidth={1.5} />
        </div>
        <h3 className="text-zinc-900 font-serif text-3xl mb-2">Resepsi</h3>
        <p className="text-amber-700 text-sm mb-6 font-medium tracking-widest uppercase">13.00 - Selesai (WIB)</p>
        <p className="text-zinc-800 text-base mb-2 font-medium">Minggu, 07 Juni 2026</p>
        <p className="text-zinc-600 text-sm font-light leading-relaxed mb-8">
          Jl. Ngadirejo, Dusun Kalikidang RT 01 RW 06, Desa Kliris <br/>Kec. Boja, Kabupaten Kendal <br/> 51372
        </p>
        <a href="https://goo.gl/maps/taAwYjC6FiJsptkj6" target="_blank" rel="noreferrer" className="inline-block w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-medium py-4 rounded-xl text-sm transition-colors shadow-sm">
          Lihat Google Maps
        </a>
      </div>
    </div>
  </motion.div>
);

// --- HALAMAN RSVP & DIGITAL AMPLOP ---
const RSVPView = () => {
  const [formData, setFormData] = useState({ nama: '', kehadiran: 'Hadir', keterangan: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedBank, setCopiedBank] = useState(null); 
  
  const rekPria = "340601049432534"; 
  const bankPria = "BRI";
  const logoPria = "/bri.jpg"; 
  const namaPria = "FAISAL MUHAMMAD RIFAN";

  const rekWanita = "1360032744705"; 
  const bankWanita = "BANK MANDIRI";
  const logoWanita = "/mandiri.jpg"; 
  const namaWanita = "ZAHDA MAHARANI";

  const handleCopy = (rekening, bankName) => {
    navigator.clipboard.writeText(rekening);
    setCopiedBank(bankName);
    setTimeout(() => setCopiedBank(null), 2000); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyN2c4Q5tEwJU-LXWfMYm5fjULsne-moLPOX7vSRninvGmOz4Tm9NXokFO3yeHKq2p0/exec'; 
    
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
      .catch(() => {
        setIsLoading(false);
        alert('Maaf, koneksi terputus. Silakan coba lagi.');
      });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-screen pt-20 pb-10 px-6 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 mb-2">RSVP & Hadiah</h2>
        <div className="w-12 h-0.5 bg-amber-300 mx-auto"></div>
      </div>
      
      <div className="w-full max-w-md bg-white p-1 rounded-3xl mb-8 shadow-md border border-stone-100">
        <div className="bg-white p-8 rounded-[22px]">
          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 border border-green-200">
                <Send size={28} className="text-green-600" />
              </div>
              <h3 className="font-serif text-2xl text-green-700 mb-2">Terima Kasih!</h3>
              <p className="text-zinc-600 text-sm font-light leading-relaxed">
                Konfirmasi kehadiran dan ucapan manis Anda telah kami terima. Sampai jumpa di hari bahagia kami!
              </p>
            </motion.div>
          ) : (
            <>
              <p className="text-zinc-600 text-sm text-center mb-8 font-light">Mohon konfirmasi kehadiran Anda untuk kelancaran acara kami.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input type="text" required placeholder="Nama Lengkap Anda" value={formData.nama} onChange={(e) => setFormData({...formData, nama: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-zinc-900 text-sm focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-200 transition-colors placeholder:text-zinc-400" disabled={isLoading} />
                </div>
                <div>
                  <select value={formData.kehadiran} onChange={(e) => setFormData({...formData, kehadiran: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-zinc-900 text-sm focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-200 transition-colors appearance-none disabled:opacity-60" disabled={isLoading}>
                    <option value="Hadir">Ya, Saya akan hadir</option>
                    <option value="Tidak Hadir">Maaf, Saya tidak bisa hadir</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Tuliskan ucapan atau doa restu..." rows="3" value={formData.keterangan} onChange={(e) => setFormData({...formData, keterangan: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-zinc-900 text-sm focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-200 transition-colors placeholder:text-zinc-400 resize-none" disabled={isLoading}></textarea>
                </div>
                <button type="submit" disabled={isLoading} className="w-full mt-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-medium tracking-widest text-xs py-4 rounded-xl shadow-[0_5px_15px_rgba(217,119,6,0.2)] hover:shadow-[0_8px_20px_rgba(217,119,6,0.3)] transition-all uppercase disabled:opacity-60">
                  {isLoading ? 'Mengirim...' : 'Kirim Konfirmasi'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="w-full max-w-md bg-white p-1 rounded-3xl mb-8 shadow-md border border-stone-100">
        <div className="bg-white p-8 rounded-[22px] text-center relative">
          <h3 className="font-serif text-3xl text-zinc-900 mb-2">Wedding Gift</h3>
          <p className="text-zinc-600 text-sm font-light leading-relaxed mb-6">Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih untuk kami, dapat melalui:</p>

          <div className="mb-8">
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-3 relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100 blur-[20px]"></div>
              <div className="flex items-center justify-center gap-3 mb-3 relative z-10">
                <div className="bg-white px-2 py-1.5 rounded shadow-sm border border-stone-100">
                  <img src={logoPria} alt={bankPria} className="h-4 object-contain" />
                </div>
                <p className="text-amber-700 font-medium tracking-widest uppercase">{bankPria}</p>
              </div>
              <p className="text-2xl text-zinc-900 font-mono tracking-wider mb-2 relative z-10">{rekPria}</p>
              <p className="text-zinc-600 text-xs font-light uppercase tracking-wider relative z-10">a.n {namaPria}</p>
            </div>
            <button onClick={() => handleCopy(rekPria, bankPria)} className="flex items-center justify-center gap-2 w-full bg-white/50 hover:bg-stone-100 text-amber-700 border border-amber-300 font-medium tracking-widest text-xs py-3.5 rounded-xl transition-all uppercase shadow-sm">
              {copiedBank === bankPria ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              {copiedBank === bankPria ? <span className="text-green-600 font-semibold">Tersalin!</span> : 'Salin Rekening'}
            </button>
          </div>

          <div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-3 relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100 blur-[20px]"></div>
              <div className="flex items-center justify-center gap-3 mb-3 relative z-10">
                <div className="bg-white px-2 py-1.5 rounded shadow-sm border border-stone-100">
                  <img src={logoWanita} alt={bankWanita} className="h-4 object-contain" />
                </div>
                <p className="text-amber-700 font-medium tracking-widest uppercase">{bankWanita}</p>
              </div>
              <p className="text-2xl text-zinc-900 font-mono tracking-wider mb-2 relative z-10">{rekWanita}</p>
              <p className="text-zinc-600 text-xs font-light uppercase tracking-wider relative z-10">a.n {namaWanita}</p>
            </div>
            <button onClick={() => handleCopy(rekWanita, bankWanita)} className="flex items-center justify-center gap-2 w-full bg-white/50 hover:bg-stone-100 text-amber-700 border border-amber-300 font-medium tracking-widest text-xs py-3.5 rounded-xl transition-all uppercase shadow-sm">
              {copiedBank === bankWanita ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
              {copiedBank === bankWanita ? <span className="text-green-600 font-semibold">Tersalin!</span> : 'Salin Rekening'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- KOMPONEN COPYRIGHT (FOOTER CERAH) ---
const Copyright = () => (
  <div className="w-full flex flex-col items-center justify-center pt-8 pb-32 opacity-90 relative z-10">
    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-4"></div>
    <p className="text-zinc-600 font-light text-[10px] tracking-[0.3em] uppercase mb-1.5">© 2026 Faisal & Zahida</p>
    <p className="text-zinc-500 font-light text-[9px] tracking-widest">Digital Invitation by <span className="text-amber-600/80">weeding_faisal_zahida</span></p>
  </div>
);

// --- KOMPONEN UTAMA (APP) ---
export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/weddingsong.mp3'); 
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log("Autoplay diblokir:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true); 
  };

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
    // BG Utama diganti ke Stone-50 (Putih tulang/sangat cerah)
    <div className="font-sans bg-stone-50 min-h-screen text-zinc-900 overflow-x-hidden selection:bg-amber-100 relative">
      <AnimatePresence>
        {!isOpened && <CoverApp onOpen={handleOpenInvitation} />}
      </AnimatePresence>

      {isOpened && (
        <div className="relative h-screen overflow-y-auto custom-scrollbar">
          <GoldParticles />
          
          <AnimatePresence mode="wait">
            {renderView()}
          </AnimatePresence>
          
          <Copyright />

          {/* Tombol Musik (Cerah) */}
          <div className="fixed bottom-24 right-6 z-50 pointer-events-none">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`pointer-events-auto p-3.5 rounded-full bg-white/90 border border-stone-200 text-amber-500 shadow-xl backdrop-blur-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${isPlaying ? 'animate-spin [animation-duration:8s]' : ''}`}
            >
              {isPlaying ? <Music size={20} strokeWidth={1.5} /> : <span className="text-xs">🔇</span>}
            </button>
          </div>

          {/* Bottom Navigation (Cerah dengan Shadow) */}
          <div className="fixed bottom-6 left-0 right-0 z-40 px-4 pointer-events-none">
            <div className="max-w-md mx-auto pointer-events-auto">
              <div className="bg-white/90 backdrop-blur-2xl border border-stone-100 rounded-2xl flex justify-around items-center p-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
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

const NavButton = ({ icon, label, isActive, onClick }) => (
  <button onClick={onClick} className={`relative flex flex-col items-center gap-1.5 w-16 py-2 transition-all duration-300 ${isActive ? 'text-amber-600' : 'text-zinc-400 hover:text-zinc-600'}`}>
    {icon}
    <span className="text-[10px] tracking-widest font-medium uppercase">{label}</span>
    {isActive && <motion.div layoutId="activeNav" className="absolute -top-2 w-8 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />}
  </button>
);