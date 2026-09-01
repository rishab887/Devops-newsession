import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getnnn,ByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
