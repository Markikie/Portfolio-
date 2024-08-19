export type Experience = {
  id: string;
  startYear: string;
  endYear?: string;
  titles: {
    title: string;
    endYear?: string;
  }[];
  company: string;
  link: string;
  descriptions: string;
  technologies: string[];
};
