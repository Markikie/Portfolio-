import { getAllByRole, render, screen } from '@testing-library/react';
import ExperienceCard from '.';

const mockedExperience = {
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
  descriptions: 'Do something',
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
};

describe('ExperienceCard component', () => {
  it('should have header showing correct working period when endYear is not present', () => {
    render(<ExperienceCard {...mockedExperience} />);

    const header = screen.getByRole('banner', {
      name: /employment period/i,
    });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(`${mockedExperience.startYear} — Present`);
  });

  it('should have header showing correct working period when endYear is present', () => {
    const newMock = { ...mockedExperience, endYear: '2024' };
    render(<ExperienceCard {...newMock} />);

    const header2 = screen.getByRole('banner', {
      name: /employment period/i,
    });
    expect(header2).toBeInTheDocument();
    expect(header2).toHaveTextContent(`${newMock.startYear} — ${newMock.endYear}`);
  });

  it('should have heading with correct platform "Title — company name"', () => {
    render(<ExperienceCard {...mockedExperience} />);

    const heading = screen.getByRole('heading', {
      level: 3,
      name: `${mockedExperience.titles[1].title} — ${mockedExperience.company} (opens in a new tab)`,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(`${mockedExperience.titles[1].title} — ${mockedExperience.company}`);
  });

  it('should render description', () => {
    render(<ExperienceCard {...mockedExperience} />);

    const description = screen.getByRole('paragraph', { name: 'summary' });
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(mockedExperience.descriptions);
  });

  it('should render correct technologies stacks', () => {
    render(<ExperienceCard {...mockedExperience} />);

    const techStackList = screen.getByRole('list', { name: /technologies stack used/i });
    expect(techStackList).toBeInTheDocument();

    const techStackItems = getAllByRole(techStackList, 'listitem');
    expect(techStackItems).toHaveLength(mockedExperience.technologies.length);
    for (const index in techStackItems) {
      expect(techStackItems[index]).toHaveTextContent(mockedExperience.technologies[index]);
    }
  });
});
