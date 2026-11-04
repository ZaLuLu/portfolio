import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { projects } from '@/content/projects';
import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main id="main-content" className="py-24 text-center">
        <Container width="editorial">
          <div className="space-y-4">
            <span className="font-mono text-xs text-[#EB0E31]">[ RECORD NOT FOUND ]</span>
            <h1 className="font-display text-4xl text-white">Project Case Study Missing</h1>
            <p className="text-sm text-[#D8CFC2]/70">
              The project slug <code className="text-[#FDA2AC]">/{slug}</code> does not match any verified project records.
            </p>
            <div className="pt-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-[#EB0E31] hover:underline font-mono"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Portfolio</span>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main id="main-content" className="py-12 sm:py-20 space-y-16">
      {/* Header & Back link */}
      <section>
        <Container width="standard">
          <div className="space-y-6">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#D8CFC2]/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#EB0E31]" />
              <span>Back to all projects</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Badge variant="crimson" size="sm">
                {project.category}
              </Badge>
              <Badge variant="mono" size="sm">
                Role: {project.role}
              </Badge>
              <Badge variant="outline" size="sm">
                {project.status}
              </Badge>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl text-white">
              {project.title}
            </h1>
            <p className="font-mono text-sm sm:text-base text-[#FDA2AC]">
              {project.subtitle}
            </p>

            {/* Links Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#EB0E31] text-white text-xs font-mono rounded hover:bg-[#FF2B4D] transition-colors"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.links.repo && project.links.repo !== 'TBD' && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8CFC2]/20 text-[#D8CFC2] hover:text-white hover:border-[#D8CFC2] text-xs font-mono rounded transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Narrative & Structural Details */}
      <section>
        <Container width="standard">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main proof */}
            <div className="lg:col-span-2 space-y-10">
              {/* Problem statement */}
              <div className="space-y-3">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#EB0E31]">
                  Problem & Architectural Context
                </h2>
                <p className="text-base text-[#D8CFC2]/90 leading-relaxed font-light">
                  {project.problem}
                </p>
              </div>

              {/* Verified Contributions */}
              <div className="space-y-4">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#EB0E31]">
                  Verified Implementation & Decisions
                </h2>
                <ul className="space-y-3">
                  {project.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#D8CFC2]/90 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#FDA2AC] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curator & Verification Notes */}
              {(project.metricsNote || project.curatorNote) && (
                <div className="p-4 rounded bg-[#1E131A] border border-[#D8CFC2]/15 text-xs font-mono text-[#B3A89A] flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#E7C75A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#E7C75A] font-semibold">Verification Guarantee: </span>
                    <span>{project.metricsNote || project.curatorNote}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar metadata */}
            <div className="space-y-6">
              <Card variant="surface" className="space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#FDA2AC]">
                  Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <Badge key={t} variant="mono" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#D8CFC2]/10 space-y-2 text-xs font-mono text-[#857A6E]">
                  <div>Status: <span className="text-[#D8CFC2]">{project.status}</span></div>
                  <div>Role: <span className="text-[#D8CFC2]">{project.role}</span></div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
