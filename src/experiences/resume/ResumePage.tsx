import React from 'react';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { Printer, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export const ResumePage: React.FC = () => {
  return (
    <main id="main-content" className="py-12 sm:py-16">
      <Container width="standard">
        {/* On-Screen Action Bar (Hidden when printing) */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#D8CFC2]/15 print:hidden">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#EB0E31] font-semibold tracking-wider uppercase">
              PLAIN DOCUMENT FORMAT
            </span>
            <h1 className="font-display text-2xl sm:text-3xl text-white">
              Curriculum Vitae / Professional Profile
            </h1>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#EB0E31] text-white text-xs font-mono rounded hover:bg-[#FF2B4D] transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Printable Document Sheet */}
        <article className="bg-[#1E131A] print:bg-white border border-[#D8CFC2]/15 print:border-none rounded-lg print:rounded-none p-6 sm:p-12 print:p-0 space-y-10 text-[#D8CFC2] print:text-neutral-900 shadow-sm">
          {/* Header */}
          <header className="border-b border-[#D8CFC2]/20 print:border-neutral-300 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-3xl sm:text-4xl text-white print:text-neutral-900 font-bold">
                {profile.name}
              </h1>
              <div className="font-mono text-xs text-[#FDA2AC] print:text-neutral-700">
                {profile.title}
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#B3A89A] print:text-neutral-600">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#EB0E31] print:text-neutral-800" />
                <span>{profile.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#EB0E31] print:text-neutral-800" />
                <a href={`mailto:${profile.contactEmail}`} className="underline hover:text-white">
                  {profile.contactEmail}
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-[#EB0E31] print:text-neutral-800" />
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  github.com/wafiqnawaz
                </a>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#EB0E31] print:text-neutral-800" />
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  linkedin.com/in/wafiqnawaz
                </a>
              </span>
            </div>
          </header>

          {/* Professional Statement */}
          <section className="space-y-2">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#EB0E31] print:text-neutral-900 font-bold">
              01 // Professional Summary
            </h2>
            <p className="text-sm text-[#D8CFC2]/90 print:text-neutral-800 font-light leading-relaxed prose-measure-wide">
              {profile.tagline} {profile.bio}
            </p>
          </section>

          {/* Technical Competencies */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#EB0E31] print:text-neutral-900 font-bold">
              02 // Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-[#33212C]/60 print:bg-neutral-50 border border-[#D8CFC2]/15 print:border-neutral-200">
                <div className="font-semibold text-white print:text-neutral-900 mb-1">
                  Languages & Analytics
                </div>
                <div className="text-[#B3A89A] print:text-neutral-700">
                  Python, Pandas, Matplotlib, NumPy, SQL, Jupyter
                </div>
              </div>

              <div className="p-3 rounded bg-[#33212C]/60 print:bg-neutral-50 border border-[#D8CFC2]/15 print:border-neutral-200">
                <div className="font-semibold text-white print:text-neutral-900 mb-1">
                  Systems & Reconnaissance
                </div>
                <div className="text-[#B3A89A] print:text-neutral-700">
                  Linux CLI, systemd, Wireshark, Nmap, NetworkManager, TCP/IP
                </div>
              </div>

              <div className="p-3 rounded bg-[#33212C]/60 print:bg-neutral-50 border border-[#D8CFC2]/15 print:border-neutral-200">
                <div className="font-semibold text-white print:text-neutral-900 mb-1">
                  Machine Learning Foundations
                </div>
                <div className="text-[#B3A89A] print:text-neutral-700">
                  Supervised & Unsupervised (Decision Trees, KNN, Naive Bayes, K-Means, DBSCAN)
                </div>
              </div>

              <div className="p-3 rounded bg-[#33212C]/60 print:bg-neutral-50 border border-[#D8CFC2]/15 print:border-neutral-200">
                <div className="font-semibold text-white print:text-neutral-900 mb-1">
                  Architecture & Engineering
                </div>
                <div className="text-[#B3A89A] print:text-neutral-700">
                  Git Version Control, Vercel Deployment, Systems Design
                </div>
              </div>
            </div>
          </section>

          {/* Featured Implementation Records */}
          <section className="space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#EB0E31] print:text-neutral-900 font-bold">
              03 // Selected Projects & Evidence
            </h2>

            <div className="space-y-6">
              {projects.map((proj) => (
                <div
                  key={proj.slug}
                  className="space-y-2 border-l-2 border-[#EB0E31]/40 print:border-neutral-400 pl-4 avoid-break"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-sans font-semibold text-base text-white print:text-neutral-900">
                      {proj.title}
                      <span className="text-xs font-mono font-normal text-[#857A6E] print:text-neutral-600 ml-2">
                        [{proj.role}]
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-[#FDA2AC] print:text-neutral-700">
                      {proj.category}
                    </span>
                  </div>

                  <p className="text-xs text-[#D8CFC2]/90 print:text-neutral-800 leading-relaxed font-light">
                    {proj.summary}
                  </p>

                  <ul className="list-disc list-inside text-xs text-[#B3A89A] print:text-neutral-700 space-y-1">
                    {proj.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono text-[#857A6E] print:text-neutral-600">
                    <span>Stack:</span>
                    {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </Container>
    </main>
  );
};
