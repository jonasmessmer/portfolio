import projectData from "../content/projects.json";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  order: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  clientUrl?: string;
  cover: ProjectImage;
  summary: string;
  description: string;
  role: string;
  images: ProjectImage[];
  video?: {
    src: string;
    title: string;
    poster?: string;
  };
};

const resolveMediaPath = (path: string) => {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(path)) return path;
  return `${baseUrl}${path.replace(/^\/+/, "")}`;
};

const resolveImage = (image: ProjectImage): ProjectImage => ({
  ...image,
  src: resolveMediaPath(image.src),
});

export const projects: Project[] = projectData.projects
  .map((project) => ({
    ...project,
    cover: resolveImage(project.cover),
    images: project.images.map(resolveImage),
    ...(project.video && {
      video: {
        ...project.video,
        src: resolveMediaPath(project.video.src),
        ...(project.video.poster && {
          poster: resolveMediaPath(project.video.poster),
        }),
      },
    }),
  }))
  .sort((a, b) => a.order - b.order);
