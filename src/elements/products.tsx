import React from 'react';
import { Product } from '../interface/product';
import { SelectionArrayProps } from '../interface/value';
import { ProductComponent } from './product';
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

export const ProductsComponent = ({
    full,
    selected,
    onChange,
}: SelectionArrayProps<Product>) => {
    const showSelected = ({ Artikelnummer }: Product) =>
        selected.includes(Artikelnummer);
    return (
        <div className="products">
            <div className="product">
                <div className="product__header">
                    <h2 className="title">Je Selectie</h2>
                    <ProductsFilterComponent
                        full={full}
                        selected={selected}
                        onChange={onChange}
                    />
                </div>
                <div className="product__attributes">
                    <div>Keurmerk</div>
                    <div>Artikelnummer</div>
                    <div>BUP Conversion</div>
                    <div>BUP UOM</div>
                    <div>BUP Value</div>
                    <div>Channel</div>
                    <div>Display</div>
                    <div>Gross Price</div>
                    <div>Hardheid</div>
                    <div>Inwendige Diameter</div>
                    <div>Kleur</div>
                    <div>List Price</div>
                    <div>Maat Volgens AS568</div>
                    <div>Manufacturer Name</div>
                    <div>Materiaal</div>
                    <div>Min Quantity</div>
                    <div>Sale Price</div>
                    <div>SKU</div>
                    <div>Snoerdikte</div>
                    <div>Temperatuurgebied</div>
                    <div>Toepassing</div>
                    <div>Step Quantity</div>
                    <div>Uom</div>
                </div>
            </div>
            {(full || [])
                .filter(showSelected)
                .map((product: Product, index: number) => (
                    <ProductComponent key={index} product={product} />
                ))}
        </div>
    );
};
