import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProductComponent } from '../product';
import { mockProducts } from '../../mock/products';
import { Product } from '../../interface/product';
const data = mockProducts;

test('renders loading state when first loaded', async () => {
    render(<ProductComponent product={data.products[0] as Product} />);

    // Name is rendered in the product title
    expect(await screen.findByRole('columnheader')).toContainHTML(
        'O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer Ø=1.78; AS568- 004)'
    );
});
