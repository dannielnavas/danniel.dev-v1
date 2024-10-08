import type { IProject } from "../models/project.interface";

export const PROJECTS: IProject[] = [
  {
    name: "DevtoSpanish",
    description:
      "Plataforma que centraliza los artículos escritos en español en la plataforma https://dev.to .",
    technologies: ["VueJs", "TypeScript", "Tailwind CSS", "nestjs"],
    github: "https://github.com/dannielnavas/podcasttreknext",
    live: "https://devtospanish.danniel.dev",
    image: "/img/projects/devtospanish.webp",
    button: "Ver proyecto",
  },
  {
    name: "podcastrek",
    description:
      "Aplicación para android que permite escuchar el podcast llamado el lavadero sonico que pertenece a la comunidad de star trek Colombia.",
    technologies: ["react-native", "javascript", "Expo", "nestjs"],
    github: "https://github.com/dannielnavas/danniel.dev-v1",
    live: "https://github.com/dannielnavas/podcasttreknext/releases",
    image: "/img/projects/podcastrek.webp",
    button: "Descargar APK",
  },
  {
    name: "tripix",
    description:
      "Aplicación web para expectativa de futura app de generación de itinerario de vacaciones generado con IA.",
    technologies: [
      "VueJs",
      "TypeScript",
      "Tailwind CSS",
      "AstroJS",
      "mongoDB",
      "nestjs",
    ],
    github: "https://github.com/dannielnavas/vacations",
    live: "https://tripix.danniel.dev/",
    image: "/img/projects/vacations.webp",
    button: "Ver proyecto",
  },
  {
    name: "lk",
    description:
      "Sitio para acortar enlaces de manera personalizada y con estadísticas básicas de uso.",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "mongoDB", "nestjs"],
    github: "https://github.com/dannielnavas/danniel-link-frontend",
    live: "https://lk.danniel.dev",
    image: "/img/projects/lk.danniel.dev.webp",
    button: "Ver proyecto",
  },
];
