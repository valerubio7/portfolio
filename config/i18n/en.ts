import type { Translations } from "./index";

export const en: Translations = {
	nav: {
		about: "About me",
		projects: "Projects",
		contact: "Contact",
	},
	hero: {
		greeting: "Hi, I'm",
		name: "Valentin Rubio",
		role: "MLOps & Backend Engineer",
		description:
			"Advanced Systems Engineering student at UTN, focused on MLOps, backend development, and production-ready machine learning systems. I build APIs for model serving, data pipelines, experiment tracking, monitoring, drift detection, and cloud-native infrastructure.",
		cta: "View projects",
		contact: "Get in touch",
	},
	about: {
		title: "About me",
		description:
			"I'm an advanced Systems Engineering student at UTN, focused on building production-oriented machine learning systems, backend APIs, data pipelines, and cloud-native infrastructure. My main professional goal is to grow as an MLOps Engineer, while also fitting naturally into roles such as ML Engineer, DevOps, Backend Engineer, or Data Engineer.",
		techTitle: "Technologies",
	},
	projects: {
		title: "Projects",
		description: "A selection of the projects I've worked on.",
		viewProject: "View project",
		viewCode: "View code",
	},
	contact: {
		title: "Contact",
		description: "Feel free to reach out.",
		infoCommand: "cat contact.info",
		composeCommand: "compose --new-message",
		openTo: "open to opportunities",
		nameLabel: "--name",
		namePlaceholder: "Your name",
		emailLabel: "--email",
		emailPlaceholder: "you@email.com",
		messageLabel: "--message",
		messagePlaceholder: "Send me your message....",
		send: "send_message()",
		sending: "sending...",
		success: "Message sent successfully",
		error: "ERR: Failed to send. Please try again.",
	},
	footer: {
		rights: "All rights reserved.",
		builtWith: "Built with",
	},
};
