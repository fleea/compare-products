import React from 'react';
import { Product } from '../interface/product';
import { SelectionArrayProps, WithAttributes } from '../interface/value';
import { ProductComponent } from './product';
import { ProductsAttributesComponent } from './product_attributes';
import { ProductsFilterComponent } from './product_filter';

/**
 * REGARDING DYNAMIC ATTRIBUTES
 * 1. The easiest method is just to hardcode the attributes and manually sorting it.
 *    In case the attributes does not change a lot, this will be the most acceptable way.
 * 2. We can also merge all attributes in the data.
 *    This will be the most acceptable way if:
 *    a. The components will be reused by different kinds of products
 *    b. The attributes change a lot
 *    c. The number of compared products are limited, because the dynamic functions will be called every render/data loading
 */

interface ProductsComponentProps
    extends SelectionArrayProps<Product>,
        WithAttributes {}

export const ProductsComponent = ({
    full,
    selected,
    onChange,
    attributes,
}: ProductsComponentProps) => {
    const showSelected = ({ Artikelnummer }: Product) =>
        selected.includes(Artikelnummer);
    return (
        <div className="products">
            <div className="product products__row-header">
                <div className="product__header">
                    <h2 className="title">Je Selectie</h2>
                    <ProductsFilterComponent
                        full={full}
                        selected={selected}
                        onChange={onChange}
                    />
                </div>
                <ProductsAttributesComponent attributes={attributes} />
            </div>
            {(full || [])
                .filter(showSelected)
                .map((product: Product, index: number) => (
                    <ProductComponent
                        key={index}
                        product={product}
                        attributes={attributes}
                    />
                ))}
        </div>
    );
};
