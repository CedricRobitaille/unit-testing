import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Navigation', () => {
  render(<App />);
  const linkElement = screen.getByRole('navigation');
  expect(linkElement).toBeInTheDocument();
});
