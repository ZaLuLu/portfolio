import React from 'react';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer border-t border-[#D8CFC2]/10 bg-[#1E131A] py-16 mt-32 text-xs font-mono text-[#857A6E] print:hidden">
      <Container width="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity & Colophon */}
          <div className="md:col-span-5 space-y-2">
            <div className="text-[#D8CFC2] font-display text-lg text-white">
              {profile.name}
            </div>
            <p className="text-xs text-[#857A6E] font-light font-sans max-w-sm leading-relaxed">
              {profile.tagline}
            </p>
            <div className="text-[11px] text-[#857A6E] tabular-nums pt-1">
              {profile.location} · {profile.timeZone}
            </div>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4 space-y-2 font-mono">
            <div className="text-[#D8CFC2]/70 text-xs font-medium">
              Contact
            </div>
            <div>
              <a
                href={`mailto:${profile.contactEmail}`}
                className="text-[#FDA2AC] hover:text-[#EB0E31] transition-colors"
              >
                {profile.contactEmail}
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D8CFC2]/70 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#EB0E31]" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D8CFC2]/70 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#EB0E31]" />
              </a>
            </div>
          </div>

          {/* Colophon Specification */}
          <div className="md:col-span-3 space-y-1 text-left md:text-right text-[11px] text-[#857A6E]">
            <div>RED THREAD Digital Publication</div>
            <div>React 19 · Vite · TypeScript</div>
            <div className="text-[#D8CFC2]/40 pt-1">
              © {new Date().getFullYear()} Wafiq Nawaz
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
