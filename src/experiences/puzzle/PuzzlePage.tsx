import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Shield, ArrowRight, Lock } from 'lucide-react';

export const PuzzlePage: React.FC = () => {
  return (
    <main id="main-content" className="min-h-[80vh] flex items-center justify-center py-16">
      <Container width="standard">
        <div className="bg-[#1E131A] border border-[#EB0E31]/40 rounded-lg p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 shadow-[0_0_40px_rgba(235,14,49,0.15)]">
          <div className="inline-flex p-3 rounded-full bg-[#3E2936] text-[#E7C75A] border border-[#E7C75A]/30">
            <Shield className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="font-mono text-xs text-[#EB0E31] uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>NARRATIVE EXPERIENCE :: STAGE 0</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl text-white">
              The Red Thread Puzzle
            </h1>
            <p className="font-mono text-xs text-[#FDA2AC]">
              ISOLATED INTERACTIVE NARRATIVE PROTOCOL
            </p>
          </div>

          <p className="text-sm text-[#D8CFC2]/80 leading-relaxed font-light prose-measure mx-auto">
            The puzzle is a separate cinematic narrative experience exploring systems thinking and cryptography. In accordance with RED THREAD non-negotiable design doctrine, this experience is completely decoupled from professional evaluation.
          </p>

          <div className="p-4 rounded bg-[#33212C]/60 border border-[#D8CFC2]/15 text-xs font-mono text-[#857A6E] max-w-md mx-auto text-left space-y-1">
            <div>STATUS: <span className="text-[#E7C75A]">FOUNDATION DEPLOYED</span></div>
            <div>PHASE: <span className="text-[#D8CFC2]">AWAITING PUZZLE SCENE INTEGRATION (PHASE 2)</span></div>
            <div>GATEWAY OVERRIDE: <span className="text-white">ACCESSIBLE WITHOUT CLEARANCE</span></div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EB0E31] text-white text-xs font-mono rounded hover:bg-[#FF2B4D] transition-colors"
            >
              <span>Explore Editorial Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D8CFC2]/20 text-[#D8CFC2] hover:text-white text-xs font-mono rounded transition-colors"
            >
              <span>View Clean Résumé</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};
