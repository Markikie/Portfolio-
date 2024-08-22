import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Project } from '@/types';

import ProjectList from './ProjectList';

const mockProjects: Project[] = [
  {
    id: '1',
    descriptions: 'Description for project 1',
    link: 'https://example.com/project1',
    technologies: ['React', 'TypeScript'],
    image: 'image1.jpg',
    titles: [{ title: 'Project 1' }],
  },
  {
    id: '2',
    descriptions: 'Description for project 2',
    link: 'https://example.com/project2',
    technologies: ['Next.js', 'Tailwind'],
    image: 'image2.jpg',
    titles: [{ title: 'Project 2' }],
  },
];

describe('ProjectList', () => {
  it('renders a list of projects', () => {
    render(<ProjectList projectList={mockProjects} />);

    // Check if the list is rendered
    const listElement = screen.getByRole('list', { name: /list of projects/i });
    expect(listElement).toBeInTheDocument();

    // Check if the correct number of first-level projects are rendered
    const firstLevelListItems = listElement.querySelectorAll(':scope > li');
    expect(firstLevelListItems).toHaveLength(mockProjects.length);

    // Check if the project titles are rendered
    mockProjects.forEach((project) => {
      const titleElement = screen.getByText(project.titles[0].title);
      expect(titleElement).toBeInTheDocument();
    });
  });

  it('renders each ProjectCard with correct props', () => {
    render(<ProjectList projectList={mockProjects} />);

    mockProjects.forEach((project) => {
      const titleElement = screen.getByText(project.titles[0].title);
      expect(titleElement).toBeInTheDocument();

      const descriptionElement = screen.getByText(project.descriptions);
      expect(descriptionElement).toBeInTheDocument();

      const linkElement = screen.getByRole('link', {
        name: `${project.titles[0].title} (opens in a new tab)`,
      });
      expect(linkElement).toHaveAttribute('href', project.link);

      const imageElement = screen.getByAltText(project.titles[0].title);
      expect(imageElement).toHaveAttribute('src', expect.stringContaining(project.image));
    });
  });
});
