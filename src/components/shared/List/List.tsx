import React from 'react';

// Generic List Component
type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => React.Key;
  ariaLabel?: string;
  listStyle?: string;
  itemStyle?: string;
};

const List = <T,>({
  items,
  renderItem,
  keyExtractor,
  ariaLabel = 'list',
  itemStyle = '',
  listStyle = '',
}: ListProps<T>): React.ReactElement => {
  return (
    <ul aria-label={ariaLabel} className={`list-none${listStyle ? ' ' + listStyle : ''}`}>
      {items.map((item) => (
        <li key={keyExtractor(item)} className={`mb-12${itemStyle ? ' ' + itemStyle : ''}`}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default List;
