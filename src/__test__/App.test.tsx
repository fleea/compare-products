import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { mockProducts } from '../mock/products';
const endpoint =
    'https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all';
const data = mockProducts;

const server = setupServer(
    rest.get(
        'https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all',
        (req, res, ctx) => {
            return res(ctx.json(data));
        }
    )
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders loading state when first loaded', async () => {
    render(<App />);
    expect(await screen.findByText('Loading')).toBeInTheDocument();
});

test('handles server error', async () => {
    server.use(rest.get(endpoint, (req, res, ctx) => res(ctx.status(500))));
    render(<App />);
    expect(await screen.findByText('Error')).toBeInTheDocument();
});

test('load 3 products from mock data', async () => {
    render(<App />);
    await waitFor(() => screen.getAllByRole('listitem'));
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
});
