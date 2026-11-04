import React from 'react';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { Printer } from 'lucide-react';

export const ResumePage: React.FC = () => {
  return (
    <main id="main-content" className="py-12 sm:py-20">
      <Container width="standard">
        {/* On-Screen Print Trigger (Hidden when printing) */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-[#D8CFC2]/15 print:hidden">
          <h1 className="font-display text-2xl sm:text-3xl text-white font-normal">
            Résumé / Curriculum Vitae
          </h1>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8CFC2]/20 hover:border-[#D8CFC2] text-xs font-mono text-[#D8CFC2] hover:text-white rounded transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#EB0E31]" />
            <span>Print or save PDF</span>
          </button>
        </div>

        {/* The Clean Printable Document */}
        <article className="space-y-12 text-[#D8CFC2] print:text-neutral-900 leading-relaxed">
          {/* Header */}
          <header className="border-b border-[#D8CFC2]/20 print:border-neutral-300 pb-8 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-3xl sm:text-4xl text-white print:text-neutral-900 font-normal">
                {profile.name}
              </h1>
              <div className="font-mono text-xs text-[#FDA2AC] print:text-neutral-700">
                {profile.title}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#857A6E] print:text-neutral-600">
              <span>{profile.location}</span>
              <span>·</span>
              <a href={`mailto:${profile.contactEmail}`} className="underline hover:text-white">
                {profile.contactEmail}
              </a>
              <span>·</span>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                github.com/wafiqnawaz
              </a>
              <span>·</span>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                linkedin.com/in/wafiqnawaz
              </a>
            </div>
          </header>

          {/* Background / Focus */}
          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white print:text-neutral-900">
              Background and focus
            </h2>
            <p className="text-sm text-[#D8CFC2]/90 print:text-neutral-800 font-light leading-relaxed prose-measure-wide">
              {profile.tagline} {profile.bio}
            </p>
          </section>

          {/* Technical Competencies */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl text-white print:text-neutral-900">
              Technical competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-xs font-mono">
              <div className="space-y-1">
                <div className="font-semibold text-white print:text-neutral-900 font-sans text-sm">
                  Languages & Data Analysis
                </div>
                <div className="text-[#857A6E] print:text-neutral-700 font-light">
                  Python, Pandas, Matplotlib, NumPy, SQL, Jupyter
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-white print:text-neutral-900 font-sans text-sm">
                  Systems & Network Administration
                </div>
                <div className="text-[#857A6E] print:text-neutral-700 font-light">
                  Linux CLI, systemd, Wireshark, Nmap, NetworkManager, TCP/IP
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-white print:text-neutral-900 font-sans text-sm">
                  Machine Learning Foundations
                </div>
                <div className="text-[#857A6E] print:text-neutral-700 font-light">
                  Decision Trees, KNN, Naive Bayes, Logistic Regression, K-Means, DBSCAN
                </div>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-white print:text-neutral-900 font-sans text-sm">
                  Engineering Workflow
                </div>
                <div className="text-[#857A6E] print:text-neutral-700 font-light">
                  Git Version Control, Vercel SPA Deployment, Systems Modeling
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-8">
            <h2 className="font-display text-2xl text-white print:text-neutral-900">
              Selected projects and verified work
            </h2>

            <div className="space-y-8 divide-y divide-[#D8CFC2]/15 print:divide-neutral-200">
              {projects.map((proj) => (
                <div key={proj.slug} className="pt-6 first:pt-0 space-y-2 avoid-break">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-sans font-medium text-base text-white print:text-neutral-900">
                      {proj.title}
                      <span className="text-xs font-mono font-normal text-[#857A6E] print:text-neutral-600 ml-2">
                        — {proj.role}
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-[#FDA2AC] print:text-neutral-700">
                      {proj.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#D8CFC2]/90 print:text-neutral-800 leading-relaxed font-light prose-measure-wide">
                    {proj.summary}
                  </p>

                  <ul className="space-y-1 text-xs text-[#857A6E] print:text-neutral-700 font-light pl-3">
                    {proj.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#EB0E31]">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-xs font-mono text-[#857A6E] print:text-neutral-600 pt-1">
                    Technologies: {proj.technologies.join(', ')}
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
