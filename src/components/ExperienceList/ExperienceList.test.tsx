import { getAllByRole, render, screen } from '@testing-library/react';
import ExperienceList from '.';

const mockExperienceList = [
  {
    id: '1',
    startYear: '2021',
    titles: [
      {
        title: 'Software Engineer I',
        endYear: '2023',
      },
      {
        title: 'Software Engineer II',
      },
    ],
    company: 'Mediafly, Inc',
    link: 'https://www.mediafly.com',
    descriptions: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham..`,
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'Python',
      'Flask',
      'Postgres',
      'AWS',
    ],
  },
  {
    id: '2',
    startYear: '2021',
    titles: [
      {
        title: 'Software Engineer I',
        endYear: '2023',
      },
      {
        title: 'Software Engineer II',
      },
    ],
    company: 'Mediafly, Inc',
    link: 'https://www.mediafly.com',
    descriptions: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham..`,
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'Python',
      'Flask',
      'Postgres',
      'AWS',
    ],
  },
  {
    id: '3',
    startYear: '2021',
    titles: [
      {
        title: 'Software Engineer I',
        endYear: '2023',
      },
      {
        title: 'Software Engineer II',
      },
    ],
    company: 'Mediafly, Inc',
    link: 'https://www.mediafly.com',
    descriptions: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham..`,
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node',
      'Express',
      'Python',
      'Flask',
      'Postgres',
      'AWS',
    ],
  },
];

describe('ExperienceList Component', () => {
  it('should render list correctly (number)', () => {
    render(<ExperienceList experienceList={mockExperienceList} />);

    const expList = screen.getByRole('list', { name: /working experiences/i });
    expect(expList).toBeInTheDocument();
    const firstLevelLiElements = screen
      .getAllByRole('listitem', {
        name: '',
        hidden: true,
      })
      .filter((li) => li.parentElement === expList);

    expect(firstLevelLiElements).toHaveLength(mockExperienceList.length);
  });
});
