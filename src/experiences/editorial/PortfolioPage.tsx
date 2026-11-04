import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const flagship = projects.find((p) => p.isFlagship) || projects[0];
  const otherProjects = projects.filter((p) => !p.isFlagship);

  return (
    <main id="main-content" className="py-16 sm:py-24 space-y-32 sm:space-y-40">
      {/* Editorial Opening / Asymmetrical Hero */}
      <section>
        <Container width="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-10">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white font-normal">
                I build systems to understand how they work, challenge assumptions, and turn complex problems into reliable software.
              </h1>

              <div className="space-y-6 text-[#D8CFC2]/90 font-light text-base sm:text-lg leading-relaxed prose-measure">
                <p>
                  I am a developer and systems builder based in Bengaluru. My work spans data analytics pipelines, foundational machine learning algorithms, and hands-on Linux network administration.
                </p>
                <p>
                  I approach software with disciplined curiosity: preferring first-principles comprehension over black boxes, verifiable outcomes over vanity metrics, and thoughtful craftsmanship over generic templates.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="inline-flex items-center gap-2 text-[#EB0E31] hover:text-[#FF2B4D] transition-colors border-b border-[#EB0E31]/40 pb-0.5"
                >
                  <span>{profile.contactEmail}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/resume"
                  className="text-[#D8CFC2]/80 hover:text-white transition-colors border-b border-[#D8CFC2]/30 pb-0.5"
                >
                  View curriculum vitae
                </Link>
                <span className="text-[#857A6E]">
                  {profile.location}
                </span>
              </div>
            </div>

            {/* Right Editorial Portrait Column */}
            <div className="lg:col-span-4 lg:pt-4">
              <div className="relative group max-w-sm mx-auto lg:mx-0">
                <div className="overflow-hidden rounded border border-[#D8CFC2]/15 bg-[#1E131A]">
                  <img
                    src="/images/Wafiq.jpeg"
                    alt="Wafiq Nawaz - Developer & Systems Builder"
                    className="w-full h-auto object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="eager"
                  />
                </div>
                <div className="pt-3 flex justify-between items-baseline text-xs font-mono text-[#857A6E]">
                  <span className="text-[#D8CFC2]/70">{profile.name}</span>
                  <span>Developer · Systems Builder</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Flagship Feature: RetailMind */}
      <section className="relative">
        <Container width="wide">
          <div className="border-t border-[#D8CFC2]/20 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Context Label */}
              <div className="lg:col-span-4 space-y-4">
                <h2 className="font-display text-3xl sm:text-4xl text-white">
                  Featured Work
                </h2>
                <p className="text-sm text-[#D8CFC2]/80 font-light leading-relaxed">
                  A representative implementation demonstrating full-lifecycle development: from messy transactional data extraction and SQL modeling to visual analytical interfaces.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#FDA2AC]">
                    Role: {flagship.role}
                  </span>
                </div>
              </div>

              {/* Flagship Case Presentation */}
              <div className="lg:col-span-8 bg-[#1E131A] border border-[#D8CFC2]/15 rounded p-8 sm:p-12 space-y-8">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-3xl text-white">
                      <Link
                        to={`/portfolio/work/${flagship.slug}`}
                        className="hover:text-[#FDA2AC] transition-colors"
                      >
                        {flagship.title}
                      </Link>
                    </h3>
                    <span className="text-xs font-mono text-[#E7C75A]">
                      {flagship.status}
                    </span>
                  </div>
                  <p className="text-sm font-mono text-[#D8CFC2]/70">
                    {flagship.subtitle}
                  </p>
                </div>

                <p className="text-base text-[#D8CFC2]/90 font-light leading-relaxed prose-measure">
                  {flagship.summary}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-[#857A6E]">Key technical contributions:</div>
                  <ul className="space-y-2 text-sm text-[#D8CFC2]/90 font-light">
                    {flagship.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#EB0E31] font-mono text-xs mt-0.5">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#D8CFC2]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="text-[#857A6E]">
                    Technologies: <span className="text-[#D8CFC2]">{flagship.technologies.join(', ')}</span>
                  </div>

                  <div className="flex items-center gap-6">
                    <Link
                      to={`/portfolio/work/${flagship.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#EB0E31] hover:text-[#FF2B4D] transition-colors"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {flagship.links.live && (
                      <a
                        href={flagship.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#D8CFC2] hover:text-white transition-colors"
                      >
                        <span>Live deployment</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#EB0E31]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Technical Work & Explorations */}
      <section>
        <Container width="wide">
          <div className="border-t border-[#D8CFC2]/20 pt-12 space-y-12">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl text-white">
                Technical Implementations & Explorations
              </h2>
              <p className="text-sm text-[#D8CFC2]/80 font-light">
                Documented coursework, algorithmic experiments, and self-directed initiatives.
              </p>
            </div>

            {/* Asymmetrical Editorial List */}
            <div className="divide-y divide-[#D8CFC2]/15">
              {otherProjects.map((project) => (
                <div
                  key={project.slug}
                  className="py-10 first:pt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group"
                >
                  {/* Category & Status */}
                  <div className="lg:col-span-3 space-y-1">
                    <div className="font-mono text-xs text-[#FDA2AC]">
                      {project.category}
                    </div>
                    <div className="font-mono text-xs text-[#857A6E]">
                      {project.status}
                    </div>
                  </div>

                  {/* Title & Narrative */}
                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="font-display text-2xl text-white group-hover:text-[#FDA2AC] transition-colors">
                      <Link to={`/portfolio/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-mono text-[#D8CFC2]/70">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-[#D8CFC2]/85 font-light leading-relaxed prose-measure">
                      {project.summary}
                    </p>
                    <div className="text-xs font-mono text-[#857A6E] pt-1">
                      Stack: {project.technologies.join(', ')}
                    </div>
                  </div>

                  {/* Actions & Case Link */}
                  <div className="lg:col-span-3 lg:text-right">
                    <Link
                      to={`/portfolio/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#EB0E31] hover:text-[#FF2B4D] transition-colors"
                    >
                      <span>Inspect proof</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Engineering Disciplines (Clean Editorial Index) */}
      <section className="bg-[#1E131A] py-20 border-y border-[#D8CFC2]/10">
        <Container width="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-3">
              <h2 className="font-display text-3xl text-white">
                Core Disciplines
              </h2>
              <p className="text-sm text-[#D8CFC2]/80 font-light leading-relaxed prose-measure">
                Practical competencies built on real code, lab experimentation, and systems administration.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 font-light">
              <div className="space-y-1.5">
                <h3 className="font-sans font-medium text-white text-base">Python & Data Engineering</h3>
                <p className="text-xs text-[#D8CFC2]/75 leading-relaxed">
                  Data processing pipelines, transactional analysis, numerical modeling with Pandas, NumPy, and SQL.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans font-medium text-white text-base">Linux Systems Administration</h3>
                <p className="text-xs text-[#D8CFC2]/75 leading-relaxed">
                  Command-line fluency, systemd service management, process triage, permissions, and journalctl auditing.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans font-medium text-white text-base">Machine Learning Foundations</h3>
                <p className="text-xs text-[#D8CFC2]/75 leading-relaxed">
                  Mathematical and algorithmic implementation of supervised classifiers and spatial clustering models.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-sans font-medium text-white text-base">Network & Reconnaissance</h3>
                <p className="text-xs text-[#D8CFC2]/75 leading-relaxed">
                  Packet inspection with Wireshark and tcpdump, port auditing with Nmap, and socket state analysis.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Direct Contact Invitation */}
      <section>
        <Container width="wide">
          <div className="border-t border-[#D8CFC2]/20 pt-16 flex flex-col md:flex-row md:items-baseline justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <h2 className="font-display text-3xl sm:text-4xl text-white">
                Direct Contact
              </h2>
              <p className="text-sm text-[#D8CFC2]/85 font-light leading-relaxed prose-measure">
                Open to technical conversations, collaborative systems projects, and engineering opportunities.
              </p>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div>
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="text-base text-[#EB0E31] hover:text-[#FF2B4D] transition-colors font-medium"
                >
                  {profile.contactEmail}
                </a>
              </div>
              <div className="text-[#857A6E]">
                Response time typically within 24–48 hours
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
