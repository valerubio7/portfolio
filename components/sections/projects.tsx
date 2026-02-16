"use client";

import { useTranslation } from "@/config/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/**
 * Projects Section — Grid of terminal-styled cards
 *
 * Each project renders as a code-block-like card with
 * terminal window dots header. Grid responsive:
 * 1 column mobile, 2 columns tablet, 3 columns desktop.
 */
export function Projects() {
  const { t, locale } = useTranslation();
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="px-4 pt-10 pb-20 md:px-6 md:pt-16 md:pb-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll">
          <SectionHeading
            title={t.projects.title}
            description={t.projects.description}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`animate-on-scroll stagger-${index + 1}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description[locale]}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                codeUrl={project.codeUrl}
                viewProjectLabel={t.projects.viewProject}
                viewCodeLabel={t.projects.viewCode}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
