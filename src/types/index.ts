export interface Project {
  title: string;
  description: string;
  image: string;
  demo: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}