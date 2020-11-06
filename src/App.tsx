import React, { useEffect, useState } from 'react';
import { request } from './request/request';
import { AxiosResponse } from 'axios';
import { Data } from './interface/data';
import { Product } from './interface/product';
import { ProductComponent } from './elements/product';
import './style/index.scss';
import { ProductsFilterComponent } from './elements/product_filter';

// I like to separate pure functions outside React function so it won't be initiated everytime the component is rerendered
const getSelection = (products: Product[]): string[] =>
    (products || []).map(({ Artikelnummer }: Product) => Artikelnummer);


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
const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        request.get(`/all`).then(({ data }: AxiosResponse<Data>) => {
            setProducts(data.products);
            setSelected(getSelection(data.products));
        });
    }, []);
    const showSelected = ({ Artikelnummer }: Product) =>
        selected.includes(Artikelnummer);

    const handleSelectionChange = (selected: string[]) => setSelected(selected);

    return (
        <>
            {!!products && products.length > 1 && (
                <h1 className="title">
                    {products.length} producten vergelijken
                </h1>
            )}
            <div className="products">
                <div className="product">
                    <div className="product__header">
                        <h2 className="title">Je Selectie</h2>
                        <ProductsFilterComponent
                            full={products}
                            selected={selected}
                            onChange={handleSelectionChange}
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
                        <div className="name">Name</div>
                        <div>Sale Price</div>
                        <div>SKU</div>
                        <div>Snoerdikte</div>
                        <div>Temperatuurgebied</div>
                        <div>Toepassing</div>
                        <div>Step Quantity</div>
                        <div>Uom</div>
                    </div>
                </div>
                {(products || [])
                    .filter(showSelected)
                    .map((product: Product, index: number) => (
                        <ProductComponent key={index} product={product} />
                    ))}
            </div>
        </>
    );
};

export default App;
