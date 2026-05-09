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
			es: "Plataforma web universitaria que centraliza la gestión académica: administra facultades, carreras y materias; gestiona inscripciones, carga de calificaciones y manejo de roles (admin, profesor, estudiante). Arquitectura basada en capas con service layer pattern, testing automatizado y despliegue containerizado.",
			en: "A university web platform that centralizes academic management: manages faculties, degree programs, and courses; handles enrollments, grade submission, and role-based access (admin, professor, student). Layered architecture with service layer pattern, automated testing, and containerized deployment.",
		},
		technologies: [
			"Python",
			"Django",
			"PostgreSQL",
			"Docker",
			"pytest",
			"Railway",
		],
		projectUrl:
			"https://academicmanagementsystem-production-5072.up.railway.app/",
		codeUrl: "https://github.com/valerubio7/academic-management-system",
	},
	{
		id: "project-2",
		title: "PredMaint ML Platform",
		description: {
			es: "Plataforma MLOps de mantenimiento predictivo industrial. Integra entrenamiento de modelos XGBoost, API para servir predicciones, monitoreo con Prometheus y Grafana, detección de drift, orquestación con Prefect, tracking con MLflow y despliegue en AWS ECS. Todo containerizado con Docker.",
			en: "Production-oriented MLOps platform for industrial predictive maintenance. Integrates XGBoost model training, FastAPI for model serving, Prometheus and Grafana monitoring, drift detection, Prefect orchestration, MLflow tracking, and AWS ECS deployment. Fully Dockerized.",
		},
		technologies: [
			"Python",
			"FastAPI",
			"XGBoost",
			"Prefect",
			"MLflow",
			"Docker",
			"AWS ECS",
			"Prometheus",
			"Grafana",
			"pytest",
		],
		codeUrl: "https://github.com/valerubio7/predmaint-ml-platform",
	},
	{
		id: "project-3",
		title: "Fraud Detection System",
		description: {
			es: "Sistema de detección de fraude en tiempo real con arquitectura orientada a eventos. Procesa streams con Kafka, realiza feature engineering, tracking de experimentos con MLflow, detección de drift con Evidently, caché con Redis, almacenamiento temporal con TimescaleDB y orquestación con Airflow. Monitoreo completo con Prometheus y Grafana.",
			en: "Real-time fraud detection platform with event-driven architecture. Processes streaming data via Kafka, performs feature engineering, tracks experiments with MLflow, detects drift with Evidently, caches with Redis, stores time-series data in TimescaleDB, and orchestrates with Airflow. Full observability with Prometheus and Grafana.",
		},
		technologies: [
			"Python",
			"Kafka",
			"TimescaleDB",
			"Redis",
			"XGBoost",
			"MLflow",
			"Evidently",
			"Airflow",
			"Docker",
			"Prometheus",
			"Grafana",
		],
		codeUrl: "https://github.com/valerubio7/fraud-detection-system",
	},
];
