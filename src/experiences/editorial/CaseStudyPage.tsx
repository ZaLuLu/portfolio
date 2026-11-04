import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { projects } from '@/content/projects';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main id="main-content" className="py-24 text-center">
        <Container width="editorial">
          <div className="space-y-4">
            <h1 className="font-display text-4xl text-white">Project not found</h1>
            <p className="text-sm text-[#D8CFC2]/70 font-light">
              The project slug <code className="text-[#FDA2AC]">/{slug}</code> does not match any documented records.
            </p>
            <div className="pt-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-[#EB0E31] hover:underline font-mono"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to portfolio</span>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main id="main-content" className="py-16 sm:py-24 space-y-16">
      {/* Article Header */}
      <section>
        <Container width="standard">
          <div className="space-y-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D8CFC2]/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#EB0E31]" />
              <span>Back to all projects</span>
            </Link>

            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl text-white font-normal">
                {project.title}
              </h1>
              <p className="font-body text-lg text-[#FDA2AC] font-light">
                {project.subtitle}
              </p>
            </div>

            {/* Publication Metadata Row */}
            <div className="py-4 border-y border-[#D8CFC2]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#857A6E]">
              <div>
                Category: <span className="text-[#D8CFC2]">{project.category}</span>
              </div>
              <div>
                Role: <span className="text-[#D8CFC2]">{project.role}</span>
              </div>
              <div>
                Status: <span className="text-[#E7C75A]">{project.status}</span>
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#EB0E31] hover:text-[#FF2B4D] transition-colors"
                >
                  <span>Open live deployment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.links.repo && project.links.repo !== 'TBD' && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D8CFC2] hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View repository</span>
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section>
        <Container width="standard">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Primary Column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-white">
                  Problem context
                </h2>
                <p className="text-base text-[#D8CFC2]/90 leading-relaxed font-light prose-measure">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-display text-2xl sm:text-3xl text-white">
                  Technical decisions and contributions
                </h2>
                <ul className="space-y-3 text-sm text-[#D8CFC2]/90 font-light prose-measure">
                  {project.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#EB0E31] font-mono text-xs mt-0.5">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(project.metricsNote || project.curatorNote) && (
                <div className="border-l-2 border-[#E7C75A] pl-4 py-1 space-y-1 text-xs font-mono text-[#D8CFC2]/80">
                  <div className="text-[#E7C75A] font-semibold">Verification note</div>
                  <p className="font-light">{project.metricsNote || project.curatorNote}</p>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#D8CFC2]/15 pt-8 lg:pt-0 lg:pl-8 space-y-6 text-xs font-mono">
              <div className="space-y-2">
                <div className="text-[#857A6E]">Technologies</div>
                <div className="text-[#D8CFC2] space-y-1 font-sans">
                  {project.technologies.join(', ')}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[#857A6E]">Summary</div>
                <p className="font-sans text-[#D8CFC2]/80 leading-relaxed font-light">
                  {project.summary}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
