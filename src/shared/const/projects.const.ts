import Angular from "@/components/icons/Angular.astro";
import AstroBuild from "@/components/icons/AstroBuild.astro";
import Css from "@/components/icons/Css.astro";
import Expo from "@/components/icons/Expo.astro";
import Javascript from "@/components/icons/Javascript.astro";
import MongoDb from "@/components/icons/MongoDb.astro";
import Nestjs from "@/components/icons/Nestjs.astro";
import Pug from "@/components/icons/Pug.astro";
import ReactNative from "@/components/icons/ReactNative.astro";
import Scss from "@/components/icons/Scss.astro";
import Tailwind from "@/components/icons/Tailwind.astro";
import Typescript from "@/components/icons/Typescript.astro";
import Vuejs from "@/components/icons/Vuejs.astro";

const TAGS = {
  ANGULAR: {
    name: "Angular",
    class: "bg-[#DD0031] text-white",
    icon: Angular,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#000] text-white",
    icon: AstroBuild,
  },
  CSS: {
    name: "CSS",
    class: "bg-[#264de4] text-white",
    icon: Css,
  },
  EXPO: {
    name: "Expo",
    class: "bg-[#000020] text-white",
    icon: Expo,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#f7df1e] text-black",
    icon: Javascript,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#13aa52] text-white",
    icon: MongoDb,
  },
  PUG: {
    name: "Pug",
    class: "bg-[#A86454] text-white",
    icon: Pug,
  },
  REACTNATIVE: {
    name: "React Native",
    class: "bg-[#61DAFB] text-black",
    icon: ReactNative,
  },
  SCSS: {
    name: "SCSS",
    class: "bg-[#CD6799] text-white",
    icon: Scss,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178c6] text-white",
    icon: Typescript,
  },
  VUEJS: {
    name: "VueJs",
    class: "bg-[#4FC08D] text-white",
    icon: Vuejs,
  },
  NESTJS: {
    name: "NestJS",
    class: "bg-[#E0234E] text-white",
    icon: Nestjs,
  },
  TAILWIND: {
    name: "Tailwind css",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
};

export const PROJECTS = [
  {
    name: "DevtoSpanish",
    description:
      "Una plataforma que centraliza los artículos escritos en español publicados en la comunidad de desarrollo https://dev.to.",
    technologies: [TAGS.VUEJS, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.NESTJS],
    github: "https://github.com/dannielnavas/podcasttreknext",
    live: "https://devtospanish.danniel.dev",
    image: "/img/projects/devtospanish.webp",
    button: "Ver proyecto",
  },
  {
    name: "Podcastrek",
    description:
      "Aplicación para Android que permite escuchar el podcast 'El Lavadero Sónico', perteneciente a la comunidad de Star Trek Colombia.",
    technologies: [TAGS.REACTNATIVE, TAGS.JAVASCRIPT, TAGS.EXPO, TAGS.NESTJS],
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
      TAGS.VUEJS,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.ASTRO,
      TAGS.MONGODB,
      TAGS.NESTJS,
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
    technologies: [TAGS.NESTJS, TAGS.TYPESCRIPT, TAGS.CSS, TAGS.MONGODB, TAGS.PUG],
    github: "https://github.com/dannielnavas/danniel-link",
    live: "https://lk.danniel.dev",
    image: "/img/projects/lk.danniel.dev.webp",
    button: "Ver proyecto",
  },
  {
    name: "qr",
    description:
      "Generador de códigos QR personalizados con la posibilidad de descargarlos en formato PNG.",
    technologies: [
      TAGS.NESTJS,
      TAGS.TYPESCRIPT,
      TAGS.SCSS,
      TAGS.ANGULAR,
      TAGS.TYPESCRIPT,
    ],
    github: "https://github.com/dannielnavas/qr.dannie.dev.frontend",
    live: "https://qr.danniel.dev",
    image: "/img/projects/qr.danniel.dev.webp",
    button: "Ver proyecto",
  },
];
