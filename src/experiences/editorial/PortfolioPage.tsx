import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  return (
    <main id="main-content" className="py-12 sm:py-20 space-y-24 sm:space-y-32">
      {/* Editorial Hero */}
      <section className="relative">
        <Container width="wide">
          <div className="space-y-8 max-w-4xl">
            {/* Meta Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#FDA2AC]">
              <span className="text-[#EB0E31] font-bold">[ PORTFOLIO · 2026 ]</span>
              <span className="text-[#D8CFC2]/40">/</span>
              <span>{profile.location}</span>
              <span className="text-[#D8CFC2]/40">/</span>
              <span className="text-[#E7C75A]">Systems & Analytics</span>
            </div>

            {/* Display Statement */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white font-normal">
              I build things to <span className="italic text-[#FDA2AC]">understand systems</span>, challenge assumptions, and turn ideas into working solutions.
            </h1>

            {/* Bio Synopsis */}
            <p className="font-body text-base sm:text-lg text-[#D8CFC2]/90 leading-relaxed prose-measure font-light">
              {profile.bio}
            </p>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.contactEmail}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#EB0E31] text-white text-sm font-medium rounded hover:bg-[#FF2B4D] transition-colors"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D8CFC2]/30 text-[#D8CFC2] hover:text-white hover:border-[#D8CFC2] text-sm font-medium rounded transition-colors"
              >
                <span>View Résumé</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Work */}
      <section className="space-y-12">
        <Container width="wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D8CFC2]/15 pb-4 gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#EB0E31] mb-1">
                Evidence & Implementations
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white">
                Selected Projects
              </h2>
            </div>
            <div className="font-mono text-xs text-[#857A6E]">
              4 DOCUMENTED RECORDS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {projects.map((project, idx) => (
              <Card
                key={project.slug}
                variant="interactive"
                className="flex flex-col justify-between h-full group border-[#D8CFC2]/15 hover:border-[#EB0E31]/40"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#857A6E]">
                      0{idx + 1} // {project.category}
                    </span>
                    {project.isFlagship ? (
                      <Badge variant="crimson" size="sm">Flagship</Badge>
                    ) : (
                      <Badge variant="mono" size="sm">{project.status}</Badge>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-2xl text-white group-hover:text-[#FDA2AC] transition-colors">
                      <Link to={`/portfolio/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-mono text-[#D8CFC2]/70 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#D8CFC2]/80 leading-relaxed font-light">
                    {project.summary}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom link bar */}
                <div className="pt-6 mt-6 border-t border-[#D8CFC2]/10 flex items-center justify-between">
                  <Link
                    to={`/portfolio/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FDA2AC] group-hover:text-[#EB0E31] transition-colors"
                  >
                    <span>Read Technical Proof</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#D8CFC2]/60 hover:text-white"
                      title="Open Live Deployment"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3 text-[#EB0E31]" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Systems Discipline & Capabilities */}
      <section className="bg-[#1E131A] py-16 border-y border-[#D8CFC2]/10">
        <Container width="wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#EB0E31]">
                FOUNDATIONAL CAPABILITIES
              </span>
              <h2 className="font-display text-3xl text-white">
                Core Engineering Disciplines
              </h2>
              <p className="text-sm text-[#D8CFC2]/80 font-light leading-relaxed prose-measure">
                Technical competencies grounded in practical experimentation, Linux-first workflows, and quantitative data analysis.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.skills.map((skill, i) => (
                <div
                  key={skill}
                  className="p-5 rounded bg-[#33212C]/60 border border-[#D8CFC2]/10 flex items-start gap-4"
                >
                  <span className="font-mono text-xs text-[#EB0E31] font-semibold">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-medium text-white">{skill}</h4>
                    <p className="text-xs text-[#857A6E] mt-1 font-mono">
                      Verified practice & coursework
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Direct Invitation Callout */}
      <section>
        <Container width="wide">
          <div className="bg-gradient-to-r from-[#3E2936] to-[#1E131A] border border-[#EB0E31]/30 rounded-lg p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <div className="font-mono text-xs text-[#E7C75A] uppercase tracking-wider">
                Direct Collaboration
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white">
                Interested in technical discussion or collaboration?
              </h3>
              <p className="text-sm text-[#D8CFC2]/80 font-light">
                Reach out directly via email to discuss systems architecture, analytics projects, or development roles.
              </p>
            </div>

            <a
              href={`mailto:${profile.contactEmail}`}
              className="px-6 py-3 bg-[#EB0E31] text-white text-sm font-medium rounded hover:bg-[#FF2B4D] transition-colors whitespace-nowrap"
            >
              Contact Wafiq Nawaz
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};
