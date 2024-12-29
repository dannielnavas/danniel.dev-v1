export interface IProject {
  name: string;
  description: string;
  technologies: {
    name: string;
    class: string;
    icon: (_props: Record<string, any>) => any;
  }[];
  github: string;
  live: string;
  image: string;
  button: string;
}
