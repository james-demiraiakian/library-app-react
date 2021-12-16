import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// const element = screen.getByTestId('custom-element')

it('renders a welcome message when signed out', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  screen.getByText('HOME');

  expect(container).toMatchSnapshot();
});
