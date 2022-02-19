export type Project = {
  companyName: string;
  projectTitle: string;
  date: string;
  image?: string;
  description: string;
  companyLink: string;
  tech: string[];
  projectLink?: string;
};

export type CurrentProject = {
  companyName: string;
  date: string;
  position: string;
  companyLink: string;
  tech: string;
  image?: string;
};
