import type { Locale } from "@/config/i18n";

export interface Project {
	id: string;
	title: string;
	description: Record<Locale, string>;
	technologies: string[];
	imageUrl?: string;
	projectUrl?: string;
	codeUrl?: string;
}

/**
 * Project data.
 * Edit this array to add/remove/update projects.
 * Descriptions are bilingual (es/en).
 */
export const projects: Project[] = [
	{
		id: "project-1",
		title: "Academic Management System",
		description: {
			es: "Es una plataforma web para universidades que centraliza la gestión académica: administra facultades, carreras y materias; gestiona inscripciones, permite la carga de calificaciones, manejo de roles (admin, profesor y estudiante). Unifica los procesos del ciclo estudiantil en un solo sistema, reduciendo tareas manuales y mejorando la trazabilidad.",
			en: "It is a web platform for universities that centralizes academic management: it administers faculties, degree programs, and courses; manages enrollments; enables grade submission; and supports role management (admin, professor, and student). It unifies student lifecycle processes into a single system, reducing manual work and improving traceability.",
		},
		technologies: [
			"Python",
			"Django",
			"PostgreSQL",
			"SQLite",
			"Docker",
			"MTV architecture + services layer",
		],
		projectUrl:
			"https://academicmanagementsystem-production-5072.up.railway.app/",
		codeUrl: "https://github.com/valerubio7/academic-management-system",
	},
	{
		id: "project-2",
		title: "Project 2",
		description: {
			es: "Descripcion",
			en: "Description",
		},
		technologies: ["1", "2", "3"],
		projectUrl: "https://example.com",
		codeUrl: "https://github.com/username/project",
	},
	{
		id: "project-3",
		title: "Project 3",
		description: {
			es: "Descripcion",
			en: "Description",
		},
		technologies: ["1", "2", "3"],
		projectUrl: "https://example.com",
		codeUrl: "https://github.com/username/project",
	},
];
