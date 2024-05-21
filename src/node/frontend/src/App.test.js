import { render, screen } from '@testing-library/react';
import App from './App';
import Pagina from './Pages/Pagina/Pagina.jsx'

test('renders learn react link', () => {
  render(<App />);
  render(<Pagina />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
