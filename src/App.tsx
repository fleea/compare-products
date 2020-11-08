import React, { useEffect, useState } from 'react';
import { request } from './request/request';
import axios, { AxiosResponse } from 'axios';
import { Data } from './interface/data';
import { Product } from './interface/product';
import { RowAttribute } from './interface/general';
import './style/index.scss';
import { ProductsComponent } from './elements/products';

/**
 * A wrapper component responsible for fetching data and displaying error and loading state
 */
const App = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [attributes, setAttributes] = useState<RowAttribute[]>([]);
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
                    setAttributes(getAttributes(data.products));
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
                    attributes={attributes}
                />
            )}
        </>
    );
};

// Separate pure functions outside React function so it won't be initiated everytime the component is rerendered
const getSelection = (products: Product[]): string[] =>
    (products || []).map(({ Artikelnummer }: Product) => Artikelnummer);

// This function get each row name and key from attributes being fetched by products (or any object) from the API server
const getAttributes = (products: Product[] = []): RowAttribute[] => {
    const hiddenAttributes = [
        'atp',
        'badges',
        'name',
        'manufacturerImage',
        'productImage',
    ];
    const uncomparableAttributes = [
        'salePrice',
        'manufacturerName',
        'grossPrice',
        'BUP_UOM',
        'BUP_Value',
        'uom',
        'productImage',
        'BUP_Conversion',
        'minQuantity',
        'manufacturerImage',
        'name',
        'sku',
        'listPrice',
        'channel',
        'display',
        'atp',
    ];
    return products
        .map((product: Product) => {
            // Get Object keys as an array
            return Object.keys(product);
        })
        .reduce((total: string[], current: string[]) => {
            // Remove duplication, make sure all row will contain all attributes in case products attributes are not consistent
            return total.concat(
                current.filter((key: string) => total.indexOf(key) < 0)
            );
        }, [])
        .filter((key: string) => !hiddenAttributes.includes(key))
        .sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))
        .map((key: string) => {
            // This regex will replace underscore and dash with spaces, and detect camel case before inserting space between.
            const name = key
                .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
                .replace(/[-_]/g, ' ');
            return {
                name: name, // Prettified name to display as row header
                key: key, // Original
                toBeCompared: !uncomparableAttributes.includes(key),
            };
        });
};

export default App;
