import type { Translations } from "./index";

export const es: Translations = {
	nav: {
		about: "Sobre mi",
		projects: "Proyectos",
		contact: "Contacto",
	},
	hero: {
		greeting: "Hola, soy",
		name: "Valentin Rubio",
		role: "MLOps & Backend Engineer",
		description:
			"Estudiante avanzado de Ingeniería en Sistemas en UTN, enfocado en MLOps, desarrollo backend y sistemas de machine learning en producción. Construyo APIs para servir modelos, pipelines de datos, tracking de experimentos, monitoreo, detección de drift e infraestructura cloud-native.",
		cta: "Ver proyectos",
		contact: "Contactame",
	},
	about: {
		title: "Sobre mi",
		description:
			"Soy estudiante avanzado de Ingeniería en Sistemas en UTN, enfocado en construir sistemas de machine learning orientados a producción, APIs backend, pipelines de datos e infraestructura cloud-native. Mi objetivo profesional es crecer como MLOps Engineer, aunque también me interesan roles como ML Engineer, DevOps, Backend Engineer o Data Engineer.",
		techTitle: "Tecnologias",
	},
	projects: {
		title: "Proyectos",
		description: "Una seleccion de los proyectos en los que he trabajado.",
		viewProject: "Ver proyecto",
		viewCode: "Ver codigo",
	},
	contact: {
		title: "Contacto",
		description: "No dudes en escribirme.",
		infoCommand: "cat contact.info",
		composeCommand: "compose --new-message",
		openTo: "abierto a oportunidades",
		nameLabel: "--name",
		namePlaceholder: "Tu nombre",
		emailLabel: "--email",
		emailPlaceholder: "tu@email.com",
		messageLabel: "--message",
		messagePlaceholder: "Haceme llegar tu mensaje...",
		send: "send_message()",
		sending: "sending...",
		success: "Mensaje enviado correctamente",
		error: "ERR: Fallo al enviar. Intenta de nuevo.",
	},
	footer: {
		rights: "Todos los derechos reservados.",
		builtWith: "Hecho con",
	},
};
