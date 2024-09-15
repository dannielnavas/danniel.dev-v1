import type { IProject } from "../models/project.interface";

export const PROJECTS: IProject[] = [
  {
    name: "DevtoSpanish",
    description:
      "Plataforma que centraliza los artículos escritos en español en la plataforma https://dev.to .",
    technologies: ["VueJs", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/dannielnavas/podcasttreknext",
    live: "https://devtospanish.danniel.dev",
    image: "/img/projects/devtospanish.jpeg",
    button: "Ver proyecto",
  },
  {
    name: "podcastrek",
    description:
      "Aplicación para android que permite escuchar el podcast llamado el lavadero sonico que pertenece a la comunidad de star trek Colombia.",
    technologies: ["react-native", "javascript", "Expo"],
    github: "https://github.com/dannielnavas/danniel.dev-v1",
    live: "https://drive.google.com/file/d/1VHY0oBA28S36chXDurKSct_nqFAnUHzR/view?usp=drive_link",
    image: "/img/projects/podcastrek.jpeg",
    button: "Descargar APK",
  },
  {
    name: "tripix",
    description:
      "Aplicación web para expectativa de futura app de generación de itinerario de vacaciones generado con IA.",
    technologies: ["VueJs", "TypeScript", "Tailwind CSS", "AstroJS"],
    github: "https://github.com/dannielnavas/vacations",
    live: "https://tripix.danniel.dev/",
    image: "/img/projects/vacations.jpeg",
    button: "Ver proyecto",
  },
];