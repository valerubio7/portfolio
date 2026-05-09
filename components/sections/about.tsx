"use client";

import { useTranslation } from "@/config/i18n";
import { SectionHeading } from "@/components/ui/section-heading";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

/**
 * About Section — Config file aesthetic
 *
 * Bio in readable sans-serif. Skills presented as a
 * structured config/schema — grouped by category,
 * monospace labels, like reading a package.json or
 * docker-compose.yml.
 *
 * Each skill tag shows a devicon tooltip on hover.
 */

/* ============================================
   Skill data with devicon mappings
   ============================================ */

interface Skill {
	name: string;
	/** Devicon icon name — null if no icon exists in devicon */
	icon: string | null;
	/** Devicon variant (defaults to "original") */
	variant?: string;
}

const SKILLS: Record<string, Skill[]> = {
	languages: [
		{ name: "Python", icon: "python" },
		{ name: "SQL", icon: null },
		{ name: "Bash", icon: "bash" },
	],
	backend: [
		{ name: "FastAPI", icon: "fastapi" },
		{ name: "Django", icon: "django", variant: "plain" },
		{ name: "Django REST Framework", icon: null },
		{ name: "SQLAlchemy", icon: "sqlalchemy" },
	],
	databases: [
		{ name: "PostgreSQL", icon: "postgresql" },
		{ name: "TimescaleDB", icon: null },
		{ name: "Redis", icon: "redis" },
		{ name: "SQLite", icon: "sqlite" },
	],
	mlops: [
		{ name: "MLflow", icon: null },
		{ name: "Prefect", icon: null },
		{ name: "Apache Airflow", icon: "apacheairflow" },
		{ name: "XGBoost", icon: null },
		{ name: "Scikit-learn", icon: "scikitlearn" },
		{ name: "Drift Detection", icon: null },
	],
	data: [
		{ name: "Apache Kafka", icon: "apachekafka" },
		{ name: "Event-Driven Architecture", icon: null },
		{ name: "Data Pipelines", icon: null },
	],
	devops: [
		{ name: "Docker", icon: "docker" },
		{ name: "Docker Compose", icon: "docker" },
		{ name: "AWS", icon: "amazonwebservices" },
		{ name: "Traefik", icon: "traefikproxy" },
		{ name: "CI/CD", icon: null },
	],
	observability: [
		{ name: "Prometheus", icon: "prometheus" },
		{ name: "Grafana", icon: "grafana" },
		{ name: "Monitoring", icon: null },
		{ name: "Metrics", icon: null },
	],
	testing: [
		{ name: "pytest", icon: "pytest" },
		{ name: "Unit Testing", icon: null },
		{ name: "Integration Testing", icon: null },
	],
	tools: [
		{ name: "Git", icon: "git" },
		{ name: "GitHub", icon: "github" },
		{ name: "GitHub Actions", icon: "githubactions" },
		{ name: "Linux", icon: "linux" },
		{ name: "Claude Code", icon: null },
		{ name: "OpenCode", icon: null },
	],
	principles: [
		{ name: "SOLID", icon: null },
		{ name: "DRY", icon: null },
		{ name: "KISS", icon: null },
		{ name: "YAGNI", icon: null },
		{ name: "Clean Architecture", icon: null },
		{ name: "Service Layer Pattern", icon: null },
		{ name: "Repository Pattern", icon: null },
		{ name: "Spec-Driven Development", icon: null },
		{ name: "Automated Testing", icon: null },
		{ name: "Container-First", icon: null },
		{ name: "Observability", icon: null },
	],
	academic: [
		{ name: "Systems Engineering", icon: null },
		{ name: "Calculus", icon: null },
		{ name: "Linear Algebra", icon: null },
		{ name: "Statistics", icon: null },
		{ name: "Software Architecture", icon: null },
		{ name: "Databases", icon: null },
		{ name: "Algorithms & Data Structures", icon: null },
		{ name: "Operating Systems", icon: null },
	],
};

const CATEGORY_LABELS: Record<string, Record<string, string>> = {
	languages: { es: "lenguajes", en: "languages" },
	backend: { es: "backend", en: "backend" },
	databases: { es: "bases de datos", en: "databases" },
	mlops: { es: "mlops & ml", en: "mlops & ml" },
	data: { es: "data streaming", en: "data streaming" },
	devops: { es: "devops & cloud", en: "devops & cloud" },
	observability: { es: "observabilidad", en: "observability" },
	testing: { es: "testing", en: "testing" },
	tools: { es: "herramientas", en: "tools" },
	principles: { es: "principios", en: "principles" },
	academic: { es: "formacion", en: "academic" },
};

/** Builds the devicon CDN URL for a given icon */
function getIconUrl(icon: string, variant: string = "original"): string {
	return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-${variant}.svg`;
}

/* ============================================
   SkillTag component — tag with hover tooltip
   ============================================ */

function SkillTag({ skill }: { skill: Skill }) {
	if (!skill.icon) {
		// No icon available — render plain tag without tooltip
		return (
			<span className="rounded bg-accent-subtle px-1.5 py-0.5 font-mono text-[11px] text-ink-secondary transition-colors duration-150 hover:bg-accent-muted">
				{skill.name}
			</span>
		);
	}

	return (
		<span className="group relative inline-block">
			{/* Icon — floats above on hover/focus, no container */}
			<span
				className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 opacity-0 transition-all duration-150 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
				role="tooltip"
			>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={getIconUrl(skill.icon, skill.variant)}
					alt={`${skill.name} icon`}
					width={56}
					height={56}
					loading="lazy"
					className="drop-shadow-md"
				/>
			</span>

			{/* The tag itself — button for keyboard/touch accessibility */}
			<button
				type="button"
				aria-label={skill.name}
				className="cursor-default rounded bg-accent-subtle px-1.5 py-0.5 font-mono text-[11px] text-ink-secondary transition-colors duration-150 group-hover:bg-accent-muted group-hover:text-ink focus:bg-accent-muted focus:text-ink focus:outline-none"
			>
				{skill.name}
			</button>
		</span>
	);
}

/* ============================================
   About section
   ============================================ */

export function About() {
	const { t, locale } = useTranslation();
	const sectionRef = useScrollAnimation();

	return (
		<section
			id="about"
			ref={sectionRef}
			className="flex min-h-screen flex-col justify-center px-4 pt-14 pb-24 md:px-6 md:pt-14 md:pb-32"
		>
			<div className="mx-auto max-w-4xl">
				<div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
					{/* Left — Heading + Bio */}
					<div>
						<div className="animate-on-scroll">
							<SectionHeading title={t.about.title} />
						</div>
						<div className="animate-on-scroll stagger-1">
							<p className="text-base leading-relaxed text-ink-secondary">
								{t.about.description}
							</p>
						</div>
					</div>

					{/* Right — Skills config, aligns with title text */}
					<div className="animate-on-scroll stagger-2 md:mt-8">
						<p className="mb-4 font-mono text-xs text-ink-muted">
							{t.about.techTitle.toLowerCase()}.config
						</p>
						<div className="rounded-md border border-edge bg-surface-1 p-4">
							<div className="space-y-3">
								{Object.entries(SKILLS).map(([category, items]) => (
									<div
										key={category}
										className="flex flex-wrap items-start gap-x-2 gap-y-1"
									>
										<span className="shrink-0 font-mono text-xs text-accent">
											{CATEGORY_LABELS[category][locale]}:
										</span>
										<div className="flex flex-wrap gap-1">
											{items.map((skill) => (
												<SkillTag key={skill.name} skill={skill} />
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
