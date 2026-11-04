import React from 'react';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer border-t border-[#D8CFC2]/10 bg-[#1E131A] py-12 mt-20 text-xs font-mono text-[#B3A89A] print:hidden">
      <Container width="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Identity & Location */}
          <div className="space-y-2">
            <div className="text-[#D8CFC2] font-semibold text-sm font-sans">
              {profile.name}
            </div>
            <div className="text-[#B3A89A]/80">
              {profile.title}
            </div>
            <div className="text-[#857A6E] tabular-nums">
              {profile.location} · {profile.timeZone}
            </div>
          </div>

          {/* Direct channels */}
          <div className="space-y-2">
            <div className="text-[#D8CFC2] font-semibold tracking-wider uppercase text-[11px]">
              Direct Communication
            </div>
            <div>
              <a
                href={`mailto:${profile.contactEmail}`}
                className="inline-flex items-center gap-1.5 text-[#FDA2AC] hover:text-[#EB0E31] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.contactEmail}</span>
              </a>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#D8CFC2]/70 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#EB0E31]" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#D8CFC2]/70 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#EB0E31]" />
              </a>
            </div>
          </div>

          {/* Architectural Notes */}
          <div className="space-y-1 text-right md:text-right">
            <div className="text-[#857A6E]">
              RED THREAD Engine · React 19 + Vite
            </div>
            <div className="text-[#857A6E]">
              Designed with Japanese contemporary editorial discipline
            </div>
            <div className="text-[#EB0E31] font-mono text-[11px] pt-1">
              Zero invented claims. Verified proof.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
