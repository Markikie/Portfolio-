import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Project } from '@/types';

import ProjectCard from './ProjectCard';

const mockProject: Project = {
  id: '1',
  descriptions: 'This is a test project description.',
  link: 'https://example.com',
  technologies: ['React', 'TypeScript', 'Next.js'],
  image: 'test-image.jpg',
  titles: [{ title: 'Test Project' }],
};

describe('ProjectCard', () => {
  it('renders the project card with correct title and description', () => {
    render(<ProjectCard {...mockProject} />);

    // Check if the title is rendered
    const titleElement = screen.getByText('Test Project');
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText('This is a test project description.');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the image with correct attributes', () => {
    render(<ProjectCard {...mockProject} />);

    const imageElement = screen.getByAltText('Test Project');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('test-image.jpg'));
    expect(imageElement).toHaveAttribute('width', '200');
    expect(imageElement).toHaveAttribute('height', '48');
  });

  it('renders the link with correct href', () => {
    render(<ProjectCard {...mockProject} />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  it('renders the technologies list correctly', () => {
    render(<ProjectCard {...mockProject} />);

    mockProject.technologies.forEach((tech) => {
      const techElement = screen.getByText(tech);
      expect(techElement).toBeInTheDocument();
    });
  });
});
