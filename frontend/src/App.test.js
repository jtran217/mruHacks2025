import { render, screen } from '@testing-library/react';
import GameCode from './GameCode';

test('renders learn react link', () => {
  render(<GameCode />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
