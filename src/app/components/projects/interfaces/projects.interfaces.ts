import { Lang } from '../../../i18n/translations';

// Textos que cambian según el idioma
export interface ProjectText {
  title: string;
  subtitle: string;
  description: string;
  challenge: string[];
  solution: string;
}

export interface Project {
  id: number;
  image: string;
  image_carrusel?: string[];
  technologies: string[];
  github: string;
  demo?: string;
  featured: boolean;
  // Un bloque de texto por idioma
  i18n: Record<Lang, ProjectText>;
}
