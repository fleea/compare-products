import React, { useEffect, useState } from 'react';
import { request } from './request/request';
import axios, { AxiosResponse } from 'axios';
import { Data } from './interface/data';
import { Product } from './interface/product';
import './style/index.scss';
import { ProductsComponent } from './elements/products';

/**
 * A wrapper component responsible for fetching data and displaying error and loading state
 */
const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        let unmounted = false;
        let source = axios.CancelToken.source();
        setIsError(false);
        setIsLoading(true);
        request
            .get(`/all`, {
                cancelToken: source.token,
            })
            .then(({ data }: AxiosResponse<Data>) => {
                if (!unmounted) {
                    setProducts(data.products);
                    setSelected(getSelection(data.products));
                }
            })
            .catch(() => {
                if (!unmounted) {
                    setIsError(true);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });

        return () => {
            unmounted = true;
            source.cancel('Cancelling in cleanup');
        };
    }, []);

    const handleSelectionChange = (selected: string[]) => setSelected(selected);

    return (
        <>
            {!!products && products.length > 1 && (
                <h1 className="title">
                    {products.length} producten vergelijken
                </h1>
            )}
            {!!isError && <div id="error">Error</div>}
            {!!isLoading && <>Loading</>}
            {!isError && !isLoading && (
                <ProductsComponent
                    full={products}
                    selected={selected}
                    onChange={handleSelectionChange}
                />
            )}
        </>
    );
};

// Separate pure functions outside React function so it won't be initiated everytime the component is rerendered
const getSelection = (products: Product[]): string[] =>
    (products || []).map(({ Artikelnummer }: Product) => Artikelnummer);

export default App;
