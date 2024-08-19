import { render, screen } from '@testing-library/react';
import Pill from '.';

describe('Pill Component', () => {
  it('should render title', () => {
    render(<Pill title="title" />);

    expect(screen.getByText(/title/)).toBeInTheDocument();
  });
});
