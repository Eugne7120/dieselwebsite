import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  AlertTriangle, 
  Wallet, 
  Share2, 
  Rocket, 
  Waves, 
  LineChart, 
  Copy, 
  Database, 
  Percent, 
  Users, 
  TrendingUp,
  Plane,
  Truck,
  Fuel,
  Zap,
  ChevronRight,
  Menu,
  X,
  Globe,
  Plus,
  Minus,
  Navigation
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            <div className="relative">
              <Droplets className="text-[#d4af77] w-8 h-8" />
              <div className="absolute -bottom-1 left-1/2 w-1 h-3 bg-[#d4af77] rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#d4af77] italic">DIESEL</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Stats', 'Terminal', 'Buy', 'Community'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-[#d4af77] ${
                  activeTab === item.toLowerCase() ? 'text-[#d4af77]' : 'text-slate-300'
                }`}
              >
                {item === 'Terminal' ? 'Crisis Dashboard' : item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end gap-1 mr-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af77]/60 font-bold">Bonding</span>
                <span className="text-[10px] text-[#d4af77] font-bold">77%</span>
              </div>
              <div className="w-32 h-1.5 bg-[#1e1a14] rounded-full overflow-hidden border border-[#d4af77]/20">
                <div className="h-full bg-[#d4af77]" style={{ width: '77%' }}></div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1a14] border border-[#d4af77]/30 rounded-lg">
              <div className="w-2 h-2 bg-[#d4af77] rounded-full animate-ping"></div>
              <span className="text-xs font-bold text-[#d4af77]">$12.1K MC</span>
            </div>

            <button className="bg-[#d4af77] hover:bg-[#d4af77]/90 text-[#12100e] px-5 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
              Connect Phantom
            </button>

            <button 
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#1e1a14] border-b border-[#d4af77]/10 p-4"
          >
            <div className="flex flex-col gap-4">
              {['Home', 'Stats', 'Terminal', 'Buy', 'Community'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-sm font-medium text-slate-300 hover:text-[#d4af77]"
                >
                  {item === 'Terminal' ? 'Crisis Dashboard' : item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#12100e]/60 to-[#12100e]"></div>
        <div className="absolute inset-0 bg-[#1e1a14]/40 mix-blend-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2070" 
          alt="Oil Refinery" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#d4af77]/30 bg-[#d4af77]/10 mb-8"
        >
          <AlertTriangle className="text-[#d4af77] w-4 h-4" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#d4af77]">High Octane Meme Token Detected</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-[#d4af77] leading-none tracking-tighter mb-6 text-shadow-gold uppercase italic"
        >
          weak ass regular gas <br/>
          <span className="relative">
            nigga it’s BIG DIESEL
            <span className="absolute -bottom-4 left-0 w-full h-2 bg-[#d4af77]/20 blur-sm"></span>
          </span>
          <br/> round this bitch
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          The only meme that pumps harder than <span className="text-[#d4af77] font-bold">diesel prices</span> in the 2026 Iran War crisis.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() => window.open('https://pump.fun/coin/CZ5UCyNMdcyggXjeJ2dtjZo4a29hMJ1zMz57td5Dpump', '_blank')}
            className="w-full sm:w-auto px-10 py-5 bg-[#d4af77] text-[#12100e] rounded-xl font-black text-lg tracking-wide hover:shadow-[0_0_30px_rgba(212,175,119,0.4)] transition-all transform hover:scale-105"
          >
            BUY NOW ON PUMP.FUN
          </button>
          <button 
            onClick={() => window.open('https://x.com/i/communities/2030663624734462273', '_blank')}
            className="w-full sm:w-auto px-10 py-5 border-2 border-[#d4af77] text-[#d4af77] rounded-xl font-black text-lg tracking-wide hover:bg-[#d4af77]/10 transition-all transform hover:scale-105"
          >
            JOIN THE CONVOY
          </button>
        </motion.div>
      </div>

      <StatsTicker />
    </section>
  );
};

const StatsTicker = () => {
  const stats = [
    { label: 'Price', value: '$0.0000121', change: '+12.4%' },
    { label: 'Market Cap', value: '$12,142.00', change: '+5.2%' },
    { label: '24H Vol', value: '$5,402.12', change: '+8.1%' },
    { label: 'Bonding Curve', value: '77.4%', change: 'PUMPING' },
    { label: 'Holders', value: '1,204', change: '↑' },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full h-24 bg-[#1e1a14] border-t border-[#d4af77]/20 flex items-center overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {stats.map((stat, j) => (
              <div key={j} className="flex items-center gap-3">
                <span className="text-[#d4af77]/60 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                <span className="text-slate-100 font-black">{stat.value}</span>
                <span className={`${stat.change.includes('+') || stat.change === 'PUMPING' || stat.change === '↑' ? 'text-green-500' : 'text-red-500'} text-xs font-bold`}>
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TokenStats = () => {
  return (
    <section className="max-w-6xl mx-auto w-full px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-slate-100 text-5xl font-black leading-tight tracking-tighter uppercase italic">Token Stats</h1>
          <p className="text-[#d4af77]/70 text-lg font-medium flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af77] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af77]"></span>
            </span>
            Cyber Terminal Live Data
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => window.open('https://pump.fun/coin/CZ5UCyNMdcyggXjeJ2dtjZo4a29hMJ1zMz57td5Dpump', '_blank')}
            className="flex items-center gap-2 px-4 py-2 bg-[#2d2820] hover:bg-[#3d362b] border border-[#d4af77]/20 rounded-lg text-sm font-bold uppercase tracking-widest transition-all"
          >
            <Rocket className="w-4 h-4" /> Pump.fun
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2d2820] hover:bg-[#3d362b] border border-[#d4af77]/20 rounded-lg text-sm font-bold uppercase tracking-widest transition-all">
            <Waves className="w-4 h-4" /> Raydium
          </button>
          <button 
            onClick={() => window.open('https://dexscreener.com/solana/ctwjzrwkexvvc4lwjkubzeyyzq67tklknnfcyegbbo3u', '_blank')}
            className="flex items-center gap-2 px-4 py-2 bg-[#2d2820] hover:bg-[#3d362b] border border-[#d4af77]/20 rounded-lg text-sm font-bold uppercase tracking-widest transition-all"
          >
            <LineChart className="w-4 h-4" /> DexScreener
          </button>
        </div>
      </div>

      <div className="w-full bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-center gap-4 mb-10">
        <AlertTriangle className="text-red-500 w-8 h-8" />
        <p className="text-red-400 font-bold uppercase tracking-widest text-sm md:text-base">
          DYOR – Pure meme fuel. High risk. No intrinsic value.
        </p>
      </div>

      <div className="bg-[#d4af77]/5 border border-[#d4af77]/20 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div className="flex flex-col gap-1 w-full md:w-auto">
          <p className="text-[#d4af77] text-xs font-bold uppercase tracking-[0.2em]">Contract Address</p>
          <p className="text-slate-100 text-lg md:text-xl font-mono break-all font-medium">CZ5UCyNMdcyggXjeJ2dtjZo4a29hMJ1zMz57td5Dpump</p>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#d4af77] text-[#12100e] px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
          <Copy className="w-5 h-5" /> Copy CA
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { label: 'Total Supply', value: '1B', icon: Database },
          { label: 'Taxes', value: '0%', icon: Percent },
          { label: 'Holders', value: '742', icon: Users },
          { label: 'All Time High', value: '$18.1K', icon: TrendingUp, color: 'text-green-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#1e1a14] border border-[#d4af77]/20 p-6 rounded-xl flex flex-col gap-3 group hover:border-[#d4af77]/50 transition-colors">
            <div className="flex items-center justify-between text-[#d4af77]/60">
              <p className="text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className={`text-slate-100 text-4xl font-black ${stat.color || ''}`}>{stat.value}</p>
            <div className="w-full h-1 bg-[#d4af77]/10 rounded-full overflow-hidden">
              <div className={`h-full bg-[#d4af77] opacity-50`} style={{ width: i === 1 ? '0%' : i === 2 ? '33%' : '100%' }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#262119] border-2 border-[#d4af77]/30 p-8 rounded-2xl mb-20 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af77]/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-[#d4af77] text-2xl font-black uppercase tracking-widest italic">LP Status - Bonding Curve</h3>
              <p className="text-slate-400 font-medium">Progress to Raydium Listing</p>
            </div>
            <div className="text-slate-100 text-5xl font-black italic">77%</div>
          </div>
          <div className="relative w-full h-12 bg-[#12100e] border border-[#d4af77]/20 rounded-full p-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#d4af77]/60 to-[#d4af77] rounded-full relative overflow-hidden" style={{ width: '77%' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
            </div>
          </div>
          <div className="flex justify-between mt-4 text-xs font-bold uppercase tracking-widest text-[#d4af77]/60">
            <span>0% IGNITION</span>
            <span>100% COMBUSTION (DEX LISTING)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowToBuy = () => {
  const steps = [
    {
      title: 'SOL on Phantom',
      desc: 'Download Phantom wallet and load it with SOL from your favorite exchange. This is your fuel tank.',
      icon: Wallet
    },
    {
      title: 'Paste CA',
      desc: 'Go to Pump.fun or Raydium and paste the official $DIESEL contract address in the search bar.',
      icon: Copy
    },
    {
      title: 'Buy The Pump',
      desc: 'Swap SOL for $DIESEL before the bonding curve hits 100%. Don’t get left at the station.',
      icon: Zap
    }
  ];

  return (
    <section className="max-w-6xl mx-auto w-full px-6 py-20">
      <h2 className="text-slate-100 text-4xl font-black mb-12 text-center uppercase italic tracking-tight">How To Buy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="relative p-8 bg-[#1e1a14] border border-[#d4af77]/10 rounded-2xl group hover:border-[#d4af77]/40 transition-all duration-300">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#d4af77] text-[#12100e] flex items-center justify-center font-black text-2xl italic rounded-xl rotate-[-12deg] shadow-xl shadow-[#d4af77]/20">0{i+1}</div>
            <div className="mt-4 mb-6">
              <step.icon className="text-[#d4af77] w-12 h-12" />
            </div>
            <h4 className="text-slate-100 text-xl font-bold mb-4 uppercase italic">{step.title}</h4>
            <p className="text-slate-400 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Terminal = () => {
  return (
    <section className="max-w-[1600px] mx-auto p-4 md:p-6 space-y-6 pt-24">
      <div className="border-l-4 border-[#d4af77] pl-6 py-2">
        <h1 className="text-[#d4af77] text-2xl md:text-4xl font-black leading-tight tracking-tight text-shadow-gold uppercase italic">
          THE IRAN WAR FUEL CRISIS: DIESEL EDITION – MARCH 2026
        </h1>
        <p className="text-slate-400 text-sm font-bold tracking-[0.2em] mt-1">POWERED BY SOLANA | SECURE TERMINAL ACCESS GRANTED</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
        <div className="lg:col-span-3 space-y-4 flex flex-col">
          <div className="bg-[#1e1a14]/60 border border-[#d4af77]/20 rounded p-4 flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <TrendingUp className="w-10 h-10 text-yellow-500" />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Diesel Price Impact</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-white">+2.0%</span>
              <span className="text-yellow-500 text-xs font-bold mb-1 italic">SPIKING</span>
            </div>
            <div className="w-full h-16 mt-2 bg-yellow-500/10 rounded overflow-hidden relative">
              <div className="absolute inset-0 flex items-end">
                <div className="w-full h-full bg-gradient-to-t from-yellow-500/30 to-transparent" style={{ clipPath: 'polygon(0 100%, 10% 80%, 20% 85%, 30% 60%, 40% 70%, 50% 40%, 60% 50%, 70% 20%, 80% 30%, 90% 10%, 100% 5%)' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1a14]/60 border border-[#d4af77]/20 rounded p-4 flex flex-col gap-2 group border-l-4 border-l-orange-600">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Supply Disruption</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-white">+20%</span>
              <TrendingUp className="text-orange-600 w-8 h-8 animate-bounce" />
            </div>
            <p className="text-[10px] text-orange-500 font-bold uppercase">STRAIT OF HORMUZ BLOCKADE IMMINENT</p>
          </div>

          <div className="bg-[#1e1a14]/60 border border-[#d4af77]/20 rounded p-4 flex flex-col gap-2 flex-grow border-l-4 border-l-green-500">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Logistics Cost</p>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-green-500 uppercase italic">EXPLODING</span>
              <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-green-500 w-[85%] shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              </div>
              <span className="text-right text-green-400 text-xs font-bold">+85% WoW</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative bg-black/40 border border-[#d4af77]/10 rounded-xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#d4af77]/5 to-transparent pointer-events-none"></div>
          
          <div className="absolute top-4 left-4 z-10 space-y-2">
            <div className="bg-black/80 border border-red-600/50 px-3 py-1 rounded flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-[10px] text-red-500 font-black uppercase tracking-widest">Conflict Zone Alpha: Hormuz</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
            <button className="bg-[#1e1a14]/80 border border-[#d4af77]/30 p-2 rounded text-white hover:bg-[#d4af77]/20 transition-colors">
              <Plus className="w-5 h-5" />
            </button>
            <button className="bg-[#1e1a14]/80 border border-[#d4af77]/30 p-2 rounded text-white hover:bg-[#d4af77]/20 transition-colors">
              <Minus className="w-5 h-5" />
            </button>
            <button className="bg-[#d4af77] border border-[#d4af77]/30 p-2 rounded text-[#12100e] font-bold hover:brightness-110">
              <Navigation className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full h-full min-h-[400px] flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-[500px] aspect-square rounded-full border border-[#d4af77]/10 bg-slate-900 overflow-hidden shadow-[inset_0_0_50px_rgba(212,175,119,0.1)]">
              <div className="absolute inset-0 opacity-40 mix-blend-screen bg-cover bg-center flex items-center justify-center">
                <Globe className="w-full h-full text-[#d4af77]/20" />
              </div>
              
              <div className="absolute top-[45%] left-[62%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full scale-[5] animate-ping opacity-20"></div>
                  <div className="absolute inset-0 bg-red-600 rounded-full scale-[3] animate-ping opacity-40"></div>
                  <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white shadow-[0_0_20px_rgba(220,38,38,0.8)]"></div>
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                <path d="M62 45 Q 40 30 10 50" fill="none" stroke="#d4af77" strokeDasharray="2,2" strokeWidth="0.5"></path>
                <path d="M62 45 Q 80 20 90 40" fill="none" stroke="#d4af77" strokeDasharray="2,2" strokeWidth="0.5"></path>
                <path className="animate-pulse" d="M62 45 L 65 80" fill="none" stroke="#ef4444" strokeWidth="0.8"></path>
                <circle cx="62" cy="45" fill="#ef4444" r="1.5"></circle>
                <text className="uppercase" fill="#ef4444" fontSize="3" fontWeight="bold" x="64" y="44">Hormuz Blockade</text>
              </svg>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="bg-[#1e1a14]/80 border border-[#d4af77]/30 rounded-xl overflow-hidden h-full flex flex-col">
            <div className="p-4 border-b border-[#d4af77]/20 bg-[#d4af77]/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <LineChart className="w-4 h-4 text-green-500" />
                <span className="text-xs font-black tracking-widest text-white uppercase">$DIESEL Live Performance</span>
              </div>
              <span className="text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded font-bold">LIVE</span>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center gap-4">
              <div className="text-center">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Today's Performance</p>
                <h3 className="text-5xl font-black text-green-500 tracking-tight">+163.78%</h3>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500 border-b border-[#d4af77]/10 pb-1">
                  <span>Time</span>
                  <span>Price (USD)</span>
                  <span>Type</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-green-400 font-mono">
                    <span>14:32:01</span>
                    <span>$0.0429</span>
                    <span className="font-bold">BUY</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-mono">
                    <span>14:31:55</span>
                    <span>$0.0415</span>
                    <span className="font-bold">BUY</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-mono">
                    <span>14:31:40</span>
                    <span>$0.0410</span>
                    <span className="font-bold">SELL</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-mono">
                    <span>14:31:22</span>
                    <span>$0.0385</span>
                    <span className="font-bold">BUY</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <button 
                  onClick={() => window.open('https://dexscreener.com/solana/ctwjzrwkexvvc4lwjkubzeyyzq67tklknnfcyegbbo3u', '_blank')}
                  className="w-full bg-green-600/20 hover:bg-green-600/30 border border-green-500/50 text-green-500 py-3 rounded text-xs font-black tracking-[0.2em] transition-all uppercase"
                >
                  View on DexScreener
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Airline Tickets', desc: 'Fuel surcharges increasing by 45% for Q2 travel.', icon: Plane, status: '↑ HIGH', color: 'text-red-500' },
          { label: 'Truck Logistics', desc: 'Ground freight rates hit all-time highs across EU/US.', icon: Truck, status: '↑ CRITICAL', color: 'text-red-500' },
          { label: 'Pump Prices', desc: 'Diesel reaching $8.50/gal in coastal hubs.', icon: Fuel, status: '↑ RECORD', color: 'text-red-600' },
          { label: 'Recession Risk', desc: 'Energy-driven stagflation modeled for next 18 months.', icon: AlertTriangle, status: '↑ 92%', color: 'text-orange-500' },
        ].map((card, i) => (
          <div key={i} className="bg-[#1e1a14]/60 border border-[#d4af77]/20 p-4 rounded group hover:bg-[#d4af77]/5 transition-all cursor-default">
            <div className="flex justify-between items-start mb-2">
              <card.icon className="w-5 h-5 text-slate-400 group-hover:text-[#d4af77] transition-colors" />
              <span className={`${card.color} text-xs font-black`}>{card.status}</span>
            </div>
            <h4 className="text-white text-sm font-black uppercase tracking-tight">{card.label}</h4>
            <p className="text-slate-500 text-[10px] mt-1">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section className="max-w-6xl mx-auto w-full px-6 py-20">
      <div className="rounded-3xl p-1 bg-gradient-to-r from-[#d4af77]/40 via-[#d4af77] to-[#d4af77]/40 mb-20">
        <div className="bg-[#1e1a14] rounded-[calc(1.5rem-4px)] p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-100 uppercase italic tracking-tighter mb-6">Join the Convoy</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">Don't fade the highest octane meme on Solana. $DIESEL is built to burn.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => window.open('https://dexscreener.com/solana/ctwjzrwkexvvc4lwjkubzeyyzq67tklknnfcyegbbo3u', '_blank')}
              className="px-10 py-5 bg-[#d4af77] text-[#12100e] font-black uppercase italic tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all"
            >
              Buy $DIESEL Now
            </button>
            <div className="flex gap-4">
              <button 
                onClick={() => window.open('https://x.com/i/communities/2030663624734462273', '_blank')}
                className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-100 hover:bg-[#d4af77]/20 hover:border-[#d4af77]/50 transition-all"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </button>
              <button className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-100 hover:bg-[#d4af77]/20 hover:border-[#d4af77]/50 transition-all">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.24-3.55 3.93-1.66 4.75-1.95 5.28-1.96.12 0 .39.03.56.17.14.11.18.26.2.41.02.13.02.26.01.4z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Hero />
              <HowToBuy />
              <Community />
            </motion.div>
          )}

          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pt-20"
            >
              <TokenStats />
              <Community />
            </motion.div>
          )}

          {activeTab === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              <Terminal />
            </motion.div>
          )}

          {activeTab === 'buy' && (
            <motion.div
              key="buy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-20"
            >
              <HowToBuy />
              <Community />
            </motion.div>
          )}

          {activeTab === 'community' && (
            <motion.div
              key="community"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pt-20"
            >
              <Community />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-[#d4af77]/10 py-10 px-6 text-center text-[#d4af77]/40 text-sm font-bold tracking-widest uppercase">
        © 2024 DIESEL ($DIESEL) - Built on high octane
      </footer>
    </div>
  );
}
