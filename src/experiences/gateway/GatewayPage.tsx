import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Terminal, Shield, FileText, ArrowRight } from 'lucide-react';

export const GatewayPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Handle keyboard 1, 2, 3 shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1') {
        setSelectedOption(1);
        setTimeout(() => navigate('/portfolio'), 250);
      } else if (e.key === '2') {
        setSelectedOption(2);
        setTimeout(() => navigate('/puzzle'), 250);
      } else if (e.key === '3') {
        setSelectedOption(3);
        setTimeout(() => navigate('/resume'), 250);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <main
      id="main-content"
      className="min-h-screen crt-screen flex flex-col items-center justify-center p-4 sm:p-8 select-none"
    >
      {/* Scanline CRT Ambient Container */}
      <div className="w-full max-w-2xl bg-[#1E131A] border border-[#EB0E31]/40 rounded-lg p-6 sm:p-10 shadow-[0_0_50px_rgba(235,14,49,0.12)] relative z-20">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#D8CFC2]/15 pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EB0E31] animate-pulse" />
            <span className="font-mono text-xs text-[#FDA2AC] tracking-wider uppercase">
              INTERFACE :: CRT-2026 // ONLINE
            </span>
          </div>
          <div className="font-mono text-[11px] text-[#857A6E]">
            PRESS [1], [2], [3]
          </div>
        </div>

        {/* Display Banner */}
        <div className="space-y-2 mb-8">
          <div className="font-mono text-xs text-[#857A6E] tracking-widest uppercase">
            SYSTEM IDENTITY RECORD
          </div>
          <h1 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-white crt-glow">
            WAFIQ NAWAZ
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#D8CFC2]/80">
            SYSTEMS BUILDER · TECHNICAL EXPLORER · BENGALURU
          </p>
        </div>

        {/* System Prompt */}
        <div className="font-mono text-xs text-[#FDA2AC] mb-6 flex items-center gap-2">
          <span className="text-[#EB0E31]">&gt;</span>
          <span>WELCOME, VISITOR. THREE DETERMINED PATHS AVAILABLE:</span>
        </div>

        {/* Three Accessible Destinations */}
        <div className="space-y-3 font-mono" role="menu" aria-label="Gateway Navigation">
          {/* 01: Portfolio */}
          <Link
            to="/portfolio"
            role="menuitem"
            onMouseEnter={() => setSelectedOption(1)}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-center justify-between p-4 rounded border transition-all duration-150 ${
              selectedOption === 1
                ? 'bg-[#3E2936] border-[#EB0E31] text-white shadow-[0_0_15px_rgba(235,14,49,0.3)]'
                : 'bg-[#1E131A] border-[#D8CFC2]/20 text-[#D8CFC2] hover:border-[#FDA2AC]/60'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#EB0E31] font-bold">[ 01 ]</span>
              <Terminal className="w-4 h-4 text-[#FDA2AC]" />
              <span className="text-sm tracking-wide font-medium">ENTER THE PORTFOLIO</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#857A6E]">
              <span className="hidden sm:inline">Verified Projects & Notes</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EB0E31]" />
            </div>
          </Link>

          {/* 02: Puzzle */}
          <Link
            to="/puzzle"
            role="menuitem"
            onMouseEnter={() => setSelectedOption(2)}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-center justify-between p-4 rounded border transition-all duration-150 ${
              selectedOption === 2
                ? 'bg-[#3E2936] border-[#EB0E31] text-white shadow-[0_0_15px_rgba(235,14,49,0.3)]'
                : 'bg-[#1E131A] border-[#D8CFC2]/20 text-[#D8CFC2] hover:border-[#FDA2AC]/60'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#EB0E31] font-bold">[ 02 ]</span>
              <Shield className="w-4 h-4 text-[#E7C75A]" />
              <span className="text-sm tracking-wide font-medium">ENTER THE PUZZLE</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#857A6E]">
              <span className="hidden sm:inline">Cinematic Challenge</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EB0E31]" />
            </div>
          </Link>

          {/* 03: Resume */}
          <Link
            to="/resume"
            role="menuitem"
            onMouseEnter={() => setSelectedOption(3)}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-center justify-between p-4 rounded border transition-all duration-150 ${
              selectedOption === 3
                ? 'bg-[#3E2936] border-[#EB0E31] text-white shadow-[0_0_15px_rgba(235,14,49,0.3)]'
                : 'bg-[#1E131A] border-[#D8CFC2]/20 text-[#D8CFC2] hover:border-[#FDA2AC]/60'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#EB0E31] font-bold">[ 03 ]</span>
              <FileText className="w-4 h-4 text-[#D8CFC2]" />
              <span className="text-sm tracking-wide font-medium">VIEW / PRINT RÉSUMÉ</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#857A6E]">
              <span className="hidden sm:inline">Clean Document Format</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EB0E31]" />
            </div>
          </Link>
        </div>

        {/* Footer command prompt */}
        <div className="mt-8 pt-4 border-t border-[#D8CFC2]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#857A6E] gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[#EB0E31] animate-ping font-bold">_</span>
            <span>AWAITING INPUT... SELECT OPTION OR CLICK TO ADVANCE</span>
          </div>
          <div className="text-[11px] text-[#B3A89A]/60">
            SECURE TERMINAL // V1.0
          </div>
        </div>
      </div>
    </main>
  );
};
