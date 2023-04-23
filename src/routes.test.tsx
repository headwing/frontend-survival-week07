import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('when the current path is “/”', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/어서오세요, 메가의 민족입니다/);
    });
  });

  context('when the current path is “/restaurants”', () => {
    it('renders the restaurant list page', () => {
      renderRouter('/restaurants');

      screen.getByText(/메가반점/);
    });
  });
});
