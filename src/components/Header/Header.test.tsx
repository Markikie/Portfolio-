import { getAllByRole, getByRole, logRoles, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  it('should render Cheer Chokwittaya as a header 1', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1, name: 'Cheer Chokwittaya' })).toBeInTheDocument();
  });
  it('should render Full-Stack Engineer as a header 2', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 2, name: 'Full Stack Engineer' })).toBeInTheDocument();
  });
  it('should render summary as a paragraph', () => {
    render(<Header />);

    const summary = screen.getByRole('paragraph');
    expect(summary).toHaveTextContent(
      `I'm a versatile full-stack engineer skilled in building and optimizing scalable web applications using modern front-end and back-end technologies`
    );
  });
  it('should render list of social media', () => {
    render(<Header />);

    const socialMedialList = screen.getByRole('list', { name: 'Social Media' });
    expect(socialMedialList).toBeInTheDocument();

    const socialMedialItems = getAllByRole(socialMedialList, 'listitem');
    expect(socialMedialItems).toHaveLength(3);

    const socialMediaList = [
      { label: 'GitHub', url: 'https://github.com/CHNUTT' },
      {
        label: 'BitBucket',
        url: 'https://bitbucket.org/cheer-projects/workspace/projects/PROJ',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/cheer-chokwittaya/',
      },
    ];

    for (const index in socialMedialItems) {
      const link = getByRole(socialMedialItems[index], 'link');
      expect(link).toHaveAccessibleName(socialMediaList[index].label);
      expect(link).toHaveProperty('href', socialMediaList[index].url);
      expect(link).toHaveProperty('target', '_blank');
    }
  });
});
