import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import List from '.';

describe('List Component', () => {
  it('renders all items correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    render(<List items={items} renderItem={(item) => <span>{item}</span>} keyExtractor={(item) => item} />);

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('applies custom styles correctly', () => {
    const items = ['Item 1', 'Item 2'];
    const listStyle = 'custom-list-style';
    const itemStyle = 'custom-item-style';

    render(
      <List
        items={items}
        renderItem={(item) => <span>{item}</span>}
        keyExtractor={(item) => item}
        listStyle={listStyle}
        itemStyle={itemStyle}
      />
    );

    const listElement = screen.getByRole('list');
    expect(listElement).toHaveClass(listStyle);

    const listItemElements = screen.getAllByRole('listitem');
    listItemElements.forEach((item) => {
      expect(item).toHaveClass(`mb-12 ${itemStyle}`);
    });
  });

  it('applies aria-label correctly', () => {
    const items = ['Item 1'];
    const ariaLabel = 'custom-aria-label';

    render(
      <List
        items={items}
        renderItem={(item) => <span>{item}</span>}
        keyExtractor={(item) => item}
        ariaLabel={ariaLabel}
      />
    );

    const listElement = screen.getByLabelText(ariaLabel);
    expect(listElement).toBeInTheDocument();
  });
});
