import type { IProject } from "../models/project.interface";

export const PROJECTS: IProject[] = [
  {
    name: "DevtoSpanish",
    description:
      "Una plataforma que centraliza los artículos escritos en español publicados en la comunidad de desarrollo https://dev.to.",
    technologies: ["VueJs", "TypeScript", "Tailwind CSS", "NestJS"],
    github: "https://github.com/dannielnavas/podcasttreknext",
    live: "https://devtospanish.danniel.dev",
    image: "/img/projects/devtospanish.webp",
    button: "Ver proyecto",
  },
  {
    name: "Podcastrek",
    description:
      "Aplicación para Android que permite escuchar el podcast 'El Lavadero Sónico', perteneciente a la comunidad de Star Trek Colombia.",
    technologies: ["React Native", "JavaScript", "Expo", "NestJS"],
    github: "https://github.com/dannielnavas/danniel.dev-v1",
    live: "https://github.com/dannielnavas/podcasttreknext/releases",
    image: "/img/projects/podcastrek.webp",
    button: "Descargar APK",
  },
  {
    name: "Tripix",
    description:
      "Aplicación web que proyecta una futura plataforma de generación de itinerarios de vacaciones optimizados mediante IA.",
    technologies: [
      "VueJs",
      "TypeScript",
      "Tailwind CSS",
      "AstroJS",
      "MongoDB",
      "NestJS",
    ],
    github: "https://github.com/dannielnavas/vacations",
    live: "https://tripix.danniel.dev/",
    image: "/img/projects/vacations.webp",
    button: "Ver proyecto",
  },
  {
    name: "lk",
    description:
      "Sitio para acortar enlaces de manera personalizada, con estadísticas básicas de uso para el análisis de enlaces.",
    technologies: ["NestJS", "TypeScript", "CSS", "MongoDB", "PUG"],
    github: "https://github.com/dannielnavas/danniel-link",
    live: "https://lk.danniel.dev",
    image: "/img/projects/lk.danniel.dev.webp",
    button: "Ver proyecto",
  },
];
