import React from 'react';
import { Product } from '../interface/product';
import { WithAttributes } from '../interface/value';
import { Image } from './image';
import { ProductsAttributesComponent } from './product_attributes';

export interface ProductComponentProps extends WithAttributes {
    product: Product;
}

export const ProductComponent = ({
    product,
    attributes = [],
}: ProductComponentProps) => {
    const { badges, listPrice, name, productImage, uom } = product;
    return (
        <div className="product" role="listitem">
            <div className="product__header">
                {!!productImage && (
                    <Image
                        src={productImage}
                        key={productImage}
                        defaultSize={100}
                    />
                )}
                <h2 className="title" role="columnheader">
                    {name}
                </h2>
                <div className="product__price">
                    <h3>{listPrice}</h3>
                    <span className="product_uom">
                        {!!uom && `per ${uom} / excl. btw`}
                    </span>
                </div>
            </div>
            <div className="product__attributes-container">
                <ProductsAttributesComponent attributes={attributes} />
                <div className="product__attributes">
                    <div className="product__badges">
                        {(badges.split('|') || []).map(
                            (src: string, index: number) => (
                                <Image
                                    key={`${index}-${src}`}
                                    src={src}
                                    defaultSize={40}
                                />
                            )
                        )}
                    </div>
                    {attributes.map(({ key, toBeCompared }) => (
                        <div
                            key={key}
                            className={`attr-value${
                                toBeCompared ? ' compare' : ''
                            }`}
                        >
                            {product[key] || '-'}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
