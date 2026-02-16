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
		role: "Backend Developer",
		description:
			"I develop systems and applications with a strong focus on architecture, performance, and maintainability. I combine solid mathematical foundations with engineering best practices to build clear, scalable, and well-designed solutions.",
		cta: "View projects",
		contact: "Get in touch",
	},
	about: {
		title: "About me",
		description:
			"I'm a developer with experience building full-stack web applications. I'm passionate about learning new technologies and building solutions that positively impact users.",
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
