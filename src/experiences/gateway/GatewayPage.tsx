import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const GatewayPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1') {
        setSelectedOption(1);
        setTimeout(() => navigate('/portfolio'), 180);
      } else if (e.key === '2') {
        setSelectedOption(2);
        setTimeout(() => navigate('/puzzle'), 180);
      } else if (e.key === '3') {
        setSelectedOption(3);
        setTimeout(() => navigate('/resume'), 180);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <main
      id="main-content"
      className="min-h-screen crt-screen flex flex-col items-center justify-center p-6 sm:p-12 select-none"
    >
      <div className="w-full max-w-xl bg-[#1E131A] border border-[#D8CFC2]/20 rounded p-8 sm:p-12 relative z-20 space-y-10">
        {/* Masthead */}
        <div className="space-y-2">
          <h1 className="font-display text-3xl sm:text-4xl text-white font-normal">
            Wafiq Nawaz
          </h1>
          <p className="font-body text-sm text-[#D8CFC2]/75 font-light">
            Developer and systems builder. Three ways to explore:
          </p>
        </div>

        {/* The Three Paths */}
        <div className="space-y-3 font-mono text-xs" role="menu" aria-label="Gateway Navigation">
          <Link
            to="/portfolio"
            role="menuitem"
            onMouseEnter={() => setSelectedOption(1)}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-center justify-between p-4 rounded border transition-colors ${
              selectedOption === 1
                ? 'bg-[#33212C] border-[#EB0E31] text-white'
                : 'bg-transparent border-[#D8CFC2]/15 text-[#D8CFC2] hover:border-[#D8CFC2]/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-[#EB0E31]">[ 1 ]</span>
              <span className="font-sans font-medium text-sm">Portfolio</span>
            </div>
            <div className="flex items-center gap-2 text-[#857A6E]">
              <span className="hidden sm:inline font-light">Verified work and notes</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EB0E31]" />
            </div>
          </Link>

          <Link
            to="/puzzle"
            role="menuitem"
            onMouseEnter={() => setSelectedOption(2)}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-center justify-between p-4 rounded border transition-colors ${
              selectedOption === 2
                ? 'bg-[#33212C] border-[#EB0E31] text-white'
                : 'bg-transparent border-[#D8CFC2]/15 text-[#D8CFC2] hover:border-[#D8CFC2]/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-[#EB0E31]">[ 2 ]</span>
              <span className="font-sans font-medium text-sm">Puzzle</span>
            </div>
            <div className="flex items-center gap-2 text-[#857A6E]">
              <span className="hidden sm:inline font-light">Interactive narrative</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EB0E31]" />
            </div>
          </Link>

          <Link
            to="/resume"
            role="menuitem"
            onMouseEnter={() => setSelectedOption(3)}
            onMouseLeave={() => setSelectedOption(null)}
            className={`flex items-center justify-between p-4 rounded border transition-colors ${
              selectedOption === 3
                ? 'bg-[#33212C] border-[#EB0E31] text-white'
                : 'bg-transparent border-[#D8CFC2]/15 text-[#D8CFC2] hover:border-[#D8CFC2]/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-[#EB0E31]">[ 3 ]</span>
              <span className="font-sans font-medium text-sm">Résumé</span>
            </div>
            <div className="flex items-center gap-2 text-[#857A6E]">
              <span className="hidden sm:inline font-light">Clean document format</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#EB0E31]" />
            </div>
          </Link>
        </div>

        {/* Quiet footnote */}
        <div className="pt-2 flex justify-between items-center text-xs font-mono text-[#857A6E]">
          <span>Select an option or press keys 1, 2, or 3</span>
          <span className="text-[#D8CFC2]/50">Bengaluru</span>
        </div>
      </div>
    </main>
  );
};
