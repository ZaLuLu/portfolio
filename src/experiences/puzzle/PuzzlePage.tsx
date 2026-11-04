import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

export const PuzzlePage: React.FC = () => {
  return (
    <main id="main-content" className="min-h-[75vh] flex items-center justify-center py-16 sm:py-24">
      <Container width="editorial">
        <div className="space-y-8 text-center sm:text-left">
          <h1 className="font-display text-4xl sm:text-6xl text-white font-normal">
            The Red Thread Puzzle
          </h1>

          <div className="space-y-4 text-base text-[#D8CFC2]/90 font-light leading-relaxed prose-measure">
            <p>
              An interactive narrative challenge exploring systems thinking, cryptography, and logic.
            </p>
            <p className="text-sm text-[#D8CFC2]/75">
              In accordance with the RED THREAD design doctrine, this interactive puzzle is completely decoupled from professional evaluation. The portfolio and résumé remain directly accessible at all times without solving any challenges.
            </p>
            <p className="text-xs font-mono text-[#857A6E]">
              The puzzle mechanics are scheduled for integration in Phase 2.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 font-mono text-xs">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-[#EB0E31] hover:text-[#FF2B4D] transition-colors border-b border-[#EB0E31]/40 pb-0.5"
            >
              <span>Explore portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/resume"
              className="text-[#D8CFC2]/70 hover:text-white transition-colors border-b border-[#D8CFC2]/20 pb-0.5"
            >
              View résumé
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};
