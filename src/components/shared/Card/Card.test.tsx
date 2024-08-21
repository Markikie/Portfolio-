import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '.';

describe('Card Component', () => {
  it('renders the header correctly', () => {
    const header = 'Software Engineer';
    render(<Card header={header} content="Content" />);

    const headerElement = screen.getByText(header);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the subheaders correctly', () => {
    const subHeaders = ['Company XYZ', 'June 2020 - Present'];
    render(<Card header="Header" subHeaders={subHeaders} content="Content" />);

    subHeaders.forEach((subHeader) => {
      const subHeaderElement = screen.getByText(subHeader);
      expect(subHeaderElement).toBeInTheDocument();
    });
  });

  it('renders the content correctly', () => {
    const content = 'Developed and maintained web applications using React and Node.js.';
    render(<Card header="Header" content={content} />);

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();
  });

  it('renders the technologies correctly', () => {
    const technologies = ['React', 'Node.js', 'TypeScript'];
    render(<Card header="Header" content="Content" technologies={technologies} />);

    technologies.forEach((technology) => {
      const technologyElement = screen.getByText(technology);
      expect(technologyElement).toBeInTheDocument();
    });
  });

  it('renders the footer correctly', () => {
    const footerText = 'Footer Content';
    render(<Card header="Header" content="Content" footer={<div>{footerText}</div>} />);

    const footerElement = screen.getByText(footerText);
    expect(footerElement).toBeInTheDocument();
  });

  it('renders the left part correctly', () => {
    const leftPartText = 'Left Part';
    render(<Card header="Header" content="Content" leftPart={<div>{leftPartText}</div>} />);

    const leftPartElement = screen.getByText(leftPartText);
    expect(leftPartElement).toBeInTheDocument();
  });
});
