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

const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        request.get(`/all`).then(({ data }: AxiosResponse<Data>) => {
            setProducts(data.products);
            setSelected(getSelection(data.products));
        });
    }, []);
    const showSelected = ({Artikelnummer}: Product) =>
        selected.includes(Artikelnummer);

    const handleSelectionChange = (selected: string[]) => setSelected(selected);
    return (
        <div className="products">
            <div className="products__header">
                <div className="products__selection">
                    <ProductsFilterComponent
                        full={products}
                        selected={selected}
                        onChange={handleSelectionChange}
                    />
                </div>
                <div className="products__attributes">
                    <div>Artikelnummer</div>
                    <div>Atp</div>
                    <div>BUP Conversion</div>
                    <div>BUP UOM</div>
                    <div>BUP Value</div>
                    <div>Badges</div>
                    <div>Channel</div>
                    <div>Display</div>
                    <div>Gross Price</div>
                    <div>Hardheid</div>
                    <div>Inwendige Diameter</div>
                    <div>Kleur</div>
                    <div>List Price</div>
                    <div>Maat Volgens AS568</div>
                    <div>Manufacturer Image</div>
                    <div>Manufacturer Name</div>
                    <div>Materiaal</div>
                    <div>Min Quantity</div>
                    <div>Name</div>
                    <div>Product Image</div>
                    <div>Sale Price</div>
                    <div>SKU</div>
                    <div>Snoerdikte</div>
                    <div>Temperatuurgebied</div>
                    <div>Toepassing</div>
                    <div>Step Quantity</div>
                    <div>Uom</div>
                </div>
            </div>
            {(products || []).filter(showSelected).map((product: Product, index: number) => (
                <ProductComponent key={index} product={product} />
            ))}
        </div>
    );
}

export default App;
