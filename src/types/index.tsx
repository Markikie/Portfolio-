type Card = {
  id: string;
  titles: {
    title: string;
    endYear?: string;
  }[];
  link: string;
  descriptions: string;
  technologies: string[];
};

export type Experience = {
  startYear: string;
  endYear?: string;
  company: string;
} & Card;

export type Project = {
  thumbnail: string;
} & Card;
